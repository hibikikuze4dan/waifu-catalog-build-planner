import React from "react";
import { Drawer, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { startCase } from "lodash";
import { Link } from "react-router-dom";

import { getSectionKeys } from "../../redux/selectors";
import { updateLocation } from "../../redux/actions";
// import styles from "../../styles";

const MenuDialog = ({ handleBackgroundClick, open, keys, updateLocation }) => {
  // const classes = styles.dialogStyles();

  return (
    <Drawer
      open={open}
      ModalProps={{ onBackdropClick: () => handleBackgroundClick(!open) }}
      anchor="left"
      // classes={{ paper: classes.dialog }}
    >
      {keys.map((val, ind) => {
        return (
          <Button
            key={`drawer-button-${val}-${ind}`}
            component={Link}
            to={val}
            onClick={() => {
              handleBackgroundClick(!open);
              updateLocation(val);
            }}
          >
            {startCase(val)}
          </Button>
        );
      })}
    </Drawer>
  );
};

MenuDialog.defaultProps = {};

const mSTP = (state) => ({
  keys: getSectionKeys(state),
});

export default connect(mSTP, { updateLocation })(MenuDialog);
