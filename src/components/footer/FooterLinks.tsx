import Link from "next/link";
import styles from "./Footer.module.css";
import { useCurrentCrewId } from "@/hooks/useCurrentCrewId";
import { links } from "../navigation/hamburger/links";

const FooterLinks = () => {
  const crewId = useCurrentCrewId();

  const pageLinks = links(crewId as string);

  return (
    <>
      <div className={styles["container-links"]}>
        <ul className={styles["wrapper-links"]}>
          {pageLinks.slice(0, 5).map(({ href, label }) => (
            <Link key={href} className={styles["footer-links"]} href={href}>
              <>{label}</>
            </Link>
          ))}
        </ul>
        <ul className={styles["wrapper-links"]}>
          {pageLinks.slice(5, 10).map(({ href, label }) => (
            <Link key={href} className={styles["footer-links"]} href={href}>
              <>{label}</>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
