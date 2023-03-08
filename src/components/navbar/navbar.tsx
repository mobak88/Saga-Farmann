import Hamburger from "../hamburger/hamburger";
import Title from "../title/saga-asia";

type LayoutProps = {
	links: {href: string; label: string}[];
};

const Navbar = ({links}: LayoutProps) => {
	return (
		<nav>
			<ul>
				<Title />
				<Hamburger links={links} />
			</ul>
		</nav>
	);
};

export default Navbar;
