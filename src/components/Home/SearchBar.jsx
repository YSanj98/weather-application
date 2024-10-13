import React, { useState } from "react";

const SearchBar = () => {
  const [city, setCity] = useState("");

  const handleAddCity = () => {
    // Not Implement yet
    //Just log the city for now
    console.log(`City added: ${city}`);
  };

  return (
    <div className="mt-10 flex items-center bg-gray-800 rounded-lg mx-auto w-full max-w-xl">
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none"
      />
      <button
        onClick={handleAddCity}
        className="px-4 py-2 bg-searchButtonColor text-white rounded-lg hover:bg-searchButtonColorHover focus:outline-none"
      >
        Add City
      </button>
    </div>
  );
};

export default SearchBar;
