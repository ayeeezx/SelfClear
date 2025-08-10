# 🧹 Limpador de Mensagens do Discord

> **Atenção:** Este projeto utiliza **selfbot**. Isso **viola os Termos de Serviço do Discord** e pode resultar no **banimento** da sua conta.  
> Use **por sua conta e risco**.

---

## 📌 Sobre o Projeto
Este projeto foi desenvolvido para **remover rapidamente todas as mensagens enviadas por você** em um canal específico do Discord.  
Criado por **@ayeeezx**, ele é totalmente automatizado e fácil de usar, contando com um painel `.bat` amigável para usuários de Windows.

---

## ⚙️ Funcionalidades
✅ Deleta apenas **mensagens enviadas pela sua conta**  
✅ Limpeza **rápida** com controle de velocidade e lotes  
✅ Verificação automática de **token** antes de iniciar  
✅ Interface em `.bat` amigável para o Windows  
✅ Totalmente **open-source**  

---

## 📂 Estrutura do Projeto
```bash
📁 Projeto
 ├── index.js        # Script principal em Node.js
 ├── start.bat       # Painel interativo no Windows
 ├── package.json    # Configuração do Node.js
 ├── package-lock.json # Gerado automaticamente (opcional)
 └── README.md       # Este arquivo
```

---

## 🛠️ Ferramentas Necessárias
Antes de usar, instale:
- [**Node.js**](https://nodejs.org/) (versão LTS recomendada)
- **Git** (opcional, apenas para clonar via terminal)
- Conta no **Discord** (óbvio 😅)

---

## 📥 Como Instalar

### 1️⃣ Baixe ou clone o repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instale as dependências
```sh
npm install
```

---

## 🚀 Como Usar

### 1️⃣ Obtenha seu Token
1. Abra o Discord no navegador.
2. Pressione `F12` para abrir as **Ferramentas de Desenvolvedor**.
3. Vá até a aba **Network**.
4. Pesquise por `messages` ou `science`.
5. Clique na requisição e copie o valor do **Authorization** → este é o **seu token**.

⚠️ **Não compartilhe seu token** — ele dá acesso total à sua conta.

---

### 2️⃣ Configure o Token
No arquivo **`index.js`**, localize:
```js
const TOKEN = 'SEU_TOKEN_AQUI';
```
E substitua por seu token real, entre aspas.

---

### 3️⃣ Execute
No Windows, basta dar **duplo clique** no arquivo:
```
start.bat
```
Siga as instruções no terminal, cole o **ID do canal** e aguarde a limpeza.

---

## 🧩 Como Obter o ID de um Canal no Discord
1. Vá em **Configurações > Avançado** e ative o **Modo Desenvolvedor**.
2. Clique com o botão direito no canal desejado.
3. Selecione **Copiar ID**.

---

## ⚠️ Avisos Importantes
- ❌ **Não use em contas que você não quer arriscar perder**.
- ❌ **Não compartilhe seu token** com ninguém.
- ⏳ Dependendo da quantidade de mensagens, o processo pode levar **alguns minutos**.
- 🛠 Este projeto foi criado para **uso pessoal** e **educacional**.

---

## 👨‍💻 Autor
**Desenvolvido por:** [@ayeeezx](https://github.com/seu-usuario)  
📅 **Versão:** 1.0  
📜 **Licença:** MIT
