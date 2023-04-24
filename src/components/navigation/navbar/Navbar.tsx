// import Hamburger from "../hamburger/Hamburger";
import HamburgerTransition from "../hamburger/HamburgerTransition";
import Title from "../navtitle/Title";
import styles from "./Navbar.module.css";

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
      <div>
        <Title />
      </div>
      <div>
        <HamburgerTransition />
      </div>
    </nav>
  );
};

export default Navbar;
