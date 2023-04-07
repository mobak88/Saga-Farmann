import styles from "./BlogSkeleton.module.css";
const BlogSkeleton = () => {
  return (
    <div className={styles["skeleton"]}>
      <div className={styles["s-banner"]}></div>
      <div className={styles["s-header"]}></div>
      <div className={styles["s-content"]}></div>
      <div className={styles["s-content-2"]}></div>
      <div className={styles["s-content"]}></div>
      <div className={styles["s-header"]}></div>
      <div className={styles["s-content"]}></div>
      <div className={styles["s-content-2"]}></div>
      <div className={styles["s-content"]}></div>
    </div>
  );
};
export default BlogSkeleton;
