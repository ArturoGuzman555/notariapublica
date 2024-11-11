import ICreatCredentialDto from "../dtos/ICreatCredentialDto";
import Credential from "../entities/CredentialsEntity";
import { credentialRepository } from "../repositories/indexrepositories";

export const createCredential = async(createCredentialDto: ICreatCredentialDto):Promise<Credential> => {
    const {username, password} = createCredentialDto;
 const fuondCredential: Credential | null = await credentialRepository.findOneBy({ username})
if(fuondCredential) throw Error(`Ya existe el registro con usuario ${username}` )
    
    
const newCredential: Credential = await credentialRepository.create({
        username,
        password
    })
await credentialRepository.save(newCredential);

return newCredential
};
export const validateCredentialDto = async(validateCredentialDto: ICreatCredentialDto): Promise<Credential> => {
    const {username, password} = validateCredentialDto;
const fuondCredential: Credential | null = await credentialRepository.findOneBy({ username})

if(!fuondCredential) 
    throw Error(`Información incorrecta` )
if(password!== fuondCredential.password)
    throw(`Información incorrecta`)
    return fuondCredential;
}