import { Router } from 'express'
import { SurveysController } from './controllers/SurveysController';
import { UserController } from "./controllers/UserController";

const router = Router()

//Criando os CONTROLLERS
const userController = new UserController()
const surveysController = new SurveysController() 

//Criando as ROTAS
router.post("/users", userController.create)

router.post("/surveys", surveysController.create)
router.get("/surveys", surveysController.show)


export { router }