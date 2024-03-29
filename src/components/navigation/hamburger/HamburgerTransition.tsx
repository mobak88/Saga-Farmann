import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./HamburgerTransition.module.css";
import Link from "next/link";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useCurrentCrewId } from "@/hooks/useCurrentCrewId";
import { links } from "./links";

const HamburgerTransition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const nodeRefBurger = useRef<HTMLButtonElement>(null);
  const nodeRefMenu = useRef<HTMLDivElement>(null);
  const crewId = useCurrentCrewId();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  const pageLinks = links(crewId as string);

  const handleLinkClick = () => {
    setIsOpen((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  return (
    <>
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
          <button ref={nodeRefBurger} className={styles["menu-button"]}>
            <span className={styles["sr-menu"]}>Menu</span>
            <IoMdClose
              size={50}
              className={styles["menu-icon"]}
              onClick={toggleMenu}
            />
          </button>
        ) : (
          <button ref={nodeRefBurger} className={styles["menu-button"]}>
            <span className={styles["sr-menu"]}>Menu</span>
            <IoIosMenu
              size={50}
              className={styles["menu-icon"]}
              onClick={toggleMenu}
            />
          </button>
        )}
      </CSSTransition>

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
        <nav ref={nodeRefMenu} className={styles.menu}>
          {pageLinks.map(({ href, label }) => (
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
        </nav>
      </CSSTransition>
    </>
  );
};

export default HamburgerTransition;
