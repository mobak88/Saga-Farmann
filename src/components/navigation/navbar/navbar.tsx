import Hamburger from "../hamburger/hamburger";
import Title from "../navtitle/title";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar_container"]}>
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
