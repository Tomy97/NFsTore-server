import {Users} from "../Models/users.model";
import {Response} from "express";

export const getUsersController = async (req: any, res: Response) => {
    try {
        const users =
            await Users.findAll(
                {
                    attributes: req.attributes,
                }
            );
        res.json(users)
    } catch (err: any) {
        res.status(500).json({message: err.message})
    }
}

export const postUsersController = async (req: any, res: Response) => {
    try {
        const user = await Users.create(req.body)
        if ( user.getDataValue('email') === req.body.email) {
            console.log('User created successfully')
        }
        else if (user.getDataValue('email') !== req.body.email) {
            console.log('User not created')
        }
        else if (user.getDataValue('email') === null) {
            console.log('User not created')
        }

        res.json(user)
    } catch (err: any) {
        res.status(500).json({message: err.message})
    }
}