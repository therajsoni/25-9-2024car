import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link , useNavigate ,useLocation } from "react-router-dom";
import { BioContext } from "../../context";
import { useContext } from "react"; 
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";



export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "CARS",
    link: "/cars",
  },
  {
    id: 1,
    name: "ABOUT",
    link: "/about",
  },
  {
    id: 1,
    name: "BOOKING",
    link: "/booking",
  },

  {
    id : 1,
    name : "LOGIN",
    link : "/login"
  }
];
const Navbar = ({ theme, setTheme }) => {


  const {loginConfirmState} = useContext(BioContext)


  const location = useLocation()

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate("/")
    window.scrollTo(0,0)
  }


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = (e,link) => {
    // Prevent navigation if the current path is the same as the link
    if (location.pathname === link) {
      e.preventDefault();  // Prevent the default anchor behavior
    }
  };


  return (
    <div
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span onClick={handleChange} className="text-3xl font-bold font-serif">Car Rental</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li  key={id} className="py-4">
                  <a
                    href={link} 
                    onClick={(e)=>handleClick(e,link)}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name==="LOGIN" ? loginConfirmState ? <FaPerson className="text-2xl"/> :"LOGIN" : name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* dark  mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
