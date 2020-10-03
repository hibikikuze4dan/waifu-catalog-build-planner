import React from "react";
import HTMLRenderer from "../HTMLRenderer";

const TextLister = ({ textList }) => {
  return (
    <>
      {textList.map((text, index) => {
        return <HTMLRenderer key={`html-${index}`} html={text} />;
      })}
    </>
  );
};

export default TextLister;
