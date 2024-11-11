import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./formAppointments.module.css";
import cysStyles from "./cys.module.css";
import { useSelector } from "react-redux";

const POST_APPOINTMENT_URL = "http://localhost:3002/appointments/schedule";

export default function ScheduleAppointmentForm() {
  const initialState = {
    date: "",
    time: "",
    description: "",
  };

  const [appointment, setAppointment] = useState(initialState);
  const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const login = useSelector(state => state.actualUser.userData.login);
  const id = useSelector(state => state.actualUser.userData.id);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAppointment({ ...appointment, date: formatDate(date) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const appointmentWithUserId = {
      ...appointment,
      userId:id
    };

    axios
      .post(POST_APPOINTMENT_URL, appointmentWithUserId)
      .then(({ data }) => {
        setMessage("Su cita se ha generado con éxito");
        setAppointment(initialState);
        setSelectedDate(null);
      })
      .catch((error) => {
        setMessage(`Error: ${error.response.data.message || error.message}`);
      });
  };

  const generateTimeOptions = () => {
    const times = [];
    const start = 7 * 60;
    const end = 18 * 60;
    const interval = 30;

    for (let time = start; time <= end; time += interval) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
      times.push(timeString);
    }

    return times;
  };

  const isWeekday = (date) => {
    console.log(date)
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <div className={cysStyles.cys}>
        <p className={cysStyles.cysText}>
          En nuestra notaría, ofrecemos una amplia gama de servicios notariales para satisfacer sus necesidades. A continuación, puede consultar los servicios que ponemos a su disposición:
          <ul>
            <li>Constitución de sociedades</li>
            <li>Disolución de sociedades</li>
            <li>Fusión de sociedades</li>
            <li>Escisión de sociedades</li>
            <li>Modificaciones de estatutos sociales</li>
            <li>Otorgamiento de poderes</li>
            <li>Revocación de poderes</li>
            <li>Compra-venta de inmuebles</li>
            <li>Donación de bienes inmuebles</li>
            <li>Adjudicación de bienes</li>
            <li>Constitución de hipotecas</li>
            <li>Cancelación de hipotecas</li>
            <li>Trámites sucesorios (testamentarios e intestamentarios)</li>
            <li>Formalización de contratos</li>
            <li>Otorgamiento de testamentos</li>
            <li>Trámites de fe de hechos</li>
            <li>Protocolización de actas</li>
            <li>Constitución de asociaciones civiles</li>
            <li>Formalización de actas de asamblea</li>
            <li>Actas de matrimonio</li>
            <li>Actas de divorcio</li>
            <li>Ratificación de firmas</li>
            <li>Rectificación de actas del estado civil</li>
            <li>Capitulaciones matrimoniales</li>
          </ul>
          Para agendar una cita, es necesario estar previamente logeado o darse de alta en nuestro sistema. En la sección de Descripción, seleccione uno de los servicios mencionados anteriormente o elija una opción adicional que corresponda a su necesidad.
          Le pedimos amablemente que llegue con 15 minutos de anticipación a la recepción de nuestra notaría con su número de cita para asegurar una atención eficiente y puntual. Nuestros horarios de atención son de 8:00 am a 6:00pm, de lunes a viernes.
          Estamos aquí para servirle y esperamos poder asistirle en sus trámites notariales.
          Atentamente,
          Notaría Pública 021 Gutermann y Asociados
        </p>
      </div>

      {login && (
        <div className={styles.appointmentsContainer}>
          <h2>Genera tu cita</h2>
          <form onSubmit={handleSubmit}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              filterDate={isWeekday}
              minDate={new Date()}
              maxDate={new Date(new Date().setDate(new Date().getDate() + 45))}
              dateFormat="yyyy-MM-dd"
              placeholderText="Seleccione una fecha"
              className={styles.datePicker}
            />
            <select
              name="time"
              value={appointment.time}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una hora</option>
              {generateTimeOptions().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="description"
              value={appointment.description}
              onChange={handleChange}
              required
            />
            <button type="submit">Generar Cita</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
}