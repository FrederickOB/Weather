import React from "react";

const Search = () => {
  return (
    <div className="flex mb-8">
      <button className="bg-gray-200 w-10 h-8 rounded-lg ">
        <i className="fas fa-arrow-left text-sm text-gray-400"></i>
      </button>
      <input
        name="search"
        type="text"
        className="ml-2 border bg-gray-200 w-full rounded-lg"
      />
    </div>
  );
};

export default Search;
