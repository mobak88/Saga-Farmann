import styles from "./DonateSkeleton.module.css";
const DonateSkeleton = () => {
  return (
    <div className={styles["skeleton-wrapper"]}>
      <div className={styles["s-container"]}>
        <div className={styles["s-center-container"]}>
          <div className={styles["s-header"]}></div>
          <div className={styles["s-second-header"]}></div>
          <div className={styles["s-button"]}></div>
          <div className={styles["s-content-container"]}>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["s-container"]}>
        <div className={styles["s-center-container"]}></div>
      </div>
    </div>
  );
};
export default DonateSkeleton;
