import React from "react";
import { DateTime } from "luxon";
import { Typography } from "@material-ui/core";

const Date = () => {
  return <Typography>{DateTime.local().toString()}</Typography>;
};

export default Date;
