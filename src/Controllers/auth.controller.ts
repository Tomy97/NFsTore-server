import { Users } from '../Models/users.model'
import { Response, Request } from 'express'
import { generateJWT } from '../Helper/generate-jwt'
import { validationResult } from "express-validator";

export const authLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const usuario = await Users.findOne()
    if (!email) {
      return res.status(400).json({
        ok: false,
        msg: 'El email es obligatorio',
      })
    }
    if (!password) {
        return res.status(400).json({
            ok: false,
            msg: 'La contraseña es obligatoria',
        })
    }

    // const token = await generateJWT(usuario.id)
    res.json({
        usuario,
        // token
    })
  } catch (err) {
    return res.status(500).json({ message: err })
  }
}

export const registerUser = async ( req: Request, res: Response ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.array()
        });
    }


}