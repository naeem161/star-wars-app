import React, { useEffect, useState } from "react";
import { getSpeciesData } from "../APIs/api";

const SpeciesComponent = (props) => {
  const [speciesData, setSpeciesData] = useState([]);

  useEffect(() => {
    if (!props.searchValue) {
      return;
    }

    const getData = async () => {
      const data = await getSpeciesData(props.searchValue);
      setSpeciesData(data);
    };

    getData();
  }, [props.searchValue]);

  if (speciesData?.results?.length === 0) {
    return (
      <div className="flex justify-center mt-14 text-xl font-bold">
        <p>No Data Found ! Try again :) </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {speciesData?.results?.map((data, index) => (
        <div
          key={index}
          className={` w-96 h-48 mb-4 shadow-lg  text-gray-700 max-w-md mx-auto bg-white rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out  shadow-cyan-900 hover:scale-105 hover:shadow-md hover:shadow-amber-500 `}
        >
          <div className="font-normal text-md mb-2 mt-6 text-center">
            <ul>
              <li>
                <b> Name </b>: {data.name}{" "}
              </li>
              <li>
                <b> Language:</b> {data.language}{" "}
              </li>
              <li>
                <b> Classification</b> :{data.classification}
              </li>
              <li>
                <b> Skin Colors</b>: {data.skin_colors}
              </li>
              <li>
                <b> Designation</b> : {data.designation}
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeciesComponent;
