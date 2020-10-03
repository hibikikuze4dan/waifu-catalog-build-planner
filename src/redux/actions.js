export const updateLocation = (location) => {
  window.scrollTo({ top: 0 });
  return {
    type: "UPDATE_LOCATION",
    payload: location,
  };
};
