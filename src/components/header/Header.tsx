import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src="/images/logo.png" className={styles.logo} alt="logo" />
        <div className={styles.navList}>
          <NavLink className={({ isActive }) => isActive ? styles.activeLink : styles.inactiveLink} to="/">Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.inactiveLink : styles.inactiveLink}>About</NavLink>
           <NavLink to="/projects" className={({ isActive }) => isActive ? styles.inactiveLink : styles.inactiveLink}>Projects</NavLink>
        </div>

        <div className={styles.headerSocials}>
          <img className={styles.linkedin} src="/images/linkedin.svg" alt="" />
          <button className={styles.button}>Get in touch</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
