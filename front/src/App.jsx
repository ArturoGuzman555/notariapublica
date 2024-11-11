import Navbar from "./component/navbar/navbar";
import "./index.css";
import Home from "./views/Home/home";
import Login from "./views/login v/Login";
import Appointments from "./views/Mis turnos/Appointments";
import { Route, Routes } from "react-router-dom";
import ScheduleAppointment from "./views/servicios y citas/ScheduleAppointment";
import Ingresa from "./views/register/Register"



function App() {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path="/home" element={<Home/>} />
        <Route path="/mis_turnos" element={<Appointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Ingresa/>} />
        <Route path="/servicios_citas" element={<ScheduleAppointment />} />
        
      </Routes>
    </>
  );
}

export default App;
