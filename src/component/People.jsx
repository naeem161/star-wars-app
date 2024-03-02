import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../UI/Spinner";
import Modal from "../UI/Modal";

const backgroundColors = {
  0: "bg-gray-300",
  1: "bg-green-200",
  2: "bg-green-200",
  3: "bg-green-200",
  4: "bg-blue-200",
  5: "bg-blue-200",
  6: "bg-blue-200",
};

function Planets() {
  const [isLoading, setLoading] = useState(true);
  const [starWarsDataPeople, setStarWarsDataPeople] = useState();
  const [urlPeople, setUrlPeople] = useState(
    `https://swapi.dev/api/people/?page=1`
  );
  const [peopleImages, setPeopleImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(false);

  const openModal = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPerson(null);
    setIsModalOpen(false);
  };

  const getRandomImage = async () => {
    const imageUrl = `https://picsum.photos/v2/list?page=2&limit=10`;

    try {
      const response = await axios.get(imageUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching image:", error);
      return null;
    }
  };

  useEffect(() => {
    axios.get(urlPeople).then(async (response) => {
      setStarWarsDataPeople(response.data);

      // Fetch unique random images for each planet
      const imagesPromises = getRandomImage();
      const images = await imagesPromises;
      setPeopleImages(images);
      setLoading(false);
    });
  }, [urlPeople]);
  //  -------------------------------------- Cards Variable -----------------------------------
  const allPlanetsOnPage = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center">
      {starWarsDataPeople?.results.map((planet, index) => {
        return (
          <div
            key={planet.name}
            className={`max-w-xs rounded overflow-hidden shadow-lg ${
              backgroundColors[planet.species.length]
            } text-gray-700 w-75 h-80  max-w-md mx-auto bg-white rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out hov shadow-cyan-900 hover:scale-105 hover:shadow-md hover:shadow-amber-500 shadow-md`}
            onClick={() => openModal(planet)}
          >
            {peopleImages.length !== 0 && (
              <img
                className="w-full"
                src={peopleImages[index]?.download_url}
                width={150}
                height={150}
              />
            )}
            <div className="font-bold text-2xl mb-2 mt-6 text-center">
              {planet.name}
            </div>
          </div>
        );
      })}
    </div>
  );
  function nextPlanetPage() {
    setLoading(true);
    setUrlPeople(starWarsDataPeople.next);
  }

  function previousPage() {
    setLoading(true);
    setUrlPeople(starWarsDataPeople.previous);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="m-4 from-neutral-300  ">
      <section className="flex justify-end space-x-2.5 ">
        <button
          className={`flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 ${
            starWarsDataPeople.previous === null ? "bg-slate-400" : "bg-white"
          } `}
          onClick={previousPage}
        >
          ⪻ Previous
        </button>

        <button
          className={`flex items-center py-2 px-3 rounded font-medium select-none border text-gray-900 ${
            starWarsDataPeople.next === null ? "bg-slate-400" : "bg-white"
          } `}
          onClick={nextPlanetPage}
        >
          Next ⪼
        </button>
      </section>

      <h1 className="txt-shadow-gold">Planets</h1>

      {/* showing cards  */}
      <main>{allPlanetsOnPage}</main>
      {/* Showing selected Modal  */}

      {isModalOpen && selectedPerson && (
        <Modal
          data={selectedPerson}
          showModal={isModalOpen}
          onCloseModal={closeModal}
        />
      )}
      <Modal />
    </div>
  );
}

export default Planets;
