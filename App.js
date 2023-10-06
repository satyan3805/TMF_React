import React from  "react";
import ReactDOM from "react-dom"

//React element is an object.
var hOneReact = React.createElement("h1", {}, "HEADING CREATED using React");
//hOneReact is a object

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

//root.render(..) replaces the existing childs in the root with a html element created from hOneReact object
rootReact.render(hOneReact);

console.log(hOneReact);
//JSX will make easy to create React elements.

//JSX is not part of React. JSX is different from React.

//JSX is a convention to merge HTML and javascript/React.

var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1>
console.log(jsxHeading);
//jsxHeading is a React Element.

//JSX looks like HTML but JSX is not HTML
//JSX is not HTML inside javascript.
//JSX is a HTML/XML like syntax.

rootReact.render(jsxHeading)



// JS Engine cannot understand JSX
// Javascript wont come with JSX
// JS Engine knows only ECMA SCRIPT 
// browser dont undestand JSX , Browser knows only HTML.
// try var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1> in browser console.
// jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1>  : is not pure jsvascript.

//then how JSX is working in browser? Parcel manages to  Traspile JSX to javascript. 
//Babel's job is to compile and convert JSX to Bowser/JS Engine/ React understandble code.
// JSX will be traspilled before it reaches to JS Engine.

//React.createElement(..) => React Element -- is a JS Object => render as HTML Element.
//BABEL's job is //JSX => React.createElement(..) => React Element -- is a JS Object => render as HTML Element.

// in future we use only JSX syntax only and dont use createElement(..)

// refer and play on https://babeljs.io/ check how jsx converts to react elements.
//babel can convert JSX to old browser compatible ES-script.

// HTML : <h1 class="head">Heading from JSX!!</h1>
// JSX  : <h1 className="head">Heading from JSX!!</h1>
//JSX attributes must follow Camel case Ex: className, tabIndex

//Single line JSX
var jsxHeading = <h1 id="jsxHeading">Heading from JSX!!</h1>;
//multiline JSX need t wrap in paranthesis()
var jsxHeading = (<h1 id="jsxHeading">Heading from JSX!!</h1>);
