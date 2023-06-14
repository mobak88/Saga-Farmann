export const links = (crewId: string) => {
  return [
    { href: "/", label: "Home" },
    { href: "/voyage", label: "The voyage" },
    { href: `/crew_members/${crewId}`, label: "Crew" },
    { href: "/posts", label: "Blog" },
    { href: "/destinations", label: "Destinations" },
    { href: "/livestream", label: "Livestream" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/about-us", label: "About us" },
    { href: "/the_ship", label: "The ship" },
    { href: "/pressarchive", label: "Press" },
  ];
};
