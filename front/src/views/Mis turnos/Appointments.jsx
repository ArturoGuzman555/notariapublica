import { useEffect } from "react";
import CardAppointment from "../../component/Appointment Cards/CardAppointment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";

const GETUSERBYID_URL = "http://localhost:3002/users/";
const CANCEL_URL = "http://localhost:3002/appointments/cancel/";

export default function MyAppointments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.actualUser.userData.login);
  const id = useSelector((state) => state.actualUser.userData.user.id);
  console.log(id)
  const appointments = useSelector((state) => state.actualUser.userAppointments);
  console.log(appointments)
  useEffect(() => {
    if (!login) {
      navigate("/home");
    }
  }, [login, navigate]);

  useEffect(() => {
    axios
      .get(GETUSERBYID_URL + id)
      .then((response => response.data))
      .then((actualUser) => {
        console.log(actualUser.appointments)
        dispatch(setUserAppointments(actualUser.appointments));
        console.log(appointments)
      })
      .catch((error) => console.log(error.message));
  }, [id, dispatch]);
  console.log(appointments)
  const handleAppointmentCancel = (appointmentId) => {
    axios
      .put(CANCEL_URL + appointmentId)
      .then((response) => response.data)
      .then(() => {
        axios
          .get(GETUSERBYID_URL + id)
          .then((response) => response.data)
          .then((actualUser) => {
            dispatch(setUserAppointments(actualUser.appointments));
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>Mis turnos</h1>
      {appointments.map((appointment) => (
        <CardAppointment
          key={appointment.id}
          id={appointment.id}
          date={appointment.date}
          time={appointment.time}
          status={appointment.status}
          description={appointment.description}
          handleAppointmentCancel={handleAppointmentCancel}
        />
      ))}
    </div>
  );
}