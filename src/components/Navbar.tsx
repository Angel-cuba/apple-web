export const Navbar = () => {
  return (
    <nav className="container mx-auto flex-between px-5 2xl:px-0">
      <img
        className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
        src="/logo.svg"
        alt="logo"
      />
      <ul className="flex-center gap-8">
        <li>
          <a
            className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
            href="#"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
