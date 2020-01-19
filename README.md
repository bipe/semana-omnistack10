
# Aplicações DevRadar - Omnistack 10 - rocketseat
Stack Node.js, ReactJS e React Native

## 1. Introdução

  A semana Omnistack 10 propôs o desenvolvimento de uma aplicação chamada DevRadar, desenvolvendo o back-end, plataforma web e mobile para a mesma usando Node.JS, ReactJS e React-native.
  A aplicação consiste em cadastrar desenvolvedores numa base de dados e possibilitar uma busca num determinado raio da localização do usuário por desenvolvedores cadastrados, filtrando por tecnologia em que atuam.


## 2. Notas sobre as aulas

- Abordagem SPA: Servidor traz apenas resposta em JSON, sendo toda a parte de apresentação de HTML CSS e JS
feita no "cliente", no seu browser. A pagina NÃO recarrega.

- Abordagem tradicional: A página completa HTML é retornada na requisição, limitando o front-end. 


### 2.1 Conceitos do React

-Componente: Bloco isolado de HTML, CSS e JS o qual não interfere no restante da aplicação (usando a primeira letra maiúscula como boa prática)
-Estado: Informações mantidas pelo componente (lembrar do conceito IMUTABILIDADE - um dado não é alterado, mas sim um novo dado é gerado com base no valor do dado anterior)
-Propriedade: Como os atributos do HTML (title, class, id, etc). Informaçõess q um componente PAI (e.g. app) passa pro filho (e.g. header)



### 2.2 Notas de mudanças para estado de produção
- Gerenciar permissões de acesso ao servidor (whitelist) no mongoDB atlas


## 3. Começando um projeto mobile 
-  `yarn global add expo` (instalação do expo - bom pra apps pequenos ou com pouca escalabilidade)
- `expo init nome_do_projeto` -> blank -> usar yarn
- `cd nome_do_projeto` -> `yarn start`
- Cria-se uma pasta `src/pages/` , onde ficam os JS pra cada página da aplicação, e na `/src` um arquivo `routes.js`
- Rodar no terminal dentro do projeto a Library de navegação do app :
`yarn add react-navigation`
`yarn add @react-native-community/masked-view`
`yarn add react-navigation-stack` //instalação da navegação por pilha (usando botões)

Próximos passos dependem se o expo é usado ou não, ver site: https://reactnavigation.org/docs/en/getting-started.html

- Criar createStackNavigator com um objeto que passa as rotas do app, visualizar no “Hello react navigation” 
- As APIs usadas (como location e MapView) possuem a documentação no site de APIs do expo, podemos procurar dependências e usos lá.

### 3.1 Observações quanto ao projeto mobile
1- No react-native, não existe “contexto” (`h1 h2 h3 p` etc são textos, porém diferentes. Aqui só existe `Text`, todos são iguais, a estilização é diferenciada usando `“style”`). Também não existem classes e ids.
2- O style é JS, então a forma usada é `fontFamily` ao invés do `font-family` do css, e os valores são dados entre aspas duplas, como strings.
3- Quando uma imagem é pegada de fora (internet), não aparece se você não estilizar com um *TAMANHO*
4- Em `api.js` , depende de onde estamos acessando o app. Se for um dispositivo real, copiamos o ip mostrado na pagina do expo, se for um emulador, localhost, MAS USANDO A PORTA USADA NO BACKEND.
5- O backend envia resposta ao front apenas mediante requisição, mas precisamos adicionar devs em tempo real, então o backend precisa mandar respostas sem necessitar de requisição, pra isso usamos protocolo websocket (`socket.io`) 


