import React, { useEffect, useState } from "react";
import { fetchCharacterPlanetData } from "../APIs/api";
import Spinner from "./Spinner";

export default function Modal(props) {
  const [planetData, setPlanetData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!props?.data?.homeworld) {
      return;
    }

    const res = async () => {
      const resData = await fetchCharacterPlanetData(props.data.homeworld);
      setPlanetData(resData);
      setIsLoading(false);
    };

    res();
  }, [props]);

  const originalDate = new Date(props?.data?.created);

  // Format the date as "dd-mm-yyyy"
  const formattedDate = originalDate.toLocaleDateString("en-US");

  return (
    <>
      {props.showModal ? (
        <>
          {/* {JSON.stringify(props.data)} */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="justify-items-center">
                    <h3 className="text-3xl text-black  font-semibold">
                      {props.data.name}
                    </h3>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={props.onCloseModal}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* ----------------------showing loading Spinner--------------------------- */}

                  {isLoading && <Spinner />}
                  {!isLoading && (
                    <ul className="my-4 text-blueGray-800  text-black text-lg leading-relaxed">
                      <li>
                        {" "}
                        <b> Height</b> : {`${props.data.height} meter`}
                      </li>
                      <li>
                        {" "}
                        <b> Mass </b> : {`${props.data.mass} kg`}
                      </li>
                      <li>
                        {" "}
                        <b> Added</b> : {formattedDate}
                      </li>
                      <li>
                        {" "}
                        <b> Appererance in Movies </b> :{" "}
                        {props.data.films.length}
                      </li>
                      <li>
                        {" "}
                        <b> Birth Year </b> : {props.data.birth_year}
                      </li>
                      <li>
                        {" "}
                        <b> Name </b> : {planetData.name}
                      </li>
                      <li>
                        {" "}
                        <b> Terrain </b> : {planetData?.terrain}
                      </li>
                      <li>
                        {" "}
                        <b> Climate </b> : {planetData?.climate}
                      </li>
                      <li>
                        <b> Amount of Residents </b> :{" "}
                        {planetData?.residents?.length}
                      </li>
                    </ul>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onCloseModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.onCloseModal}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
