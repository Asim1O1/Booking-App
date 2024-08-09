import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="bg-yellow-500 rounded-md w-[400px] h-[450px] ml-[200px] mt-[200px] p-4">
      <h1 className="text-xl font-semibold mb-4">Search</h1>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Destination
      </label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Destination"
        required
      />
      <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Check-in date
      </label>
      <div className="flex items-center space-x-4">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Select start date"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
        />

        <span className="text-gray-500">to</span>

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Select end date"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
        />
      </div>
      <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
        Options
      </label>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Max price (per night)
        </p>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 h-8  "
          placeholder="$"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          Min price (per night)
        </p>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5"
          placeholder="$"
        />
      </div>
      <input />
      <p>Adult </p>
      <input />
      <p>Max Children</p>
      <input />
      <p>Room</p>
      <input />
    </div>
  );
};

export default SearchComponent;
