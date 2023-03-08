import Link from "next/link";

type HamburgerProps = {
	links: {href: string; label: string}[];
};

const linkCollector = () => {};

const Hamburger: React.FC<HamburgerProps> = ({links}) => {
	return (
		<nav>
			<ul>
				{links.map(({href, label}) => (
					<li key={href}>
						<Link href={href}>
							<a>{label}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Hamburger;
