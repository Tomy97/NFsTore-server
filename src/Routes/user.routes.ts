import {Router} from 'express'
import {getUsersController} from "../Controllers/user.controller";

const router = Router()

router.get('/users', getUsersController)

export default router