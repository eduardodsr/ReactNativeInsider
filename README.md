<h1  align="center"> React Native Insider</h1>

<p  align="center"> 
    <a  href="#sobre">Sobre</a> | 
    <a  href="#layout">Layout</a> | 
    <a  href="#links">Links</a> | 
    <a  href="#techs">Tecnologias</a> | 
    <a  href="#aplicacao">Aplicação</a> | 
    <a  href="#autor">Autor</a> | 
    <a  href="#licenca">Licença</a> 
</p>


<h2  id="sobre"> 📋 Sobre o projeto</h2>

Projeto desenvolvido durante o evento React Native Insider (5º Ed) do [sujeitoprogramador](https://sujeitoprogramador.com/).
O App React Native Insider é um blog para Smartphones. 

---
  
<h2  id="layout"> 🎨 Acessar o layout </h2>

Estrutura inicial do projeto, link do projeto no [Figma.](https://www.figma.com/file/Hgb3JJjhfuG5zMXwjC72o4/React-Native-Insider-5)
  - Home
  - Detalhes
  - Categorias
  - Busca

---

<h2  id="links"> 🔗 Links usados para instalação/configuração</h2>

### 1º PASSO

- Instalar [NodeJS](https://nodejs.org/en/)


### 2º PASSO

- Instalar o CLI do Expo, [Expo - Link da Documentação](https://docs.expo.dev/versions/latest/)
  - Abra o seu Terminal e digite:
    - <code>npm install --global expo-cli</code>


### 3º PASSO

- Você pode rodar no Emulador Android ou Execução o App direto pelo seu celular

### Instalar/Configurar o Android Studio 

- Link para baixar o [Android Studio](https://developer.android.com/studio)

- Abrir o Android Studio, habilitar em SDK Tools
  - Android SDK Build...
  - Android SDK Command...
  - Android Emulator
  - Android SDK Plataform Tools
  - Google Play Services
  - Intel X86 Emulator Accelerator (somente para Processador Intel)

### Criar o Emulador

- No tela inicial do Android Studio, após a instalação
  - Abra o Virtual Device Manager para criar o Emulador
    - Device Definition: <code> Pixel 3 </code>
    - System Image: <code> Q | Api Level 29 | x86_64 | Android 10.0 (Google Play) </code>


### 4º PASSO

- Criar um novo projeto utilizando o expo
  - Abra o seu terminal (selecione a pasta) e digite:
    - <code> expo init blog </code>
    - Selecionar:
      -  <code> blank </code>
         -  Será criado toda a estrutura de pastas do projeto.

- Agora podemos rodar/executar o nosso projeto (App).
  - Volte para seu terminal e digite:
    - <code> cd blog </code>
      - Dentro da pasta do projeto (diretório blog) digite:
        - <code> expo start </code>


---


<h2  id="techs"> ⚙️ 🚀   Tecnologias Utilizadas / Bibliotecas </h2>

 
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [React Native](https://reactnative.dev)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  
- [Expo](https://expo.io) &rarr; Expo é uma ferramenta utilizada no desenvolvimento mobile, react native, que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.
  
- [React Navigation](https://reactnavigation.org/) &rarr; React Navigation é uma biblioteca popular para roteamento e navegação em uma aplicação React Native. Essa biblioteca ajuda a resolver o problema de navegar entre várias telas e compartilhar dados entre elas.
  
- [Axios](https://github.com/axios/axios) &rarr; Axios é um cliente HTTP simples baseado em promises para o navegador e para o node.js.

- [useEffect, useState](https://pt-br.reactjs.org/docs/hooks-effect.html) Usando Effect Hook &rarr; Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

<br>

### Axios

https://axios-http.com/ptbr/
https://axios-http.com/ptbr/docs/intro
https://blog.rocketseat.com.br/axios-um-cliente-http-full-stack/


- Installing - npm: 
  - <code> npm install axios </code>

- Installing - yarn: 
  - <code> yarn add axios</code>


### React Navite Asysn Storage

https://react-native-async-storage.github.io/async-storage/docs/install/

- Install with Expo CLI
  - <code> expo install @react-native-async-storage/async-storage </code>


### React Navigation

Expo &rarr; React Navigation &rarr; Instalando as seguintes bibliotecas. No terminal executar o comando:
- <code> expo install @react-navigation/native </code>
- <code> expo install react-native-screens react-native-safe-area-context </code>
- <code> expo install @react-navigation/native-stack </code>

<br>

### Expo

Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

- **Para que serve o expo?**
  - Quando iniciamos no desenvolvimento mobile percebemos que o número de API’s e recursos nativos que podemos controlar através da nossa aplicação é gigante, e muitas vezes não nos recordamos de todas opções que temos disponíveis.

  - O **Expo**, por sua vez, oferece grande parte desses recursos de forma nativa e integrada e, por exemplo, você tem acesso à recursos como câmera, microfone, player de música, entre outros, de forma muito simples utilizando essa ferramenta.

- **Vantagem**
  - A vantagem é que nesse formato o desenvolvedor inicia muito rápido e em poucos minutos está criando sua aplicação, toda parte complicada foi abstraída.

- **Links**
  - https://blog.gft.com/br/2020/12/29/aplicacao-mobile-com-expo/
  - https://medium.com/@guimaraessilas/expo-io-a3bd9c62846c
  
<br>

### Back End / REST API / Headless CMS - Strapi

- CMS (sigla para Content Management System — Sistema de Gerenciamento de Conteúdo)
- Links
  - https://github.com/strapi/strapi
  - https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html
  - https://willianjusten.com.br/introducao-ao-strapi-headless-cms


### Strati

- Terminal (create-strapi-app)
  - <code> npx create-strapi-app@latest **my-project** --quickstart </code>
  
  - <code> npx create-strapi-app@latest blog-api --quickstart </code>

<br>

- Configurar o Admin (Strapi)
  - http://localhost:1337/admin/auth/register-admin


---

<h2 id="aplicacao"> 🎲  Rodando essa aplicação: </h2>

### 📂 Pré-requisitos

- [Git](https://git-scm.com)
- [NodeJs](https://nodejs.org/en/)
- [Android Studio](https://developer.android.com/studio) 

### 🌀 Clonando o repositório

```bash
# Clone este repositório
https://github.com/eduardodsr/ReactNativeInsider.git

# [FrontEnd] Acesse a pasta do projeto no terminal/cmd
$ cd blog

# [BackEnd] Acesse a pasta do projeto no terminal/cmd
$ cd blog-api
```

### 📂 Como rodar este projeto (App) - Front-End ⚠️

```bash
# Selecionar a pasta blog
$ cd blog

# Instale as dependências
$ yarn install

# Execute a Aplicação em Desenvolvimento
$ expo start 

# O servidor inciará na porta:19002 - acesse http://localhost:19002
$ http://localhost:19002/
```

### 📂 Como rodar este projeto (App) - API / Back-End ⚠️

```bash
# Selecionar a pasta blog-api
$ cd blog-api

# Execute o Back-End
$ yarn develop
# ou
$ npm run develop

# O servidor inciará na porta:1337 - acesse http://localhost:1337/admin
$ http://localhost:1337/admin
```

### blog-api / Back-End

 Testes endpoint (API) :white_check_mark:


- [/api/post](http://localhost:1337/api/posts)
- [/api/post/1](http://localhost:1337/api/posts/1)
- [/api/post/2](http://localhost:1337/api/posts/2)
- [/api/post/3](http://localhost:1337/api/posts/3)
  
- [/api/posts?populate=cover](http://localhost:1337/api/posts?populate=cover)

- [api/categories](http://localhost:1337/api/categories)
- [api/categories/1](http://localhost:1337/api/categories/1) 
- [api/categories/2](http://localhost:1337/api/categories/2)
- [api/categories/3](http://localhost:1337/api/categories/3)
- [api/categories/4](http://localhost:1337/api/categories/4)
 

---


<h2 id="autor"> 😀 Autor</h2>


<div align="rigth">
  <a href="https://github.com/eduardodsr">
   <img align="center" style="border-radius: 100%;" src="https://avatars.githubusercontent.com/u/66234125?s=400" width="100px;" alt="Foto do GitHub de eduardodsr"/>
  </a>
</div>

<br>

- `Dev:` Eduardo da Silva Rodrigues

- `GitHub:` [github.com/eduardodsr](https://www.github.com/eduardodsr) :link:

- `E-mail:` <eduardodsr@gmail.com> :email:

---

<h2  id="licenca"> ⚠️ Licença</h2>

Esse projeto esta sobre a licença [MIT]().
