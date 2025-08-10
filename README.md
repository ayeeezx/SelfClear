# Limpador de Mensagens do Discord

Este projeto é uma ferramenta em **Node.js** para deletar mensagens enviadas por um usuário específico em um canal do Discord.  
O script utiliza a biblioteca **discord.js-selfbot-v13** e deve ser usado com cautela, pois **selfbots violam os Termos de Serviço do Discord**.

## Aviso Importante
O uso de selfbots pode resultar no **banimento permanente** da sua conta do Discord.  
Este projeto é para fins **educacionais** e **não é recomendado** para uso em contas principais.

## Requisitos

- **Node.js** instalado ([Download Node.js](https://nodejs.org/))
- **npm** instalado (já incluso no Node.js)
- Conta no Discord (token necessário)
- Ativar **Modo Desenvolvedor** no Discord para obter IDs de canais

## Instalação

1. Clone este repositório ou baixe os arquivos.
2. Instale as dependências:
   ```bash
   npm install discord.js-selfbot-v13
   ```
3. Abra o arquivo `index.js` e insira seu token na variável:
   ```javascript
   const TOKEN = 'SEU_TOKEN_AQUI';
   ```

## Uso

1. No Discord, ative o **Modo Desenvolvedor** nas configurações.
2. Copie o ID do canal que deseja limpar.
3. Execute o script através do arquivo `.bat`:
   ```bash
   limpador.bat
   ```
4. Digite o ID do canal quando solicitado e aguarde a conclusão.

## Estrutura dos Arquivos

- **index.js** → Código principal em Node.js que executa a limpeza.
- **limpador.bat** → Interface no terminal para executar o script facilmente.
- **README.md** → Este guia.

## Observações

- Somente mensagens **enviadas por você** serão deletadas.
- Mensagens de sistema não serão apagadas.
- O script respeita limites de requisições do Discord para evitar bloqueios temporários.
- Este projeto foi desenvolvido com foco educacional.

## Licença

Este projeto é distribuído livremente e sem garantias. O uso é de sua total responsabilidade.
