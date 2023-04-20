import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";
import HeadingThree from "../typography/headings/HeadingThree";
const SocialMediaLinks = () => {
  return (
    <div className={styles["container-sosial-media"]}>
      <HeadingThree>Follow us?</HeadingThree>
      <div className={styles["wrapper-sosial-icon"]}>
        <FaInstagram className={styles["social-icon"]} />
        <FaTwitter className={styles["social-icon"]} />
        <FaYoutube className={styles["social-icon"]} />
        <FaFacebook className={styles["social-icon"]} />
      </div>
    </div>
  );
};

export default SocialMediaLinks;
