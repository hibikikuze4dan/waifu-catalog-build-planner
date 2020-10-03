import { forEach } from "lodash";

export const makeTableRows = (data) => {
  const { rows, columns } = data;
  let arr = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    forEach(columns, (col) => {
      const { values } = col;
      row.push(values[i]);
    });
    arr.push(row);
  }
  return arr;
};
