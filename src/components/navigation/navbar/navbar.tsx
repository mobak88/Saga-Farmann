import Hamburger from "../hamburger/hamburger";
import Title from "../navtitle/title";
import styles from "./navbar.module.css";

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
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
