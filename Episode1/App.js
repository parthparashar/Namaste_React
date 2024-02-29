import React from "react";
import  ReactDOM  from "react-dom/client";
let heading  = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id :"child"},
        [
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag"),
        React.createElement("h3",{},"i am h3 tag"),
    ])
);
console.log(heading,"heading");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);