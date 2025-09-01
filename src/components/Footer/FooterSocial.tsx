import { CiFacebook, CiInstagram } from "react-icons/ci";
import styles from "./Footer.module.css";
import { FaTiktok, FaWhatsapp } from "react-icons/fa6";
export const FooterSocial = () => {
  return (
    <div className={styles.funcionamento}>
        <h4 className={styles.titulo}>Siga nossas redes:</h4>
        <div className={styles.iconesRedesSociais}>
        <CiInstagram />
        <FaWhatsapp />
        <FaTiktok />
        <CiFacebook />
        </div>
    </div>
  )
}
