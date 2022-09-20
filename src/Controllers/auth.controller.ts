import { Users } from "../Models/users.model";
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
export const authLogin = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const user = await Users.findOne({where: {email}});
        if (!user) {
            return res.status(400).json({message: 'User not found'})
        }
        // const validPassword = await bcrypt.compare(password, user.password);
        // if (!validPassword) {
        //     return res.status(400).json({message: 'Invalid password'})
        // }
        // const token = jwt.sign({id: user.id}, {expiresIn: '1h'});
        // return res.json({token})
    } catch (err: any) {
        return res.status(500).json({message: err.message})
    }
}