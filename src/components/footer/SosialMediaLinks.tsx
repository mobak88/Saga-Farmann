import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import styles from "./Footer.module.css";
import HeadingThree from "../typography/headings/HeadingThree";

const SocialMediaLinks = () => {
  return (
    <div className={styles["container-sosial-media"]}>
      <HeadingThree>Follow us?</HeadingThree>
      <div className={styles["wrapper-sosial-icon"]}>
        <a href="https://www.instagram.com/">
          <FaInstagram className={styles["social-icon"]} />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter className={styles["social-icon"]} />
        </a>
        <a href="https://www.youtube.com/">
          <FaYoutube className={styles["social-icon"]} />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook className={styles["social-icon"]} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
