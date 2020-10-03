import React from "react";
import Interweave from "interweave";
import { Typography } from "@material-ui/core";

const HTMLRenderer = ({ html }) => {
  return (
    <Typography>
      <Interweave content={html} />
    </Typography>
  );
};

export default HTMLRenderer;
