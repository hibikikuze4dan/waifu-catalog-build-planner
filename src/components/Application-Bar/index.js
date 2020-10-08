import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";

import { getLocation, getBudget } from "../../redux/selectors";
import MenuDialog from "../MenuDialog";

const ApplicationBar = ({ location, budget }) => {
  const [openMenu, toggleMenuDialog] = useState(false);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid>
            <Grid container>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => toggleMenuDialog(!openMenu)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">{location}</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Button color="inherit">{budget}</Button>
          </Grid>
        </Grid>
      </Toolbar>
      <MenuDialog open={openMenu} handleBackgroundClick={toggleMenuDialog} />
    </AppBar>
  );
};

ApplicationBar.defaultProps = {
  budget: 0,
};

const mSTP = (state) => ({
  location: getLocation(state),
  budget: getBudget(state),
});

export default connect(mSTP)(ApplicationBar);
