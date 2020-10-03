import React from "react";
import {
  TableContainer,
  Paper,
  Table as MaterialUITable,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@material-ui/core";
import { map } from "lodash";

import { makeTableRows } from "./utils";

const Table = ({ tableData }) => {
  const { columns } = tableData;
  const rows = makeTableRows(tableData);

  return (
    <TableContainer component={Paper}>
      <MaterialUITable>
        <TableHead>
          <TableRow>
            {map(columns, (val) => {
              const { title } = val;
              return <TableCell key={`${title}-tablecell`}>{title}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {map(rows, (row, index) => {
            return (
              <TableRow key={`tablerow-${index}`}>
                {map(row, (rowData) => {
                  return (
                    <TableCell key={`${rowData}-tablecell`}>
                      {rowData}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaterialUITable>
    </TableContainer>
  );
};

export default Table;
