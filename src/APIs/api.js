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
