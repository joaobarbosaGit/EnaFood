# API - EnaFood 

## Started do Projeto

#### Subindo Conteiners Necessários

Dentro do diretório raiz, execute o seguinte comando para subir os containers docker.

`docker-compose up`

#### Instalação das Dependências

Dentro do diretório raiz, execute o seguinte comando para instalação das dependências do projeto.

`npm install`

#### Iniciando Aplicação em Modo de Desenvolvimento

Execute o comando a seguir para iniciar a aplicação na porta 3333 em modo de desenvolvimento.

`npm run dev`

#### Build da Aplicação

Execute o comando a seguir para realizar o build da aplicação, destinado para o diretório: ./dist

`npm run build`

#### Iniciando Aplicação em Modo de Produção

Execute o comando a seguir para iniciar a aplicação na porta 3333 em modo de produção.

`npm run prod`


## Sobre o Projeto

O projeto API - Enacom foi desenvolvido baseado no teste técnico de seleção para ingresso na equipe de desenvolvedores da empresa ENACOM, nomeado de "Desafio Delivery", onde se aplica as seguintes orientações:

#### Considere que você irá projetar a API e o banco de dados de um sistema de delivery, o EnaFood.

* Cada usuário poderá colocar na sacola produtos que estejam disponíveis para compra.
* Ao final o usuário escolhe a forma de pagamento (cartão de crédito, vale alimentação, ...),
confirma o endereço de entrega.

#### Deve-se considerar a escalabilidade do projeto, de acordo com suas fases:

* Fase 1 - MVP: Nesta fase o EnaFood possui apenas poucos usuários (por volta de 100) e cada
usuário pede, em média, 5 vezes por mês. 
* Fase 2 – early adopters: Nesta fase o EnaFood possui mais usuários (por volta de 10.000) e
cada usuário compra, em média, 10 vezes ao mês. 
* Fase 3 – early majority: Nesta fase o EnaFood possui ainda mais usuários (por volta de
1.000.000) e cada usuário compra, em média, 25 vezes ao mês.
* Fase 4 – late majority: Nesta fase o EnaFood é um sucesso e é a principal rede de delivery
brasil (por volta de 50.000.000 de usuários) e cada usuário publica, em média, 30 vezes ao
mês. 

#### Arquitetura da API - Design Patterns

Para desenvolvimento da API, fora utilizado padrões de projeto, visando uma melhor performance, organização e entendimento da arquitetura e estrutura da API, segue os padrões utilizados:

* **SOLID** 

* **Clean Architecture**

* **Observação**: os dois padrões não foram implementados em 100% de suas definições.

#### Arquivos do Diretório Raiz do Projeto

* **.env** - arquivo que contém as variáveis de ambiente necessárias para execução do projeto.
* **.gitignore** - arquivo de texto oculto utilizado para descrever ao Git as pastas e arquivos que devem ser ignorados.
* **babel.config.js** - arquivo que contém as configurações necessárias para o Babel executar o build do projeto.
* **docker-compose.yml** - arquivo que contém as configurações docker para execução dos conteiners.
* **Enacom.postman_collection.json** - arquivo para importação da collection postman, com exemplos das requisições da API.
* **mongo-init.js** - arquivo que assim que o container sobe, e executado para criar as collections utilizadas no projeto, e importar os dados iniciais.
* **package.json** - arquivo que gerencia um projeto Node, contendo informações sobre o projeto, dependências do projeto e scripts do projeto.
* **tsconfig.json** - arquivo que contém configurações do typescript.

## Ferramentas e Tecnologias Utilizadas  

#### Git

Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.   

[github](https://github.com/)  

#### Docker

Conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.   

[Docker Documentation](https://docs.docker.com/)  

#### Node

Software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

[Node Documentation](https://nodejs.org/en/docs)  

#### Typescript

Superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.

[Typescript Documentation](https://www.typescriptlang.org/docs/)  

#### Express

Framework para Node.js que fornece recursos mínimos para construção de servidores web.

[Express Documentation](https://expressjs.com/)  

#### MongoDB

Software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++.

[MongoDB Documentation](https://www.mongodb.com/docs/)  

#### Typeorm

Biblioteca ou ORM(*Object Relational Mapper*), que ajuda a trabalhar com bancos de dados em seus projetos Node. js.

[Typeorm  Documentation](https://typeorm.io/)  

#### Tsyringe

Biblioteca Node para injeção de dependências.

[Tsyringe Documentation](https://github.com/microsoft/tsyringe)  

#### Babel

Transcompilador JavaScript gratuito e de código aberto que é usado principalmente para converter código ECMAScript 2015+ em código JavaScript compatível com versões anteriores que pode ser executado por mecanismos JavaScript mais antigos.

[Babel Documentation](https://babeljs.io/docs/)  

#### Swagger

Aplicação open source que auxilia desenvolvedores nos processos de definir, criar, documentar e consumir APIs.

[Swagger Documentation](https://swagger.io/docs/)  

## Documentação

[Open API - Swagger](http://localhost:3333/api-docs/)