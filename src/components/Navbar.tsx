export const Navbar = () => {
  const Links: string[] = ["Home", "About", "Services", "Contact"];

  const linkElements = Links.map((link) => (
    <li key={link}>
      <a
        className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
        href="#"
      >
        {link}
      </a>
    </li>
  ));

  return (
    <nav className="container mx-auto flex-between px-5 2xl:px-0">
      <img
        className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
        src="/logo.svg"
        alt="logo"
        width="45"
        height="20"
      />
      <ul className="flex-center gap-8">{linkElements}</ul>
    </nav>
  );
};
