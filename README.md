# server-api-node

<p>Servidor node para prover API de acesso ao banco de dados Mongodb.</p>

---------------------------------------------------------------
## Requisitos:

<p>NodeJS - Interpretador de javascript.</p>
<p>NPM - Node Package Manager, gerenciador de pacotes para NodeJS.</p>

---------------------------------------------------------------
## Implementação do ambiente:

### Linux Fedora 27

<code>sudo dnf update -y</code>
<p>/* Dependência */</p>
<code>sudo dnf install libuv -y</code>
<p>/* Programas */</p>
<code>sudo dnf install nodejs npm -y</code><br> 

### Windows e outros unix like
<p>Acesse: <a href="https://nodejs.org/en/download/">nodejs.org</a></p>

----------------------------------------------------------------

## Baixando e configurando

<p>Abra no windows o CMD ou o PowerShell ou em unix like o terminal e digite linha por linha:</p>
<p>/* Clona o repositório remoto */</p>
<code>git clone https://github.com/wesleyBU/server-api-node.git</code>
<p>/* Altera para dentro da pasta do projeto */</p>
<code>cd server-api-node</code>
<p>/* Solicita a instalação da dependências dentro de package.json */</p>
<code>npm install</code>

----------------------------------------------------------------
## Executando o server

<p>Abra no windows o CMD ou o PowerShell ou em unix like o terminal.</p>
<p>Navegue para dentro da pasta do projeto "server-api-node" e digite:</p>
<code>node server.js</code>
<p>Para parar aperte:</p>
<code>ctrl + C</code>


### Opcional

<p>Caso queira que o servidor seja reiniciado automáticamente a cada alteração de seu código instale o utilitário Nodemon. Essa ferramenta monitora o arquivo em questão e o reexecuta a qualquer modificação de seu código.</p>

<code>npm install -g nodemon</code>

<p>A flag "-g" significa "global" assim permitindo que o nodemon seja invocade em qualquer projeto descartando a necessidade de instalá-lo novamente.</p>

<p>Agora em ves de rodar o servidor com "node server.js" use:</p>
<code>nodemon server.js</code>

----------------------------------------------------------------
## Links de apoio

<p><a href="https://github.com/estacaohack3">Estacaohack3</a></p>
<p><a href="http://expressjs.com/pt-br/starter/hello-world.html">ExpressJS</a></p>
<p><a href="https://github.com/expressjs/cors#usage">Cors</a></p>
<p><a href="https://www.npmjs.com/package/express-mongo-db">Express-mongo-db</a></p>
<p><a href="https://www.npmjs.com/package/body-parser-json">Body Parser</a></p>
<p><a href="https://zellwk.com/blog/crud-express-mongodb/">CRUD express mongodb</a></p>
<p><a href="http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#updateOne">Node mongodb native</a></p>
<p><a href="https://docs.mongodb.com/manual/crud/">CRUD mongodb</a></p>