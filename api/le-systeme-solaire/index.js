import axios from 'axios'
import { addCelestialType, addCelestialsType } from '@/plugins/methods'

/**
 * Fetches the API for all celestial bodies and adds its type
 * @returns Array of celestials in the API
 */
export const fetchCelestials = () => {
  return axios
    .get('https://api.le-systeme-solaire.net/rest/bodies/')
    .then((res) => {
      return addCelestialsType(res.data.bodies)
    })
}

/**
 * Fetches the API for all celestial bodies and adds its type
 * @returns Array of celestials in the API
 */
export const fetchCelestial = (slug) => {
  return axios
    .get(`https://api.le-systeme-solaire.net/rest/bodies/${slug}`)
    .then((res) => {
      const celestial = addCelestialType(res.data)
      const moons = []
      if (celestial.moons) {
        celestial.moons.forEach(async (moon) => {
          const moonRes = await axios.get(moon.rel)
          moons.push(addCelestialType(moonRes.data))
        })
        celestial.moons = moons
      }
      return celestial
    })
}

export default {
  fetchCelestials,
  fetchCelestial
}
