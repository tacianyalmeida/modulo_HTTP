const { request } = require('node:http')
const http = require('node:http')
const PORT = 3333

// // meu servidor sen´mpre vai trabalhar com requisiçoes e respostas por isso a 

// // funcao callbeck 
//Exemplo01
// const server = http.createServer((request, response)=>{
//     response.write('Olá, Mundo! Módulo HTTP')
//     response.end()
// })
// //liberar acesso ao meu servidor 
// //Listen recebe dois parametros 

// //Exemplo02
// const server = http.createServer((request, response)=>{
//     // writeHead escrevo o cabeçalho da minha aplicação e ele recebe dois parametros 
//     response.writeHead(201, {"Content-Type": "text/plan"})
//     // 201 é o codigo para criar alguma coisa 
//     response.end('Usuario Criado ')
// })

// //Exemplo03 
// const server = http.createServer((request, respose)=>{
//    if(request.url === '/'){//localhost:3333/
//     }else if(request.url === '/sobre'){//localhost:3333/sobre

//     }else {// caso o recursao não encontrado 
//         respose.writeHead(404, {'Content-Type': 'text/plan'})
//         respose.end('Pagina Não Encontrada')
//     }
    
// })

//exemplo04
// const server = http.createServer((request, response)=>{
//     if(request.url === '/'){
//            response.writeHead(200, {'Content-Type': 'text/html'});
//            response.write("<meta charset=utf8>")
//            response.write("<h1>Página Inicial</h1>"); 
//            response.end();
//     }else if (request.url === '/contatos'){
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write("<meta charset=utf8>")
//         response.write("<h1>Página Contato</h1>"); 
//         response.end();

//     }else{
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write("<meta charset=utf8>")
//         response.write("<h1>Não encontrado </h1>"); 
//         response.end();
    
//     }
// })
// exemplo05
const obj = {
    nome: 'Taci',
    idade: 17,
    profissao:'maluca '
}

const server = http.createServer((request, response)=>{
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify (obj)({message: 'pagina home'}));
    }else if(request.url === '/contatos'){
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({message: 'pagina contato'}));
    }else{
        response.writeHead(404, {'Content-Type': 'application/json'})
        response.end(JSON.stringify({message: 'Não encontrado '}));
    }
})





server.listen(PORT, ()=>{
    console.log(`servidor on port ${PORT}`)
})