export const addCelestialType = (celestial: any) => {
  if (celestial.isPlanet) {
    if (celestial.moons) {
      celestial.type = "planète à lunes";
    } else {
      celestial.type = "planète";
    }

    // Check if element is moon
  } else if (celestial.aroundPlanet != null) {
    celestial.type = "lune";

    // Check if element is star
  } else if (celestial.id === "soleil") {
    celestial.type = "étoile";

    // ...else, body is "other"
  } else {
    celestial.type = "autre";
  }
  return celestial;
};

export default {
  addCelestialType
};
