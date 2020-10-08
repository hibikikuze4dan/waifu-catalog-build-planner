import React, { Fragment } from "react";
import HTMLRenderer from "../HTMLRenderer";

const TextLister = ({ textList, className }) => {
  return (
    <Fragment>
      {textList.map((text, index) => {
        return (
          <Fragment key={`html-${index}-${className}`}>
            <HTMLRenderer html={text} />
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

TextLister.defaultProps = {
  className: "",
};

export default TextLister;
