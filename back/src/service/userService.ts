import ICreateUserDto from "../dtos/iCreateUserDto";
import User from "../entities/UserEntity";
import {  userRepository } from "../repositories/indexrepositories";
import { createCredential } from "./credentialservice";
import Credential from "../entities/CredentialsEntity";

export const getAllUsersService = async(): Promise <User[]> => {
    const allUsers: User[] = await userRepository.find();
    return allUsers
}

export const getUserByIdService = async(id: number): Promise <User> => {
    const foundUser: User|null = await userRepository.findOne({
        where: {id}, 
        relations: ["appointments"]
    });
    if(!foundUser) throw Error('Usuario no encontrado')
    return foundUser
}

export const createUserService = async (createUserDto: 
    ICreateUserDto
) => {
    const {name, email, birthdate, nDni, username, password} = createUserDto;

    const foundUser =await userRepository.findOneBy({ email})
    if (foundUser) throw new Error("Este e-mail ya cuenta con un registro, favor de ingresar credenciales")

        const newCredential: Credential= await createCredential({
        username,
        password
        });


    const newUser: User = userRepository.create({
name, email, birthdate, nDni
    });

    newUser.credential = newCredential
    await userRepository.save(newUser)

    return newUser
};


export const findUserByCredentialId = async (credentialId: number): Promise<User> => {
    const foundUser: User | null = await userRepository.findOne({
        where: { credential: { id: credentialId } }
    });
    if (!foundUser) throw new Error("Usuario no encontrado");
    return foundUser;
};