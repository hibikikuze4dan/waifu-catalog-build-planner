import { createSelector } from "reselect";
import { map } from "lodash";

export const getLocation = (state) => state.get("location");

export const getData = (state) => state.get("data");

export const getWorld = (state) => state.get("world");

export const getWorldIntesity = (state) => state.get("intensity");

export const getBudget = (state) => state.get("budget");

export const getSections = createSelector(getData, (data) => {
  return data.get("sections");
});

export const getSectionKeys = createSelector(getSections, (sections) => {
  return map(sections.toJS(), (val, key) => {
    return key;
  });
});

export const getCurrentSectionData = createSelector(
  [getSections, getLocation],
  (sections, location) => {
    return sections.get(location);
  }
);

export const getDataForTables = createSelector(getData, (data) => {
  return data.get("data");
});

export const getBudgetTableData = createSelector(
  getDataForTables,
  (tableData) => {
    return tableData.get("world_budget");
  }
);
