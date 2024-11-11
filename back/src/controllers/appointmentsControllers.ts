import { Request, Response } from "express";
import { cancelAppointmentService, getAllAppointmentsService, getAppointmentByIdService, scheduleService } from "../service/appointmentService";
import Appointment from "../entities/AppointmentEntity";
import IScheduleAppoimentDto from "../dtos/IScheduleAppoimentDto";


export const getAllAppointments = async(
    req: Request, 
    res: Response 
): Promise <void> => {
    try{
        const appointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments)
    } catch (error: any){
        res.status(404).json({message: error.message})
    }
};

export const getAppointmentById = async (req: Request<{turnId: string},{},{}>, res: Response ): Promise<void> => {
    const { turnId } = req.params;
    try{const appointment = await getAppointmentByIdService(Number(turnId))
        res.status(200).json(appointment);
    } catch (error: any){
        res.status(404).json({message: error.message})
    }
};

export const schedule = async (req: Request<{},{}, IScheduleAppoimentDto>, res: Response ): Promise<void> => {
    const {date, time, userId, description}=req.body;
    try {
        const newAppointment: Appointment = await scheduleService({
            date, time, userId, description
        })
        res.status(201).json(newAppointment)
    } catch (error: any) {
        res.status(400).json({message: error.message})
   }
};

export const cancel = async (req: Request<{turnId : string},{},{}>, res: Response):Promise<void> => {
    const { turnId } = req.params;
    try {
         await cancelAppointmentService(Number(turnId));
        res.status(200).json({message: `Turno con id ${turnId} fue cancelado exitosamente`});
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};