import React, { useState } from "react";

const SelectDropDown = () => {
  const [selectCatagory, setSelectCatagory] = useState("");
  return (
    <form className="max-w-sm mx-auto">
      <label htmlFor="underline_select" className="sr-only">
        Underline select
      </label>
      <select
        id="underline_select"
        className="block py-2.5 bg-white px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        selected
        value={selectCatagory}
        onChange={(e) => setSelectCatagory(e.target.value)}
      >
        <option value="">Choose a Catagory</option>
        <option value="homeWorld">Home World</option>
        <option value="film">Film </option>
        <option value="spices">Species</option>
      </select>
    </form>
  );
};

export default SelectDropDown;
