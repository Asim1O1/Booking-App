import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHotel,
  faSearch,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./button";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between items-center h-16 bg-blue-600  text-white shadow-xl fixed top-0 backdrop-blur-3 z-[100]">
      <div className="flex items-center w-1/3">
        <ul className="hidden lg:flex items-center">
          <li className="ml-10 text-[30px]">Book Me</li>
        </ul>
      </div>
      <ul className="hidden mr-24 lg:flex w-2/4 justify-around">
        <li className=" text-lg hover:bg-red-500 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/">
            {" "}
            <FontAwesomeIcon
              icon={faHome}
              className=" mr-2 top-1/2 =  text-white-500"
            />
            Home
          </Link>
        </li>
        <li className=" text-lg hover:bg-red-500 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/topic">
            <FontAwesomeIcon
              icon={faHotel}
              className=" mr-2 top-1/2 =  text-white-500"
            />
            Hotels
          </Link>
        </li>

        <li className=" text-lg hover:bg-red-600 hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/about">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className=" mr-2 top-1/2 =  text-white-500"
            />
            About&nbsp;Us
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
      <Button className="px-4 py-2 rounded-lg text-white bg-red-500 hover-bg-red-600">
        Register
      </Button>
      <Button className=" ml-5 mr-10 px-4 py-2 rounded-lg text-white bg-blue-200">
        Login
      </Button>
    </header>
  );
};

export default NavBar;
