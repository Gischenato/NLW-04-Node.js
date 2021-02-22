import express, { request, response } from 'express'

const app = express()

/**
 *  GET    -> Busca
 *  POST   -> Salvar
 *  PUT    -> Alterar
 *  DELETE -> Deletar
 *  PATCH  -> Alteração específica
 */ 


  // http://localhost:3333/users
  // 1 parametro -> Rota(recurso API)
  // 2 parametro -> request, response

app.get("/", (request, response) => {
    return response.json({messege: "Hello World - NLW04"})
})

app.post("/", (request, response) => {
    //Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"})
})


app.listen(3333, () => console.log("Server is running!"))