import Navbar from "../navbar/navbar";

type LayoutProps = {
  links: { href: string; label: string }[];
};

const Header = ({ links }: LayoutProps) => {
  return <Navbar links={links} />;
};

export default Header;
