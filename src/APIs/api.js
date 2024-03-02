import axios from "axios";

export const fetchCharacterPlanetData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching planet data:", error);
    throw error;
  }
};

// export const getFilmData = async (value) => {
//   try {
//     const response = await axios.get(
//       `https://swapi.dev/api/films/?search=${value}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching films data:", error);
//     throw error;
//   }
// };

export const getSpeciesData = async (value) => {
  console.log("api get called!!! ", value);
  try {
    const response = await axios.get(
      `https://swapi.dev/api/species/?search=${value}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching species data:", error);
    throw error;
  }
};

// https://swapi.dev/api/films/?search=att
