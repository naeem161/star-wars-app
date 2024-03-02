import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../UI/Spinner";

function Planets() {
  const [isLoading, setLoading] = useState(true);
  const [starWarsDataPeople, setStarWarsDataPeople] = useState();
  const [urlPeople, setUrlPeople] = useState(
    `https://swapi.dev/api/people/?page=1`
  );
  const [peopleImages, setPeopleImages] = useState([]);

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

  const allPlanetsOnPage = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
      {starWarsDataPeople?.results.map((planet, index) => {
        return (
          <div
            key={planet.name}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-200 text-gray-700"
          >
            {peopleImages.length !== 0 && (
              <img
                className="w-full"
                src={peopleImages[index]?.download_url}
                width={150}
                height={150}
              />
            )}
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <h2 key={planet.name}>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
            <br />
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
    </div>
  );
}

export default Planets;
