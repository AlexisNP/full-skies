import axios from "axios";

/**
 * Get the excerpt of the wikipedia (fr) article for the specific celestial object
 * @param celestial A celestial object
 */
export const fetchWikipediaExcerpt = async (celestial: any): Promise<any> => {
  let query = 'https://fr.wikipedia.org/w/api.php?action=opensearch';

  switch (celestial.id) {
    case "soleil":
    case "lune":
      query += `&search=${celestial.id}`;
      break;
    
    case "planète à lunes":
      query += `&search=${celestial.id}%20planète`;
      break;
  
    default:
      query += `&search=${celestial.id}%20${celestial.type}`;
      break;
  }

  query += "&limit=1&namespace=0&format=json";

  console.log(query);


  const req = await axios.get(query);
  return;
};

export default {
  fetchWikipediaExcerpt
}