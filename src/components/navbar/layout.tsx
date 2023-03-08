import Navbar from "./navbar";

type LayoutProps = {
	links: {href: string; label: string}[];
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({links, children}) => {
	return (
		<>
			<Navbar links={links} />
			<main>{children}</main>
		</>
	);
};

export default Layout;
