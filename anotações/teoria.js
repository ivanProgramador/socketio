/*
Comunicação em tempo real com aplicações web 

A mecanica do protocolo http de repasse de dados é basicamente.

1 - cliente requisita 
2 - o servidor responde
3 - fim da comunicação  

esse tipo de comunicação e stateless, isso funcinou por um certo tempo 
a dependendo do contexto atende a amuitas aplicações hoje ainda, porém
existem casos onde não é possivel operar sem dados em tempo real, então foi craida uma nova mecanca chamada

POOLING 

Nessa mecanica o computador cliente executa varias requisições ao servidor , varias vezes por segundo 
para pegar mais dados sejam eles novos ou não, porém essa estrategia exisge muito do servidor, e do computador 
cliente.

SOCKET 

Nessa mecanica assim que o cliente faz uma requisição ele estabelece um canal de comunicação com o servidor,
quando enquanto esse canal estiver online as informações atualizam em tempo rela sem que outra requisição 
seja necessária. 







*/