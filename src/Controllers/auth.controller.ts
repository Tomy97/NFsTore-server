import { Users } from "../Models/users";
import { Response, Request } from "express";
import { generateJWT } from "../Helper/generate-jwt";
import { validationResult } from "express-validator";

export const loginUser = async (req: Request, res: Response) => {
  const { user, password } = req.body;
  try {
    const usuario = await Users.findOne();
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "El user es obligatorio"
      });
    }
    if (!password) {
      return res.status(400).json({
        ok: false,
        msg: "La contraseña es obligatoria"
      });
    }
    if (usuario) {
      if (usuario.user === user && usuario.password === password) {
        return res.json({
          usuario
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
