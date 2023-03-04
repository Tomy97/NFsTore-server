  import jwt from "jsonwebtoken";
  import dotenv from "dotenv";

  dotenv.config();
  export const generateJWT = (uid: number) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.JWT_SECRET || "S",
      {
        expiresIn: "4h"
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      });
    });
  };
