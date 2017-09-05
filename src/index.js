import React from 'react';
import ReactDOM from 'react-dom';
import './uikit.min.css';
import './index.css';
import Loader from './components/Loader';
import Layout from './components/Layout';
const petsData = [
  {petType: "Dog", name: "Pinky", breed: "Australian Shepherd", id: 23514, shelter: "KK58", descr: "Cute and lively doggy.", petSize: "md", petAge: "age0"},
  {petType: "Cat", name: "Rossy", breed: "American Shorthair", id: 13555, shelter: "DJ33", descr: "Lazy and easy to be with.", petSize: "sm", petAge: "age1"},
  {petType: "Cat", name: "Eugene", breed: "Bengal", id: 13618, shelter: "DJ33", descr: "Oh so crazy kitty.", petSize: "sm", petAge: "age1"},
  {petType: "Dog", name: "Hector", breed: "Beagle", id: 23098, shelter: "KP18", descr: "It's all about hunting.", petSize: "md", petAge: "age1"},
  {petType: "Dog", name: "Rex", breed: "German Shepherd", id: 24601, shelter: "NJ94", descr: "Steals bread, but is a good doggie.", petSize: "lg", petAge: "age0"}
];

ReactDOM.render(<Loader />, document.getElementById('loadingContent'));
ReactDOM.render(<Layout petsData={petsData} />, document.getElementById('bodyContent'));
