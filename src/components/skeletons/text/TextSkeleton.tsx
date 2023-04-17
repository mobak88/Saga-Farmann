import styles from "./TextSkeleton.module.css";
const TextSkeleton = () => {
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
export default TextSkeleton;
