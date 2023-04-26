export const links = (crewId: string) => {
  return [
    { href: "/", label: "Home" },
    { href: `/crew_members/${crewId}`, label: "Crew" },
    { href: "/posts", label: "Blog" },
    { href: "/journey", label: "The Journey" },
    { href: "/destinations", label: "Destinations" },
    { href: "/livestream", label: "Livestream" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/about-us", label: "About Us" },
    { href: "/the_ship", label: "The Ship" },
    { href: "/pressarchive", label: "Press" },
  ];
};
