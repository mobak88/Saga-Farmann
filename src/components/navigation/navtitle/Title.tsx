import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import styles from "./Title.module.css";
import Link from "next/link";

const Title = () => {
  return (
    <>
      <Link href="/" className={styles["nav_title"]}>
        <HeadingTwo>Saga Asia</HeadingTwo>
      </Link>
    </>
  );
};

export default Title;
