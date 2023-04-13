import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styles from "./ReadMoreBtn.module.css";
import Link from "next/link";

interface ReadmoreProps {
  url: string;
}

const ReadMoreBtn = ({ url }: ReadmoreProps) => {
  return (
    <Link href={url} className={styles["read-more-link"]}>
      Read more
      <BsFillArrowRightCircleFill className={styles["arrow-icon"]} size={20} />
    </Link>
  );
};

export default ReadMoreBtn;
