import { AppDataSource } from "../config/data-source";
import Appointment from "../entities/AppointmentEntity";
import Credential from "../entities/CredentialsEntity";
import User from "../entities/UserEntity";

export const credentialRepository = AppDataSource.getRepository(Credential);
export const appointmentsRepository = AppDataSource.getRepository(Appointment)
export const userRepository = AppDataSource.getRepository(User);
