import Link from "next/link";
import { useState } from "react";
import styles from "./hamburger.module.css";

type HamburgerProps = {
  links: { href: string; label: string }[];
};

const Hamburger = ({ links }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  let text: string = "Burgermenu";

  return (
    <header>
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
      <aside className={isOpen ? styles["dropdown-open"] : styles[""]}>
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
      </aside>
    </header>
  );
};

export default Hamburger;
