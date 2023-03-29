import LinkTo from "@/components/links/LinkTo";
import React from "react";
import styles from "./modalLinks.module.css";

const ModalLinks = () => {
  return (
    <div className={styles["links-container"]}>
      <LinkTo url="/">Blog</LinkTo>
      <LinkTo url="/">Crew</LinkTo>
      <LinkTo url="/">Destination</LinkTo>
    </div>
  );
};

export default ModalLinks;
