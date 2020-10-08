export const updateLocation = (location) => {
  window.scrollTo({ top: 0 });
  return {
    type: "UPDATE_LOCATION",
    payload: location,
  };
};

export const updateWorld = (worldData) => {
  return {
    type: "UPDATE_WORLD",
    payload: worldData,
  };
};

export const updateWorldRating = (rating) => {
  return {
    type: "UPDATE_WORLD_INTENSITY",
    payload: rating,
  };
};
