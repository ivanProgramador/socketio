var express = require("express");
var app = express();
/*
com socket.io não e possivel usar o servidor do express 
precisa ser o servidor nativo de node por isso a blioteca http
esta criando o serviddor ao inves da express
*/

var http = require("http").createServer(app); 
var io = require("socket.io")(http);


app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
});

/*
Quando cliente faz a primeira requisição esse evento cria um tunel 
de comunicação entre o servidor eo cliente oque faz a comunicação 
em tempo real a acontecer.
O codigo abaixo mostra a função responsavel por criar essa conexão no backend,
a variavel socket é um objeto que representa o cliente quando um cliente se conecta 
ele recebe um id unico para que ele seja identificado na conexão e assim possa receber 
dados especificos para ele.

No caso esse objeto vai vir do front end index.ejs, na tag script tem um referencia ao meu servidor 
e a esse socket   
*/ 

io.on("connection", (socket)=>{
    console.log(socket);
    console.log(socket.id);
});




http.listen(3000,()=>{
    console.log("App online");
})