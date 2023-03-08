import Hamburger from "../hamburger/hamburger";
import Title from "../title/saga-asia";

type LayoutProps = {
	links: {href: string; label: string}[];
};

const Navbar = ({links}: LayoutProps) => {
	return (
		<nav>
			<div>
				<Title />
			</div>
			<div>
				<ul>
					<Hamburger links={links} />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
