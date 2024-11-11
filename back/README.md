# Notaría Pública y Consorcio Jurídico

## User Stories

1. **Como usuario invitado quiero poder registrarme.**
   - Para poder acceder a los servicios y agendar citas.

2. **Como usuario invitado quiero poder ver qué servicios me pueden ofrecer.**
   - Para conocer las opciones disponibles antes de registrarme.

3. **Como usuario registrado quiero poder entrar con mis credenciales.**
   - Para acceder a mi cuenta y ver mis citas programadas.

4. **Como usuario registrado quiero poder agendar una cita.**
   - Para reservar un espacio de tiempo para recibir los servicios notariales.

5. **Como usuario registrado quiero poder cancelar una cita.**
   - Para liberar el espacio de tiempo si ya no necesito el servicio.

6. **Como usuario registrado quiero poder ver específicamente los requisitos para hacer el trámite que estoy solicitando.**
   - Para asegurarme de tener toda la documentación necesaria antes de mi cita.

7. **Como usuario registrado quiero poder recibir un e-mail de confirmación de mi cita.**
   - Para tener un recordatorio y confirmación de que mi cita ha sido programada.

8. **Como usuario registrado quiero poder recibir un e-mail de cancelación de mi cita.**
   - Para tener un recordatorio y confirmación de que mi cita ha sido cancelada.

## Esquema de la Base de Datos

### Tablas

1. **Usuarios (Users)**
   - `id` (PK) - Identificador único del usuario.
   - `username` - Nombre de usuario del usuario.
   - `password` - Contraseña del usuario (hashed).
   - `email` - Correo electrónico del usuario.
   - `created_at` - Fecha de creación del usuario.
   - `updated_at` - Fecha de última actualización del usuario.

2. **Citas (Appointments)**
   - `id` (PK) - Identificador único de la cita.
   - `date` - Fecha de la cita.
   - `time` - Hora de la cita.
   - `description` - Descripción del servicio solicitado.
   - `status` - Estado de la cita (agendada, cancelada, etc.).
   - `user_id` (FK) - Identificador del usuario que agendó la cita.
   - `created_at` - Fecha de creación de la cita.
   - `updated_at` - Fecha de última actualización de la cita.

### Relaciones

- **Un usuario puede tener múltiples citas.**
  - Relación uno a muchos (1:N) entre `Usuarios` y `Citas`.

### Diagrama

```plaintext
Usuarios
-----------------------
| id (PK)             |
| username            |
| password            |
| email               |
| created_at          |
| updated_at          |
-----------------------

Citas
-----------------------
| id (PK)             |
| date                |
| time                |
| description         |
| status              |
| user_id (FK)        |
| created_at          |
| updated_at          |
-----------------------

Relaciones
-----------------------
Usuarios 1 --- N Citas
-----------------------