import styles from "./CardAppointment.module.css"

export default function CardAppointment (
    { id, date, time, description, status, handleAppointmentCancel}
) {

    const handleClicick = () => {
        if(window.confirm(
            "¿Desea cancelar la cita?"
        ))
      {
        handleAppointmentCancel(id)
      }
    }
 return (
    <div className={styles.cardContainer}>
       <span>{date}</span>
       <span>{time}</span>
       <span>{description}</span>
       {
        status === "active"
        ? (<span className={styles.active} onClick={handleClicick}>Cancelar</span>)
        : (<span className={styles.cancelled}>Cancelado</span>)
       }

    </div>
 )
}
