import { useEffect, useState } from "react";
import { getFilmData } from "../APIs/api";

const FilmComponent = (props) => {
  const [filmsData, setFilmssData] = useState([]);

  useEffect(() => {
    if (!props?.searchValue) {
      return;
    }

    const getData = async () => {
      const data = await getFilmData(props.searchValue);
      setFilmssData(data);
    };

    getData();
  }, [props.searchValue]);

  console.log("array ", filmsData.results);

  if (filmsData?.results?.length === 0) {
    return (
      <div className="flex justify-center mt-14 text-xl font-bold">
        <p>No Data Found ! Try again :) </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {filmsData?.results?.map((data, index) => (
        <div
          key={index}
          className={` w-96 h-48 mb-4 shadow-lg  text-gray-700 max-w-md mx-auto bg-white rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out  shadow-cyan-900 hover:scale-105 hover:shadow-md hover:shadow-amber-500 `}
        >
          <div className="font-normal text-md mb-2 mt-6 text-center">
            <em className="text-lg font-bold m-4 p-4">{data.title} </em>
            <ul>
              <li>
                <b> Release Date :</b> {data.release_date}
              </li>
              <li>
                <b> Director</b> :{data.director}
              </li>
              <li>
                <b> Producer</b>: {data.producer}
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

export default FilmComponent;
