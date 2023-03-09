import Hamburger from "../hamburger/hamburger";
import Title from "../navtitle/title";
import styles from "./navbar.module.css";

type LayoutProps = {
	links: {href: string; label: string}[];
};

const Navbar = ({links}: LayoutProps) => {
	return (
		<nav className={styles["navbar_container"]}>
			<div>
				<Title />
			</div>
			<div>
				<Hamburger links={links} />
			</div>
		</nav>
	);
};

export default Navbar;
