<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 
</body>
 <!-- instalando o socket io pela cnd -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.5/socket.io.js"></script>

 <!--acionando a função que esta no meu backend e criando a conexão-->
 <script>
    var socket = io('http://localhost:3000');
    /*a função emit recebe 2 parametros

      1- eo nome do evento que aconetce quando o susario se conecta 
      2- eo objeto que sera enviado assim que a cne~xao acontecer
      então cada vez que o evento boas vindas acontecer o objeto com o nome do usuário
      será enviado para o servidor  
    */ 

    socket.emit("boasvindas",{nome:"Ivan Rodrigues"});
 </script>
</html>