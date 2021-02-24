import "reflect-metadata"
import express from 'express'
import createConnection from './database'
import { router } from "./routes"

createConnection()

const app = express()

app.use(express.json())
app.use(router)

export { app }


/** METODOS
 *  GET    -> Busca
 *  POST   -> Salvar
 *  PUT    -> Alterar
 *  DELETE -> Deletar
 *  PATCH  -> Alteração específica

  http://localhost:3333/
  1 parametro -> Rota(recurso API)
  2 parametro -> request, response
*/ 