import "reflect-metadata"
import express from 'express'
import "./database"
import { router } from "./routes"

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, () => console.log("Server is running!"))

/**
 *  GET    -> Busca
 *  POST   -> Salvar
 *  PUT    -> Alterar
 *  DELETE -> Deletar
 *  PATCH  -> Alteração específica
 */ 
  // http://localhost:3333/
  // 1 parametro -> Rota(recurso API)
  // 2 parametro -> request, response