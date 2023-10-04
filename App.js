import React from  "react";
import ReactDOM from "react-dom"

var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(hOneReact);
