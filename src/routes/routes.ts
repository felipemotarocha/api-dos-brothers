import { Router } from "express"
import controllers from "../controllers"

export const routes = Router();

routes.get('/users', controllers.getAllUsers)
routes.post('/user', controllers.createUser)