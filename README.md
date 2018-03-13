# server-api-node

<p>Servidor node para prover API de acesso ao banco de dados Mongodb.</p>

---------------------------------------------------------------
# Requisitos:

<p>NodeJS - Interpretador de javascript.</p>
<p>NPM - Node Package Manager, gerenciador de pacotes para NodeJS.</p>

---------------------------------------------------------------
# Implementação do ambiente:

## Linux Fedora 27

<code>sudo dnf update -y</code>
/* Dependência */
<code>sudo dnf install libuv -y</code>
/* Programas */
<code>sudo dnf install nodejs npm -y</code> 

## Windows e outros unix like
<p>Acesse: <a href="https://nodejs.org/en/download/">nodejs.org</a></p>

----------------------------------------------------------------

# Baixando e configurando

<p>Abra no windows o CMD ou o PowerShell ou em unix like o terminal e digite linha por linha:</p>
/* Clona o repositório remoto */
<code>git clone https://github.com/wesleyBU/server-api-node.git</code>
/* Altera para dentro da pasta do projeto */
<code>cd server-api-node</code>
/* Solicita a instalação da dependências dentro de package.json */
<code>npm install</code>

----------------------------------------------------------------
# Executando o server

<p>Abra no windows o CMD ou o PowerShell ou em unix like o terminal.</p>
<p>Navegue para dentro da pasta do projeto "server-api-node" e digite:</p>
<code>node server.js</code>
<p>Para parar aperte:</p>
<kbr>ctrl + C</kbr>


## Opcional

<p>Caso queira que o servidor seja reiniciado automáticamente a cada alteração de seu código instale o utilitário Nodemon. Essa ferramenta monitora o arquivo em questão e o reexecuta a qualquer modificação de seu código.</p>

<code>npm install -g nodemon</code>

<p>A flag "-g" significa "global" assim permitindo que o nodemon seja invocade em qualquer projeto descartando a necessidade de instalá-lo novamente.</p>

<p>Agora em ves de rodar o servidor com "node server.js" use:</p>
<code>nodemon server.js</code>