import { Request, Response, NextFunction } from "express";
import ICreateUserDto from "../dtos/iCreateUserDto";


const userValidate = (req: Request<{},{},ICreateUserDto>, res: Response, next: NextFunction) => {
    const {name, email, birthdate, nDni, username, password} = req.body
    try{
    if(!name) throw new Error ("Se requiere nombre");
    if(typeof name !== "string") throw new Error("Debe ser un string");
    if(name.length < 2) throw new Error("el nombre debe contener al menos 3 caracteres");
    if(!email) throw new Error ("el e-mail es obligatorio");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Ingresa un email valido' });
  }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthYear = new Date(birthdate).getFullYear();
    const age = currentYear - birthYear;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(birthdate)) {
      return res.status(400).json({ error: 'El formato de la fecha no es válido. Use YYYY-MM-DD' });
  }
    if (birthYear > currentYear) throw new Error("La fecha de nacimiento no puede exceder el año actual");
    if (age < 18) throw new Error("El usuario debe tener al menos 18 años");
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'La contraseña debe tener entre 8 y 12 caracteres, y contener al menos una letra y un número' });
  }
    if(!password)throw new Error ("Favor de crear un password");

    if(!nDni)throw new Error ("Ingresar número de identificación");
    if(!username)throw new Error("Debe ingresar nombre de usuario")
    if(typeof username != "string")throw new Error("El nombre de usuario solo puede letras")

  

    } catch(error){
    if(error instanceof Error)
        return res.status(400).json({error: error.message})
    }
    next();
}

export default userValidate