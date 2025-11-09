import Header from "../header/Header";
import styles from "./hero.module.css";
import Blog from "../Blog/Blog";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <Header />
        <div className={styles.overlay}>
          <div className={styles.bio}>
            <h1 className={styles.title}>
              Chioma Ubaezuonu, a Fullstack Engineer{" "}
              <span style={{ opacity: "0.7" }}> based in Uyo, Nigeria.</span>
            </h1>
            <p>
              While blockchain is often hailed for its robust security features
              and potential to revolutionize various industries, it's crucial to
              recognize that it's not impervious to threats.
            </p>
            <button className={styles.btn}>About me</button>
          </div>
          <div>
            <img
              src="/images/joshua-amali.png"
              className={styles.josh}
              alt="Joshua"
            />
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default Hero;
