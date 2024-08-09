import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHotel,
  faSearch,
  faInfoCircle,
  faBed,
  faPlane,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

const NavBar = () => {
  const location = useLocation();

  const linkClass =
    "text-lg px-3 py-1 mr-4 transition-all relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[3px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:text-red-500";
  const activeLinkClass = "after:w-full after:left-0 text-red-500";

  return (
    <header className="w-full h-20 flex justify-between items-center bg-blue-600 text-white shadow-xl fixed top-0 backdrop-blur-3 z-[100] font-sans">
      <div className="flex items-center w-1/3">
        <ul className="hidden lg:flex items-center">
          <li className="ml-10 text-[30px] font-bold">Book Me</li>
        </ul>
      </div>

      <ul className="hidden lg:flex w-2/3 justify-around">
        <li className="text-lg hover:bg-red-200 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link
            to="/"
            className={`${linkClass} ${
              location.pathname === "/" ? activeLinkClass : ""
            }`}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2 text-white-500" />
            Home
          </Link>
        </li>
        <li className="text-lg hover:bg-red-200 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link
            to="/hotel"
            className={`${linkClass} ${
              location.pathname === "/hotel" ? activeLinkClass : ""
            }`}
          >
            <FontAwesomeIcon icon={faHotel} className="mr-2 text-white-500" />
            Hotels
          </Link>
        </li>
        <li className="text-lg  hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link
            to="/flights"
            className={`${linkClass} ${
              location.pathname === "/flights" ? activeLinkClass : ""
            }`}
          >
            <FontAwesomeIcon icon={faPlane} className="mr-2 text-white-500" />
            Flights
          </Link>
        </li>
        <li className="text-lg hover:bg-red-500 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link
            to="/car"
            className={`${linkClass} ${
              location.pathname === "/car" ? activeLinkClass : ""
            }`}
          >
            <FontAwesomeIcon icon={faCar} className="mr-2 text-white-500" />
            Rentals
          </Link>
        </li>
        <li className="text-lg hover:bg-red-600 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link
            to="/about"
            className={`${linkClass} ${
              location.pathname === "/about" ? activeLinkClass : ""
            }`}
          >
            <FontAwesomeIcon icon={faBed} className="mr-2 text-white-500" />
            Attractions
          </Link>
        </li>
      </ul>

      <ul className="hidden lg:flex items-center w-1/3">
        <li className="relative ml-24">
          <input
            type="text"
            placeholder=" Search"
            className="px-3 py-2 rounded-xl outline-none mr-4"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </li>
      </ul>

      <Button className="px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600">
        Register
      </Button>
      <Button className="ml-5 mr-10 px-4 py-2 rounded-lg text-white bg-blue-300 hover:bg-blue-500">
        Login
      </Button>
    </header>
  );
};

export default NavBar;
