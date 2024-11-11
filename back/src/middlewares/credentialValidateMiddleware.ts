import { Request, Response, NextFunction } from "express";
import ICreatCredentialDto from "../dtos/ICreatCredentialDto";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

const credentialValidate = (
    req: Request<{}, {}, ICreatCredentialDto>,
    res: Response,
    next: NextFunction
) => {
    const { username, password } = req.body;

    try {
        if (!username) throw new Error("El campo 'username' es requerido");

        if (!password) throw new Error("El campo 'password' es requerido");
        if (!passwordRegex.test(password)) throw new Error("La contraseña debe tener entre 8 y 12 caracteres, y contener al menos una letra y un número");

    } catch (error) {
        if (error instanceof Error)
            return res.status(400).json({ error: error.message });
    }
    
    next();
}

export default credentialValidate;