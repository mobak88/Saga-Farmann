// import Hamburger from "../hamburger/Hamburger";
import Image from "next/image";
import HamburgerTransition from "../hamburger/HamburgerTransition";
import Title from "../navtitle/Title";
import styles from "./Navbar.module.css";
import Link from "next/link";

interface NavbarProps {
  lightNavbar?: boolean;
}

const Navbar = ({ lightNavbar }: NavbarProps) => {
  return (
    <nav
      className={
        lightNavbar
          ? `${styles["navbar-container"]} ${styles["navbar-container-light"]}`
          : styles["navbar-container"]
      }
    >
      <Link href="/">
        <Image
          width={145}
          height={70}
          src="/Saga Asia_neg-ai.png"
          alt="Saga Farmann logo"
        />
      </Link>
      <div>
        <HamburgerTransition />
      </div>
    </nav>
  );
};

export default Navbar;
