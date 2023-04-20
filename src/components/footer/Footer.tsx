import React from "react";
import styles from "./Footer.module.css";
import Contact from "./Contact";
import FooterLinks from "./FooterLinks";
import SosialMediaLinks from "./SosialMediaLinks";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}></div>
      <div className={styles.container}>
        <Contact />
        <FooterLinks />
        <SosialMediaLinks />
      </div>
    </>
  );
};

export default Footer;
