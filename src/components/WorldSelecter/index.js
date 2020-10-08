import { Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { connect } from "react-redux";

import { updateWorld, updateWorldRating } from "../../redux/actions";
import { getWorld, getWorldIntesity } from "../../redux/selectors";
import tier from "../../data";

export const WorldSelecter = ({
  world,
  updateWorld,
  updateWorldRating,
  intensity,
}) => {
  const [lockedIn, lockIn] = useState(false);

  return (
    <Grid container spacing={4}>
      <Grid item xs={9} lg={9}>
        <TextField
          id="world-name"
          label="Starting World"
          variant="filled"
          onChange={(e) => updateWorld(e.target.value)}
          style={{ width: "100%" }}
          disabled={lockedIn}
        />
      </Grid>
      <Grid item xs={3} lg={3}>
        <TextField
          id="world-intensity"
          variant="filled"
          label="Intensity"
          select
          value={intensity}
          onChange={(e) => updateWorldRating(e.target.value)}
          style={{ width: "100%" }}
          disabled={lockedIn}
        >
          {tier.tierValues.map((tier) => {
            return (
              <MenuItem key={`menuitem-${tier.value}`} value={tier.value}>
                {tier.label}
              </MenuItem>
            );
          })}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          style={{ width: "50%" }}
          onClick={() => {
            lockIn(!lockedIn);
          }}
        >
          {lockedIn ? "Update World" : "Lock In World"}
        </Button>
      </Grid>
    </Grid>
  );
};

const mSTP = (state) => ({
  world: getWorld(state),
  intensity: getWorldIntesity(state),
});

export default connect(mSTP, { updateWorld, updateWorldRating })(WorldSelecter);
