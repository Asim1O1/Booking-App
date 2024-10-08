import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHotel,
  faSearch,
  faBed,
  faPlane,
  faCar,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import SearchComponent from "./searchComp";

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass =
    "text-lg px-3 py-1 mr-4 flex items-center transition-all relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[3px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-red-500";
  const activeLinkClass = "after:w-full after:left-0 text-red-500";

  return (
    <>
      {/* NavBar */}
      <header className="w-full h-20 flex justify-between items-center bg-blue-600 text-white shadow-xl fixed top-0 z-[100] font-sans">
        <div className="flex items-center w-0/3">
          <ul className="ml-4 text-[30px] font-bold">Book Me</ul>
        </div>

        <div className="lg:hidden mr-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex w-full lg:w-[760px] justify-around absolute lg:relative top-20 lg:top-0 left-0 bg-blue-600 lg:bg-transparent p-4 lg:p-0 z-50 lg:z-auto transition-transform duration-300 lg:transition-none`}
        >
          <li className="text-lg px-3 py-1 rounded-xl mr-4">
            <Link
              to="/"
              className={`${linkClass} ${
                location.pathname === "/" ? activeLinkClass : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2 text-white-500 " />
              Home
            </Link>
          </li>
          <li className="text-lg px-3 py-1 rounded-xl mr-4">
            <Link
              to="/hotels"
              className={`${linkClass} ${
                location.pathname === "/hotels" ? activeLinkClass : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faHotel} className="mr-2 text-white-500" />
              Hotels
            </Link>
          </li>
          <li className="text-lg px-3 py-1 rounded-xl mr-4">
            <Link
              to="/flights"
              className={`${linkClass} ${
                location.pathname === "/flights" ? activeLinkClass : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon
                icon={faPlane}
                className="mr-2 text-white-500 "
              />
              Flights
            </Link>
          </li>
          <li className="text-lg px-3 py-1 rounded-xl mr-4">
            <Link
              to="/car"
              className={`${linkClass} ${
                location.pathname === "/car" ? activeLinkClass : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faCar} className="mr-2 text-white-500" />
              Rentals
            </Link>
          </li>
          <li className="text-lg px-3 py-1 rounded-xl mr-4">
            <Link
              to="/about"
              className={`${linkClass} ${
                location.pathname === "/about" ? activeLinkClass : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faBed} className="mr-2 text-white-500 " />
              Attractions
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center">
          <Button className="px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600">
            <Link to={"/register"}> Register</Link>
          </Button>
          <Button className="ml-5 mr-10 px-4 py-2 rounded-lg text-white bg-blue-300 hover:bg-blue-500">
            <Link to={"/login"}> Login</Link>
          </Button>
        </div>
      </header>

      {/* SearchComponent placed below NavBar */}
      <div className="mt-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <SearchComponent />
      </div>
    </>
  );
};

export default NavBar;
