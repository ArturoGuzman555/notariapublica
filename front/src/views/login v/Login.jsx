import React, { useState } from "react";
import axios from "axios";
import styles from "./loginComponent.module.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from "../../redux/userSlice";

const POSTLOGIN_URL = "http://localhost:3002/users/login";

export default function LoginComponent() {
  const initialState = {
    username: "",
    password: ""
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!user.username) {
      formErrors.username = "El nombre de usuario es requerido";
      valid = false;
    }
    if (!user.password) {
      formErrors.password = "La contraseña es requerida";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    axios
      .post(POSTLOGIN_URL, user)
      .then(({ data }) => {
        dispatch(setUserData(data));
        alert('Ingreso exitoso');
        setUser(initialState);
        navigate("/servicios_citas");
      })
      .catch(() => {
        alert("Credenciales invalidas");
      });
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={user.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}