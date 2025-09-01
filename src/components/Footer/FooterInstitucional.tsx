import styles from "./Footer.module.css";
export const FooterInstitucional = () => {
  return (
    <div className={styles.funcionamento}>
        <h4 className={styles.titulo}>Institucional</h4>
        <span>Sobre nós</span>
        <span>Para empresas</span>
        <span>Clube fidelidade</span>
    </div>
  )
}
