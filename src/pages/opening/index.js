import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

import TextLister from "../../components/TextLister";
import Table from "../../components/Table";
import WorldSelector from "../../components/WorldSelecter";
import {
  getCurrentSectionData,
  getBudgetTableData,
} from "../../redux/selectors";

export const OpeningPage = ({ data, tableData }) => {
  const { description, postscript } = data.toJS();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={8}>
        <Grid container>
          <Grid item xs={12}>
            <TextLister textList={description} className="description" />
          </Grid>
          <Grid item xs={12}>
            <Table tableData={tableData.toJS()} />
          </Grid>
          <Grid item xs={12}>
            <TextLister textList={postscript} className="postscript" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">
              Choose Your World and Intensity
            </Typography>
          </Grid>
          <WorldSelector />
        </Grid>
      </Grid>
    </Grid>
  );
};

const mSTP = (state) => ({
  data: getCurrentSectionData(state),
  tableData: getBudgetTableData(state),
});

export default connect(mSTP)(OpeningPage);
