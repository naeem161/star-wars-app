import React from "react";

const SelectDropDown = (props) => {
  return (
    <form className="max-w-sm mx-auto bg-white ">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="block py-2.5 p-4 bg-white caret-lime-300 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200  dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        selected
        value={props.selectedCatagory}
        onChange={(e) => props.onSelectCatagory(e.target.value)}
      >
        <option value="">Choose a Catagory</option>
        <option value="films">Films</option>
        <option value="species">Species</option>
      </select>
    </form>
  );
};

export default SelectDropDown;
