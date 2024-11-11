import { NextFunction, Request, Response } from "express";
import IScheduleAppoimentDto from "../dtos/IScheduleAppoimentDto";

// Expresión regular para validar el formato de la hora (HH:MM)
const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;

const appointmentValidate = (
    req: Request<{}, {}, IScheduleAppoimentDto>,
    res: Response,
    next: NextFunction
) => {
    const { date, time, description } = req.body;
    try {
        // Verificar que los campos obligatorios estén presentes
        if (!date) throw new Error("El campo 'date' es obligatorio");
        if (!time) throw new Error("El campo 'time' es obligatorio");
        if (!description) throw new Error("El campo 'description' es obligatorio");

        // Verificar que la fecha tenga el formato correcto y sea una fecha válida
        const appointmentDate = new Date(date);
        if (isNaN(appointmentDate.getTime())) {
            throw new Error("La fecha no es válida");
        }

        // Verificar que la fecha no sea anterior al día actual y no sea el mismo día
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Ignorar la hora para la comparación
        if (appointmentDate <= today) {
            throw new Error("La fecha debe ser posterior al día actual");
        }

        // Verificar que la fecha esté dentro de los próximos 30 días
        const maxDate = new Date(today);
        maxDate.setDate(today.getDate() + 30);
        if (appointmentDate > maxDate) {
            throw new Error("La fecha debe estar dentro de los próximos 30 días");
        }

        // Verificar que la fecha sea un día de lunes a viernes
        const dayOfWeek = appointmentDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            throw new Error("La fecha debe ser un día entre lunes y viernes");
        }

        // Verificar que la hora tenga el formato correcto
        if (!timeRegex.test(time)) {
            throw new Error("La hora debe tener el formato HH:MM");
        }

        // Verificar que la hora esté entre las 07:00 y las 18:00
        const [hours, minutes] = time.split(":").map(Number);
        if (hours < 7 || hours >= 18 || (hours === 17 && minutes > 0)) {
            throw new Error("La hora debe estar entre las 07:00 y las 18:00");
        }

        // Verificar que la hora esté en un intervalo de 30 minutos
        if (minutes % 30 !== 0) {
            throw new Error("La hora debe estar en un intervalo de 30 minutos");
        }
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
    }
    next();
};

export default appointmentValidate;