import Navbar from "./navbar";

// type LayoutProps = {
// 	links: {href: string; label: string}[];
// };

const Layout = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/crew", label: "Crew" },
    { href: "/destinations", label: "Destinations" },
    { href: "/blog", label: "Blog" },
    { href: "/thejourney", label: "The Journey" },
    { href: "/livestream", label: "Livestream" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/aboutus", label: "About Us" },
    { href: "/technical", label: "Technical" },
  ];
  return <Navbar links={links} />;
};

export default Layout;
