import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.footer_text}>© 2025 Chioma. All rights reserved.</span>
      <div className={styles.footer_socials}>
        <img src="/images/twitter-dark.png" alt="twitter" />
        <img src="/images/linkedin-dark.png" alt="linkedin-dark" />
      </div>
    </div>
  );
};

export default Footer;
