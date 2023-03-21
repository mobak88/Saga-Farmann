import React from "react";
import HeadingThree from "../typography/headings/headingThree";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <HeadingThree children={"E-post@adresse.com"} />
    </div>
  );
};

export default Footer;
