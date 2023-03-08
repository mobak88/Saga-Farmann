import Navbar from "./navbar";

type LayoutProps = {
	links: {href: string; label: string}[];
};

const Layout = ({links}: LayoutProps) => {
	return (
		<>
			<Navbar links={links} />
		</>
	);
};

export default Layout;
