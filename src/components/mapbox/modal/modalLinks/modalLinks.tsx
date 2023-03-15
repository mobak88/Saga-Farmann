import LinkTo from "@/components/links/linkTo";
import React from "react";
import styles from "./modalLinks.module.css";

const ModalLinks = () => {
  return (
    <div className={styles["links-container"]}>
      <LinkTo url="/">Blog</LinkTo>
      <LinkTo url="/">Crew</LinkTo>
      <LinkTo url="/">Destinations</LinkTo>
    </div>
  );
};

export default ModalLinks;
