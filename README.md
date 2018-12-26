#VUTTR - API

É uma API de um repositório para armazenar ferramentas.  
Requisitos:  

* NodeJS v10.14.2+

-------------

###Como executar

Faça o clone/download deste repositório, execute npm i/npm install e npm start.  
A API servirá em http://localhost:3000, e em seguidá ative o banco mongodb com o comando mongod.

###Rotas

-------------

####Todas as requisições POST feitas a API devem conter header Content-type: aplication/json.  
Está API contém as seguintes rotas:

* GET /tools : lista todas as ferramentas cadastradas.  
* POST /tools : cria uma nova ferramenta.  
* DELETE /tools/:id : selecionar uma ferramenta pelo id e a apaga.
* GET /api/tools : lista todas as ferramentas pela tag.
