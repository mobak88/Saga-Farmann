import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./HamburgerTransition.module.css";
import Link from "next/link";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const HamburgerTransition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const nodeRefBurger = useRef<HTMLDivElement>(null);
  const nodeRefMenu = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
    setClick((prevState) => !prevState);
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
    setIsOpen((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles["hamburger-icons"]}>
        <CSSTransition
          nodeRef={nodeRefBurger}
          in={isOpen}
          timeout={300}
          classNames={{
            enter: styles["icons-enter"],
            enterActive: styles["icons-enter-active"],
            exit: styles["icons-exit"],
            exitActive: styles["icons-exit-active"],
          }}
        >
          {click ? (
            <div ref={nodeRefBurger}>
              <IoMdClose
                size={50}
                className={styles["menu-icon"]}
                onClick={toggleMenu}
              />
            </div>
          ) : (
            <div ref={nodeRefBurger}>
              <IoIosMenu
                size={50}
                className={styles["menu-icon"]}
                onClick={toggleMenu}
              />
            </div>
          )}
        </CSSTransition>
      </div>

      <CSSTransition
        nodeRef={nodeRefMenu}
        in={isOpen}
        timeout={300}
        classNames={{
          enter: styles["menu-enter"],
          enterActive: styles["menu-enter-active"],
          exit: styles["menu-exit"],
          exitActive: styles["menu-exit-active"],
        }}
        unmountOnExit
      >
        <div ref={nodeRefMenu} className={styles.menu}>
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
