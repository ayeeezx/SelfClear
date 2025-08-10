// index.js
// AVISO: usar selfbot viola os Termos do Discord e pode banir a conta.

const { Client } = require('discord.js-selfbot-v13');

// Cores ANSI
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const cyan = "\x1b[36m";
const reset = "\x1b[0m";

// === CONFIG ===
const TOKEN = 'SEU_TOKEN_AQUI'; // <-- cole seu token aqui
const CONCURRENCY = 6;
const BETWEEN_BATCH_MS = 180;
const BETWEEN_PAGES_MS = 250;
const BACKOFF_MS = 2000;
// =============

function isValidToken(token) {
  const parts = token.split(".");
  return (
    parts.length === 3 &&
    /^[A-Za-z0-9_\-]+$/.test(parts[0]) &&
    /^[A-Za-z0-9_\-]+$/.test(parts[1]) &&
    /^[A-Za-z0-9_\-]+$/.test(parts[2]) &&
    token !== 'SEU_TOKEN_AQUI' &&
    token.trim() !== ''
  );
}

// Checagem do token (--check)
if (process.argv.includes('--check')) {
  if (!isValidToken(TOKEN)) {
    console.error(`${red}==================================================${reset}`);
    console.error(`${red}[ERRO] Token inválido ou ausente no index.js${reset}`);
    console.error(`${yellow}--------------------------------------------------${reset}`);
    console.error(`${yellow}Como corrigir:${reset}`);
    console.error(`${yellow}  1. Abra o arquivo index.js${reset}`);
    console.error(`${yellow}  2. Substitua 'SEU_TOKEN_AQUI' pelo seu token real${reset}`);
    console.error(`${yellow}  3. Salve e feche o arquivo${reset}`);
    console.error(`${red}==================================================${reset}`);
    process.exit(1);
  }
  console.log(`${green}Token válido detectado.${reset}`);
  process.exit(0);
}

const client = new Client({ checkUpdate: false });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isChannelId = (v) => typeof v === 'string' && /^\d{17,20}$/.test(v);

async function safeDelete(msg) {
  try {
    await msg.delete();
    return true;
  } catch (e) {
    const retry = Number(e?.headers?.['retry-after']) || Number(e?.retry_after) || 0;
    await sleep(retry ? retry * 1000 + 100 : BACKOFF_MS);
    return false;
  }
}

async function deleteInBatches(msgs) {
  let ok = 0, fail = 0;
  for (let i = 0; i < msgs.length; i += CONCURRENCY) {
    const slice = msgs.slice(i, i + CONCURRENCY);
    const results = await Promise.all(slice.map((m) => safeDelete(m)));
    for (const r of results) r ? ok++ : fail++;
    process.stdout.clearLine?.(0);
    process.stdout.cursorTo?.(0);
    process.stdout.write?.(`${green}Deletadas: ${ok}${reset}  ${red}Falhas: ${fail}${reset}`);
    await sleep(BETWEEN_BATCH_MS);
  }
  return { ok, fail };
}

async function clearOwnMessages(channel) {
  console.log(`${cyan}🧹 Limpando canal: ${channel.name ?? '(sem nome)'} (${channel.id})${reset}`);
  let before;
  let totalOk = 0, totalFail = 0;
  const t0 = Date.now();

  while (true) {
    const fetched = await channel.messages
      .fetch({ limit: 100, ...(before && { before }) })
      .catch((e) => {
        console.error(`\n${red}Erro ao buscar mensagens:${reset} ${e?.message ?? e}`);
        return null;
      });

    if (!fetched || fetched.size === 0) break;
    before = fetched.lastKey();

    const mine = fetched.filter((m) => m?.author?.id === client.user.id && !m.system);
    if (mine.size > 0) {
      try {
        const { ok, fail } = await deleteInBatches([...mine.values()]);
        totalOk += ok;
        totalFail += fail;
      } catch (e) {
        console.error(`\n${red}Erro ao deletar lote:${reset} ${e?.message ?? e}`);
        await sleep(BACKOFF_MS);
      }
    }
    await sleep(BETWEEN_PAGES_MS);
  }

  process.stdout.write('\n');
  const secs = Math.max(1, Math.round((Date.now() - t0) / 1000));
  console.log(`${green}✅ Concluído:${reset} OK=${green}${totalOk}${reset}  Falhas=${red}${totalFail}${reset}  Tempo=${cyan}${secs}s${reset}`);
}

(async () => {
  let exitCode = 0;
  try {
    const channelId = process.argv[2];
    if (!isChannelId(channelId)) {
      console.error(`${red}❌ Informe o ID do canal como primeiro argumento (17–20 dígitos).${reset}`);
      exitCode = 1; return;
    }

    await new Promise((res) => client.once('ready', () => {
      console.log(`${green}✅ Logado como${reset} ${cyan}${client.user.username}${reset}`);
      res();
    }));

    const channel = await client.channels.fetch(channelId).catch(() => null);
    if (!channel) {
      console.error(`${red}❌ Canal não encontrado ou sem acesso.${reset}`);
      exitCode = 1; return;
    }

    await clearOwnMessages(channel);
  } catch (err) {
    console.error(`${red}❌ Erro inesperado:${reset} ${err?.message ?? err}`);
    exitCode = 1;
  } finally {
    try { client.destroy(); } catch {}
    process.exit(exitCode);
  }
})();

client.login(TOKEN).catch((err) => {
  console.error(`${red}❌ Erro ao fazer login:${reset} ${err?.message ?? err}`);
  try { client.destroy(); } catch {}
  process.exit(1);
});
