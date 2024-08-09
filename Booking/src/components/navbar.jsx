import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fontsource/open-sans-condensed";
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
  return (
    <header className="w-full h-20 flex justify-between items-center bg-blue-600 text-white shadow-xl fixed top-0 backdrop-blur-3 z-[100] font-sans">
      <div className="flex items-center w-1/3">
        <ul className="hidden lg:flex items-center">
          <li className="ml-10 text-[30px]">Book Me</li>
        </ul>
      </div>
      <ul className="hidden lg:flex w-2/4 justify-around">
        <li className="text-lg hover:bg-red-500 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="mr-2 text-white-500" />
            Home
          </Link>
        </li>
        <li className="text-lg hover:bg-red-500 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/hotel">
            <FontAwesomeIcon icon={faHotel} className="mr-2 text-white-500" />
            Hotels
          </Link>
        </li>
        <li className="text-lg hover:bg-red-500 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/flights">
            <FontAwesomeIcon icon={faPlane} className="mr-2 text-white-500" />
            Flights
          </Link>
        </li>
        <li className="text-lg hover:bg-red-500 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/car">
            <FontAwesomeIcon icon={faCar} className="mr-2 text-white-500" />
            Rentals
          </Link>
        </li>
        <li className="text-lg hover:bg-red-600 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/about">
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
