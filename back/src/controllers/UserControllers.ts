import { Request, Response } from "express";
import { createUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from "../service/userService";
import ICreateUserDto from "../dtos/iCreateUserDto";
import { validateCredentialDto } from "../service/credentialservice"; 
import User from "../entities/UserEntity";
import ICreatCredentialDto from "../dtos/ICreatCredentialDto";
import Credential from "../entities/CredentialsEntity";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getUserById= async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const register = async (req: Request<{}, {}, ICreateUserDto>, res: Response): Promise<void> => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    try {
        const newUser: User = await createUserService({ name, email, birthdate, nDni, username, password });
        res.status(200).json({message: "Registro exitoso"});
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const login = async (req: Request<{}, {}, ICreatCredentialDto>, res: Response): Promise<void> => {
    const { username, password } = req.body;
    try {
        const credential: Credential = await validateCredentialDto({ username, password });
        const user = await findUserByCredentialId(credential.id);
        res.status(200).json({ login: true, user, credential });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

