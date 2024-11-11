import React, { useState } from "react";
import axios from "axios";
import styles from "./registerForm.module.css";

const POSTUSER_URL = "http://localhost:3002/users/register";

export default function RegisterForm() {
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: ""
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

    if (!user.name) {
      formErrors.name = "El nombre es requerido";
      valid = false;
    }
    if (!user.email) {
      formErrors.email = "El email es requerido";
      valid = false;
    }
    if (!user.birthdate) {
      formErrors.birthdate = "La fecha de nacimiento es requerida";
      valid = false;
    }
    if (!user.nDni) {
      formErrors.nDni = "El DNI es requerido";
      valid = false;
    }
    if (!user.username) {
      formErrors.username = "El nombre de usuario es requerido";
      valid = false;
    }
    if (!user.password) {
      formErrors.password = "La contraseña es requerida";
      valid = false;
    }
    if (user.password !== user.confirmPassword) {
      formErrors.confirmPassword = "Las contraseñas no coinciden";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const userData = {
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: Number(user.nDni),
      username: user.username,
      password: user.password
    };

    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        setMessage(data.message);
        setUser(initialState);
      })
      .catch((error) => {
        setMessage(`Error: ${error.response.data.message || error.message}`);
      });
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={user.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="date"
          name="birthdate"
          placeholder="Fecha de nacimiento"
          value={user.birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <p>{errors.birthdate}</p>}

        <input
          type="text"
          name="nDni"
          placeholder="DNI"
          value={user.nDni}
          onChange={handleChange}
        />
        {errors.nDni && <p>{errors.nDni}</p>}

        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={user.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="submit">Registrar</button>
        <button type="button" onClick={() => setUser(initialState)}>Reset</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}