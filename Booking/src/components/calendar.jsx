import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    // You can perform any action with the selected date here
  };

  return (
    <div className="calendar-container">
      <label className="calendar-label">
        <FontAwesomeIcon icon={faCalendar} /> Select Date
      </label>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        className="calendar-input"
        placeholderText="Choose a date"
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // Disable past dates
      />
    </div>
  );
};

export default Calendar;
