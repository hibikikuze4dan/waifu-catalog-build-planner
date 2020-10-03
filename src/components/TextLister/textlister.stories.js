import React from "react";
import TextLister from "./index";
import text from "../../data";

export default {
  title: "Example/TextLister",
  component: TextLister,
};

const Template = (args) => <TextLister {...args} />;
export const index = Template.bind({});
index.args = {
  textList: text.sections.opening.postscript,
};
