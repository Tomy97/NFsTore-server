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
