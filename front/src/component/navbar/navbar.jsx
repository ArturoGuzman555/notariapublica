import styles from "./navbar.module.css";
import logo from "../../assets/logo.jpg"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Navbar(){

    const login = useSelector(state => state.actualUser.userData.login);
    return(
        <div className={styles.navContainer}>
            <div>
            <img className={styles.logo}src={logo} alt=""/>
            </div>
            <div className={styles.title}>
                <span>Notaria 021 Gutermann y Asociados</span>
                </div>
            <div className={styles.links}>
                <Link to="/home">
                <span>Inicio</span>
                </Link>
                <Link to="/servicios_citas">
                <span>Citas y servicios</span>
                </Link>
                {
                    login &&(
                
                <Link to="/mis_turnos">
                <span>Mis turnos</span>
                </Link>)
                }
                {
                    !login &&(
                <Link to="login">
                <span>Ingresa</span>
                </Link>)
                }
                {
                    !login&&(
                <Link to="register">
                <span>Registrate</span>
                </Link>)
}
            </div>
        </div>
    )
}