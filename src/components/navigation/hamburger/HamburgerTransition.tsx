import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./HamburgerTransition.module.css";
import Link from "next/link";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const HamburgerTransition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setClick(!click);
  };

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
    { href: "/pressarchive", label: "Press" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setClick(false);
  };

  return (
    <>
      <div className={styles["hamburger-icons"]} onClick={toggleMenu}>
        {click ? (
          <IoMdClose size={50} style={{ color: "#fff" }} />
        ) : (
          <IoIosMenu size={50} style={{ color: "#fff" }} />
        )}
      </div>
      <CSSTransition in={isOpen} timeout={0} classNames="menu" unmountOnExit>
        <div className={styles.menu}>
          {links.map(({ href, label }) => (
            <div key={href}>
              <Link
                className={styles["page-link"]}
                href={href}
                onClick={handleLinkClick}
              >
                <>{label}</>
              </Link>
            </div>
          ))}
        </div>
      </CSSTransition>
    </>
  );
};

export default HamburgerTransition;
