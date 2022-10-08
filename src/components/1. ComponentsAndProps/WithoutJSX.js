import React from "react";

const WithoutJSX = () => {
  return React.createElement(
    "div",
    { className: "jsx" },
    React.createElement("h1", null, "WithoutJSX")

    /*
    <div className = 'jsx'>
        <h1>WithoutJSX>/h1>
    </div>
    */
  );
};

export default WithoutJSX;
