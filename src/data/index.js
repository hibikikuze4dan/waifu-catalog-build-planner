import text from "./text.json";

const tierValues = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
];

const budgetBasedOnIntensity = {
  1: 35,
  2: 55,
  3: 85,
  4: 140,
  5: 225,
  6: 365,
  7: 590,
  8: 955,
  9: 1545,
  10: 2500,
  11: 1500,
};

export default {
  text,
  tierValues,
  budgetBasedOnIntensity,
};
