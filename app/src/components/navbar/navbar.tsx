import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";
import useDarkMode from "../../app/useDarkMode";
import { Logo, Nav, NavbarContainer, NavLink } from "./styles";

const scrollProps = {
  activeClass: "text-red-600",
  smooth: true,
  duration: 500,
  spy: true,
  exact: "true",
  offset: -65,
};

export const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(colorTheme);
  };
  return (
    <NavbarContainer>
      <Logo>VietCuong</Logo>
      <div>
        <Nav>
          <NavLink>
            <Link {...scrollProps} to="home" className="">
              Home
            </Link>
          </NavLink>
          <NavLink>
            <Link {...scrollProps} to="services" className="">
              Services
            </Link>
          </NavLink>

          <NavLink>
            <Link {...scrollProps} to="skills" className="">
              Skills
            </Link>
          </NavLink>
          <NavLink>
            <Link {...scrollProps} to="about" className="">
              About
            </Link>
          </NavLink>
          <NavLink>
            <Link {...scrollProps} to="portfolio" className="">
              Portfolio
            </Link>
          </NavLink>
          <NavLink>
            <Link {...scrollProps} to="contact" className="">
              Contact
            </Link>
          </NavLink>
          <li onClick={toggleTheme}>
            {colorTheme === "dark" ? (
              <FiMoon className="w-5 h-5 mx-auto hover:text-red-500" />
            ) : (
              <FiSun className="w-5 h-5 mx-auto hover:text-red-500" />
            )}
          </li>
        </Nav>
      </div>
    </NavbarContainer>
  );
};
