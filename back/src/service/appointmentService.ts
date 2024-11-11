import IScheduleAppoimentDto from "../dtos/IScheduleAppoimentDto";
import Appointment, { AppointmentStatus } from "../entities/AppointmentEntity";
import User from "../entities/UserEntity";
import { appointmentsRepository, userRepository } from "../repositories/indexrepositories";


export const getAllAppointmentsService = async(): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await appointmentsRepository.find();
    return allAppointments
}

export const getAppointmentByIdService = async (turnId: number): Promise<Appointment> => {
    const appointment: Appointment | null = await appointmentsRepository.findOneBy({
        id: turnId
    });

    if (!appointment) throw Error('Cita no encontrada');
    
    return appointment;
};

export const scheduleService = async (scheduleAppointmentDto: IScheduleAppoimentDto): Promise<Appointment> => {
    const { date, time, userId, description } = scheduleAppointmentDto;

    const user: User | null = await userRepository.findOneBy({ id: userId });
    if (!user) {
        throw new Error(`No existe el usuario con id ${userId}`);
    }

    const newAppointment: Appointment = appointmentsRepository.create({
        date,
        time,
        description,
        user
    });

    await appointmentsRepository.save(newAppointment);

    return newAppointment;
};

export const cancelAppointmentService = async (turnId: number): Promise<Appointment> => {
    const appointment: Appointment | null = await appointmentsRepository.findOneBy({
        id: turnId
    }
    );
    if (!appointment) throw new Error('Cita no encontrada');

    appointment.status = AppointmentStatus.CANCELLED;
    await appointmentsRepository.save(appointment);
    return appointment;
};