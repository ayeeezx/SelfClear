# Limpador de Mensagens do Discord

## ═══════════════════════
## 📋 Descrição
Este projeto é um **Limpador de Mensagens** para Discord que utiliza **Node.js** e a biblioteca **discord.js-selfbot-v13**.  
Ele foi desenvolvido para remover de forma automática todas as mensagens enviadas por você em um canal específico.  
⚠️ O uso de selfbots viola os Termos de Serviço do Discord e **pode resultar no banimento da sua conta**.

## ═══════════════════════
## ⚙️ Funcionalidades
- Deleta todas as mensagens enviadas pela conta no canal informado.
- Controle de velocidade e lotes para evitar rate limits.
- Painel interativo no **CMD**.
- Verificação automática de:
  - Presença do `index.js`.
  - Presença do **Node.js** instalado.
  - Token válido configurado no código.

## ═══════════════════════
## 🛠️ Requisitos
- **Node.js** instalado ([Download aqui](https://nodejs.org/))
- Conta no Discord (token da conta configurado no `index.js`)
- Sistema operacional **Windows** (compatível com CMD)

## ═══════════════════════
## 🚀 Como Usar
1. **Baixe ou clone** este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. **Instale as dependências**:
   ```bash
   npm install discord.js-selfbot-v13
   ```
3. **Configure o token**:
   - Abra o arquivo `index.js`.
   - Substitua `'SEU_TOKEN_AQUI'` pelo token da sua conta Discord.
4. **Execute o .bat**:
   - Dê um **duplo clique** no arquivo `start.bat` (ou equivalente).
   - Informe o ID do canal que deseja limpar.

## ═══════════════════════
## 📄 Estrutura do Projeto
```
📂 pasta-do-projeto
 ├── index.js        # Script principal do selfbot
 ├── start.bat       # Painel em CMD para iniciar o script
 ├── package.json    # Arquivo de configuração do Node.js
 └── README.md       # Documentação do projeto
```

## ═══════════════════════
## ⚠️ Avisos Importantes
- **Não compartilhe seu token** com ninguém.
- O uso deste script é **por sua conta e risco**.
- Sempre teste em **contas secundárias** para evitar perda de dados.

## ═══════════════════════
Criado por: @ayeeezx
