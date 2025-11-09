import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import { blog } from "./BlogData.ts";

interface BlogCard {
  image: string;
  title: string;
  text: string;
  link: string;
}

const Blog = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        My <span className={styles.writings}>Writings</span>
      </h2>
      <span className={styles.subtitle}>
        My little corner of the web where I share my thoughts on topics around
        cybersecurity and blockchain.
      </span>
      <div className={styles.cardContainer}>
        {blog.map((blog) => {
          return (
            <div key={blog.title} className={styles.card}>
              <img src={blog.image} alt="" />
              <div className={styles.blogDetails}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.text}>{blog.text}</p>
                <div className={styles.linkWrapper}>
                  <Link to="/" className={styles.linkText}>{blog.link}</Link>
                  <img src="/images/arrow-right.svg" alt="arrow-right" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
