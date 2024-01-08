![Frame 22 (1)](https://github.com/maikonalexandre/wa-service/assets/86725282/67c14a42-fad4-479d-a882-236edf188afa)


## 👋 Introdução
**wa-service** foi feito usando node js, se consiste em uma api que pode ser utilizada como um serviço externo para envios de mensagens e imagens através do whatsapp (ideal para pequenos relatórios por exemplo). Essa api também conta com sistema para envio de email caso por algum motivo a conexão com o watsapp seja perdida.


## ⚙️ Instalação
Voce vai precisar:

- [Node.js 16+ (recommended 18 LTS)](https://nodejs.org/en/).
- [Git](https://git-scm.com/).

1. Faça um fork desse projeto:

- [Click here](https://github.com/maikonalexandre/wa-service/fork).

2. Clone o repositório localmente:

```bash
git clone git@github.com:YOU_USER/wa-service.git
```

3. Instale as dependencias:

```bash
npm install
# or
pnpm install
# or
yarn install
```

4. Crie um **.env** arquivo com o seguinte conteudo:

> 🚧 As variaveis ambientes precisam estar de acordo com o arquivo **.env.exemple**
   
```bash
# Auth config
API_TOKEN:

# Resend Key
RESEND_KEY:

# Api adm email 
ADM_EMAIL=:
```
5. Rode a aplicação:

```bash
# Run the project:
npm run dev
```

6. Pronto 🥳, agora so escanei o código qr no terminal. 


## 🛠️ Tecnologias/Ferramentas utilizadas

* [Fastify]()
* [Bayles]()
* [typescript]()
* [resend]()
* [zod]()

## 🔑 License

- [MIT](https://opensource.org/license/mit/).



