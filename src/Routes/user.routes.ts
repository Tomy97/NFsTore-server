import {Router} from 'express'
import {getUsersController, postUsersController} from "../Controllers/user.controller";

const router = Router()

router.get('/users', getUsersController)
router.post('/users', postUsersController)

export default router