import { Users } from "../Models/users";
import { Response, Request, NextFunction } from "express";
import { generateJWT } from "../Helper/generate-jwt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user, password, email } = req.body;
  try {
    const usuario = await Users.findOne({ where: { user: user } });
    console.log('llege',usuario,user,password);
    if (usuario) {
      const token = await generateJWT(usuario.id);
      console.log('llege',usuario,user,password);
        
      if (usuario.user === user && usuario.password === password) {
        return res.json({
          usuario,
          token
        });
      } else {
        return res.status(400).json({
          ok: false,
          msg: "El user o la contraseña no son correctos"
        });
      }
    } else {
      return res.status(400).json({
        ok: false,
        msg: "El user o la contraseña no son correctos"
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    if (name && email && password) {
      const emailExist = await Users.findOne({ where: { email: email } });
      if (emailExist) {
        return res.status(400).json({
          ok: false,
          msg: "El email ya esta registrado"
        });
      }
      const usuario = new Users(req.body);
      await usuario.toJSON();
      await usuario.save();
      res.status(200).json({
        usuario
      });
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
