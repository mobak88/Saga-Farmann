import Link from "next/link";
import styles from "./Footer.module.css";
import { useCurrentCrewId } from "@/hooks/useCurrentCrewId";

const FooterLinks = () => {
  const crewId = useCurrentCrewId();

  const links = [
    { href: "/", label: "Home" },
    { href: `/crew_members/${crewId}`, label: "Crew" },
    { href: "/posts", label: "Blog" },
    { href: "/destinations", label: "Destinations" },
    { href: "/livestream", label: "Livestream" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/aboutus", label: "About Us" },
    { href: "/the_ship", label: "The Ship" },
    { href: "/pressarchive", label: "Press" },
  ];

  return (
    <>
      <div className={styles["container-links"]}>
        <ul className={styles["wrapper-links"]}>
          {links.slice(0, 5).map(({ href, label }) => (
            <Link key={href} className={styles["footer-links"]} href={href}>
              <>{label}</>
            </Link>
          ))}
        </ul>
        <ul className={styles["wrapper-links"]}>
          {links.slice(5, 10).map(({ href, label }) => (
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
