import axios from "axios";

/**
 * Fetches the API for all celestial bodies
 * @returns Array of celestials in the API
 */
export const fetchCelestials = (): Promise<any> => {
  return axios
    .get("https://api.le-systeme-solaire.net/rest/bodies/")
    .then(res => {
      return res.data.bodies;
    });
};

/**
 * Fetches the API for all celestial bodies
 * @returns Array of celestials in the API
 */
export const fetchCelestial = (slug: string): Promise<any> => {
  return axios
    .get(`https://api.le-systeme-solaire.net/rest/bodies/${slug}`)
    .then(res => {
      return res.data;
    });
};

export default {
  fetchCelestials,
  fetchCelestial
};
