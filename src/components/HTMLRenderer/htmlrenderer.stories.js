import React from "react";
import HTMLRenderer from "./index";
import text from "../../data";

export default {
  title: "Example/HTMLRenderer",
  component: HTMLRenderer,
};

const Template = (args) => <HTMLRenderer {...args} />;
export const index = Template.bind({});
index.args = {
  html: text.sections.opening.postscript[4],
};
