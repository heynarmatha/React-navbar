import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//jsx

// const element=<h1 className='text'>Hello</h1>;
// ReactDOM.render(element,document.getElementById("root"));

// const newElement=<h1 className='text'>welcome</h1>;
// ReactDOM.render(newElement,document.getElementById("root"));

// const element=(
//   <div className='text'>
//     <h1>hello</h1>
//     <h1>hello welcome</h1>
//   </div>
// )
// ReactDOM.render(element,document.getElementById("root"));

//react without jsx

// const element =React.createElement("h1",null,"welcome");

// ReactDOM.render(element,document.getElementById("root"));

const element= React.createElement("div",{className:"text"},
React.createElement("h1",{className:"logo"},"URBAN"),
React.createElement("ul",{className:"menus"},
  React.createElement("li",{className:"menus-list"},"Home"),
  React.createElement("li",{className:"menus-list"},"Service"),
  React.createElement("li",{className:"menus-list"},"About"),
  React.createElement("li",{className:"menus-list"},"Contact"),
  React.createElement("li",{className:"menus-list"},"LogIn"),
  ));
ReactDOM.render(element,document.getElementById("root"));
