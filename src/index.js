import React from 'react';
import ReactDOM from 'react-dom';
import './uikit.min.css';
import './index.css';
import Loader from './Loader';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';
const petsData = [
  {type: "Dog", name: "Pinky", breed: "Australian Shepherd", id: 23514, shelter: "KK58", descr: "Cute and lively doggy.", size: "md"},
  {type: "Cat", name: "Rossy", breed: "American Shorthair", id: 13555, shelter: "DJ33", descr: "Lazy and easy to be with.", size: "sm"},
  {type: "Cat", name: "Eugene", breed: "Bengal", id: 13618, shelter: "DJ33", descr: "Oh so crazy kitty.", size: "sm"},
  {type: "Dog", name: "Hector", breed: "Beagle", id: 23098, shelter: "KP18", descr: "It's all about hunting.", size: "md"},
  {type: "Dog", name: "Rex", breed: "German Shepherd", id: 24601, shelter: "NJ94", descr: "Steals bread, but is a good doggie.", size: "lg"}
];

ReactDOM.render(<Loader />, document.getElementById('loadingContent'));
ReactDOM.render(<Layout petsData={petsData} />, document.getElementById('bodyContent'));
registerServiceWorker();
