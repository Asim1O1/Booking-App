import { faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [selectedOption, setSelectedOption] = useState("adults");

  const handleIncrement = () => {
    if (selectedOption === "adults") {
      setAdults(adults + 1);
    } else if (selectedOption === "children") {
      setChildren(children + 1);
    } else if (selectedOption === "rooms") {
      setRooms(rooms + 1);
    }
  };

  const handleDecrement = () => {
    if (selectedOption === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (selectedOption === "children" && children > 0) {
      setChildren(children - 1);
    } else if (selectedOption === "rooms" && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const handleReset = () => {
    setAdults(2);
    setChildren(2);
    setRooms(1);
  };

  return (
    <div className="bg-white border border-yellow-500 p-4 rounded-lg shadow-lg flex flex-col space-y-4 sm:space-y-6 md:flex-row md:items-center md:justify-between md:space-x-6">
      {/* Date Selection */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
        <FontAwesomeIcon icon={faCalendar} className="text-yellow-500" />
        <span className="text-gray-700 text-sm sm:text-base">Date Range</span>
        <div className="flex space-x-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            className="border border-gray-300 rounded-md p-2 text-sm sm:text-base"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            className="border border-gray-300 rounded-md p-2 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* People & Room Selection */}
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <FontAwesomeIcon icon={faPerson} className="text-yellow-500" />
        <span className="text-gray-700 text-sm sm:text-base">
          {adults} Adults, {children} Children, {rooms} Room(s)
        </span>
        <div className="flex items-center space-x-2">
          <select
            className="border border-gray-300 rounded-md p-2 text-sm bg-white sm:text-base"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="adults">Adults</option>
            <option value="children">Children</option>
            <option value="rooms">Rooms</option>
          </select>
          <div className="flex space-x-1">
            <button
              onClick={handleDecrement}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md text-xs sm:text-sm hover:bg-gray-400 transition"
            >
              -
            </button>
            <button
              onClick={handleIncrement}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md text-xs sm:text-sm hover:bg-gray-400 transition"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
