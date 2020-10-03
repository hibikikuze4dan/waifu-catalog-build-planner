import React from "react";
import Table from "./index";
import text from "../../data";

export default {
  title: "Example/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;
export const index = Template.bind({});
index.args = {
  tableData: text.data.world_budget,
};
