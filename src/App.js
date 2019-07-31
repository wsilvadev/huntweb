import React, { Component } from 'react';
import Header from './components/Header';
import Routes from "./routes";
import './style.css'
import "./components/pages/products/style.css";
import Main from './components/pages/main/index'

const App = () =>(
   
   <div className="App">
     <Header/>
     <Routes/>
    </div>
);



export default App;
