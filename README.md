# Limpador de Mensagens do Discord

Este projeto é uma ferramenta em Node.js para remover mensagens enviadas por sua própria conta no Discord de forma rápida e organizada. 
O sistema é controlado via terminal (painel .BAT), proporcionando uma interface simples e direta para o usuário.

## Aviso Importante
O uso de selfbots viola os Termos de Serviço do Discord e pode resultar em banimento da conta. 
**Total responsabilidade e risco de quem for usar**

## Funcionalidades
- Exclusão automatizada de mensagens enviadas pelo usuário em um canal específico.
- Operação em lotes para maior velocidade e segurança contra bloqueios.
- Verificação automática do token antes da execução.
- Interface simples via arquivo `.bat`.

## Requisitos
Para utilizar este projeto, é necessário ter instalado:
- **Node.js** (versão recomendada: 18 ou superior)  
  [Download do Node.js](https://nodejs.org/)
- **NPM** (já incluso na instalação do Node.js)
- **Biblioteca** `discord.js-selfbot-v13`  
  Para instalar, execute no terminal:
  ```bash
  npm install discord.js-selfbot-v13
  ```

## Como Usar
1. Clone ou baixe este repositório.
2. Coloque o arquivo `index.js` e o arquivo `.bat` na mesma pasta.
3. Abra o arquivo `index.js` e cole seu token na variável `TOKEN`:
   ```javascript
   const TOKEN = 'SEU_TOKEN_AQUI';
   ```
4. Execute o arquivo `.bat`.
5. Insira o ID do canal do Discord onde deseja apagar suas mensagens.

## Observações
- O script só apaga mensagens enviadas pela conta que forneceu o token.
- Certifique-se de ativar o **Modo Desenvolvedor** no Discord para conseguir copiar o ID dos canais.

## Estrutura do Projeto
```
.
├── index.js        # Script principal em Node.js
├── limpador.bat    # Painel em modo texto para interação
└── README.md       # Documentação do projeto
```

## Autor
Projeto desenvolvido por **@ayeeezx**.
