import { NavLink } from 'react-router-dom';

function Navigation() {
  const linkBase = "hover:text-purple-500 transition duration-200";
  const active = "text-purple-500 glow-text";

  return (
    <nav className="bg-black text-white py-4 sm:py-6 font-sans">
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 text-xs sm:text-sm md:text-[15px] font-bold tracking-normal">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? active : linkBase}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? active : linkBase}>About</NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => isActive ? active : linkBase}>Experience</NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => isActive ? active : linkBase}>Education</NavLink>
        </li>
        <li>
          <NavLink to="/project" className={({ isActive }) => isActive ? active : linkBase}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/certificates" className={({ isActive }) => isActive ? active : linkBase}>Certificates</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? active : linkBase}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
