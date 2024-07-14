import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-teal-500 shadow-lg flex">
        <div className="container mx-auto">
          <ul className="flex space-x-8 p-4 text-white font-semibold">
            <li className="hover:bg-teal-600 rounded px-3 py-2 transition duration-300 ease-in-out">
              Home
            </li>
            <li className="hover:bg-teal-600 rounded px-3 py-2 transition duration-300 ease-in-out">
              About
            </li>
            <li className="hover:bg-teal-600 rounded px-3 py-2 transition duration-300 ease-in-out">
              Hotels
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
