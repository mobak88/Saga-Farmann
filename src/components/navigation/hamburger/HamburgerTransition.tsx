import React, { useState, useRef, useEffect } from "react";
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
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setIsOpen((prevState) => !prevState);
    setClick((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideMenu =
        nodeRefMenu.current &&
        !nodeRefMenu.current.contains(event.target as Node);
      const isOutsideBurger =
        nodeRefBurger.current &&
        !nodeRefBurger.current.contains(event.target as Node);
      if (isOpen && isOutsideMenu && isOutsideBurger) {
        setIsOpen(false);
        +setClick(false);
        console.log("Outside");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, nodeRefMenu, nodeRefBurger]);

  const pageLinks = links(crewId as string);
  return (
    <>
      <div className={styles["menu-container"]}>
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
            <button ref={nodeRefBurger} className={`${styles["menu-button"]} `}>
              <span className={styles["sr-menu"]}>Menu</span>
              <IoMdClose
                size={50}
                className={`${styles["menu-icon"]} ${
                  isScrolling ? styles["scrolled-menu-icon"] : ""
                }`}
                onClick={toggleMenu}
              />
            </button>
          ) : (
            <button ref={nodeRefBurger} className={`${styles["menu-button"]} `}>
              <span className={styles["sr-menu"]}>Menu</span>
              <IoIosMenu
                size={50}
                className={`${styles["menu-icon"]} ${
                  isScrolling ? styles["scrolled-menu-icon"] : ""
                }`}
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
      </div>
    </>
  );
};

export default HamburgerTransition;
