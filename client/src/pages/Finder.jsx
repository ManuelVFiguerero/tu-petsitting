// src/pages/Finder.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import DateRangePicker from '../components/DateRangePicker';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import FinderPhoto from '../assets/images/FinderPhoto.png';

const Finder = () => {
  const [rating, setRating] = useState(0);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [price, setPrice] = useState([0, 10000]);

  const handleRating = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setRating(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="relative w-full">
        <img src={FinderPhoto} alt="Fondo" className="w-full h-96 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-opacity-50 bg-black">
          <div className="flex space-x-4 bg-white p-4 rounded-lg shadow-lg">
            <button className="flex items-center space-x-2 text-gray-600 p-2 bg-gray-200 rounded-md focus:outline-none">
              <FontAwesomeIcon icon={faStar} />
              <span>MASCOTA</span>
            </button>
            <input type="text" placeholder="ZONA" className="p-2 bg-gray-200 rounded-md focus:outline-none" />
            <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
            <button className="p-2 bg-blue-500 text-white rounded-md focus:outline-none">
              <FontAwesomeIcon icon={faSearch} />
              <span>BUSCAR</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 mt-8 rounded-lg shadow-lg w-4/5">
        <h2 className="text-xl font-bold mb-4">FILTRAR POR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">CATEGORIA</h3>
            <div className="flex space-x-4">
              <label>
                <input type="checkbox" className="mr-2" />
                ADIESTRAMIENTO
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                CUIDADO DOMÉSTICO
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                PASEOS
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-bold">CALIFICACIÓN</h3>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={`cursor-pointer ${index <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => handleRating(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold">FRECUENCIA</h3>
            <div className="flex space-x-4">
              <label>
                <input type="radio" name="frecuencia" className="mr-2" />
                ÚNICA
              </label>
              <label>
                <input type="radio" name="frecuencia" className="mr-2" />
                DIARIA
              </label>
              <label>
                <input type="radio" name="frecuencia" className="mr-2" />
                SEMANAL
              </label>
              <label>
                <input type="radio" name="frecuencia" className="mr-2" />
                MENSUAL
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-bold">PRECIO</h3>
            <RangeSlider
              min={0}
              max={10000}
              step={100}
              value={price}
              onInput={(value) => setPrice(value)}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span>{price[0]}</span>
              <span>{price[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;

