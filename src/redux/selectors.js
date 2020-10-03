import { createSelector } from "reselect";
import { List } from "immutable";

export const getLocation = (state) => state.get("location");
