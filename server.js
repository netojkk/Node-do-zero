// Criando um servidor puramente com o NODE 

/* import {createServer} from 'node:http'

 const servidor = createServer((request, response) => {
    
     response.write("Hello World!")
     return response.end()

 })

 servidor.listen(3333) */

// ===============================================================================

import { DatabaseMemory } from "./database-memory.js";

// Criando um servidor utilizando o micro-framework fastify

import { fastify } from "fastify";

const server = fastify()

const database = new DatabaseMemory

// Criando a primeira rota, rota "nativa" apenas com (/)

server.post('/videos',(request, reply) => {
    database.create({
        title: 'Tutorial de como passar no Estágio',
        description: 'Sendo assim como eu, o estagiário mais dedicado!',
        duration: 260,
    })
    console.log(database.list(0))
    
    //metodo .status serve para sinalizar se a requisição ocorreu bem ou não, e também detalha o porque de ter dado ou nao certo e o tipo do possivel erro. Nesse caso, utilizo o 201 que simboliza que algo foi criado!
    return reply.status(201).send()
})

/* Roteiro de revisao

Metodos mais usadados: GET,POST,PUT,DELETE, PATCH

*/
server.post('/add_video', () => {
    return 'Hello World!'
})
server.get('/node', () => {
    return 'gostei do node'
})

server.listen({
    port:3333
})