import React from "react";
import Date from "./index";

export default {
  title: "Example/Date",
  component: Date,
};

const Template = (args) => <Date {...args} />;
export const index = Template.bind({});
index.args = {
  primary: true,
  label: "Button",
};
