import Link from "next/link";
import { useState } from "react";
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/crew/", label: "Crew" },
    { href: "/blog", label: "Blog" },
    { href: "/destinations", label: "Destinations" },
    { href: "/livestream", label: "Livestream" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/aboutus", label: "About Us" },
    { href: "/technical", label: "Technical" },
  ];

  return (
    <header className={styles["menu-head"]}>
      <label
        className={isOpen ? styles["menu-open"] : styles["menu-closed"]}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={
            isOpen ? styles["menu-open-btn"] : styles["menu-closed-btn"]
          }
        />
      </label>

      <div
        className={isOpen ? styles["dropdown-open"] : styles["dropdown-closed"]}
      >
        <nav>
          {isOpen
            ? links.map(({ href, label }) => (
                <div key={href}>
                  <Link className={styles["page-link"]} href={href}>
                    <>{label}</>
                  </Link>
                </div>
              ))
            : ""}
        </nav>
      </div>
    </header>
  );
};

export default Hamburger;
