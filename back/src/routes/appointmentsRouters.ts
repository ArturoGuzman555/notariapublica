import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentById, schedule } from "../controllers/appointmentsControllers";
import appointmentValidate from "../middlewares/appointmentValidateMiddleware";


const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:turnId" , getAppointmentById);
appointmentRouter.post("/schedule",appointmentValidate, schedule);
appointmentRouter.put("/cancel/:turnId", cancel);

export default appointmentRouter;



