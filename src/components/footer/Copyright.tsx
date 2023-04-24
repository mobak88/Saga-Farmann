import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";
import styles from "./Footer.module.css";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <ParagraphsSmall>© 2023 Gokstadakademiet</ParagraphsSmall>
    </div>
  );
};

export default Copyright;
