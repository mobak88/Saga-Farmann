import Link from "next/link";

type HamburgerProps = {
	links: {href: string; label: string}[];
};

const Hamburger = ({links}: HamburgerProps) => {
	return (
		<nav>
			<ul>
				{links.map(({href, label}) => (
					<li key={href}>
						<Link href={href}>
							<>{label}</>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Hamburger;
