// src/components/DateRangePicker.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateRangePicker = ({ dateRange, setDateRange }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
    setShowCalendar(false); // Cierra el calendario al seleccionar las fechas
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={`${dateRange[0].toLocaleDateString()} - ${dateRange[1].toLocaleDateString()}`}
        onClick={toggleCalendar}
        readOnly
        className="p-2 bg-gray-200 rounded-md focus:outline-none cursor-pointer"
      />
      {showCalendar && (
        <div className="absolute top-12 z-50 bg-white p-4 rounded-lg shadow-lg">
          <Calendar
            selectRange={true}
            onChange={handleDateChange}
            value={dateRange}
          />
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
