import Hamburger from "../hamburger/hamburger";
import Title from "../title/saga-asia";

const Navbar: React.FC = () => {
	return (
		<nav>
			<ul>
				<Title />
				<Hamburger />
			</ul>
		</nav>
	);
};

export default Navbar;
