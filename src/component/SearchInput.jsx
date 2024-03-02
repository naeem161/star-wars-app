import React from "react";

const SearchInput = (props) => {
  return (
    <form className="flex items-center max-w-lg mx-auto mt-6">
      <input
        onChange={props.onInputChange}
        value={props.searchTerm}
        type="text"
        id="voice-search"
        className="bg-gray-50 border  border-gray-300 text-gray-900 text-md font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Here"
        required
      />
    </form>
  );
};

export default SearchInput;
