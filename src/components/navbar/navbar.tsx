import Link from "next/link";

const Navbar: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About us</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
