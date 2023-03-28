import Link from "next/link";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import styles from "./linkTo.module.css";

interface LinkToProps {
  url: string;
  children: string;
}

const LinkTo = ({ url, children }: LinkToProps) => {
  return (
    <Link href={url} className={styles.link}>
      <ParagraphsBig>{children}</ParagraphsBig>
      <BsFillArrowRightCircleFill size={30} className={styles["link-icon"]} />
    </Link>
  );
};

export default LinkTo;
