
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route


} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
         <Navbar  exact path="/general" key="general"   pageSize={6} country="in" catagory="general"/>

         {/* <News pageSize={6} country="in" catagory="general"/> */}
      <Routes>
        {/* <Route exact path="/home" element={<News pageSize={6} country="in" catagory="genrel" />}></Route> */}
        <Route exact path="/business" element={<News key="business" pageSize={6} country="in" catagory="business"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" catagory="entertainment"/>}></Route>
        <Route exact path="/general" element={<News key="general" pageSize={6} country="in" catagory="general"/>}></Route>
        <Route exact path="/health" element={<News key="health" pageSize={6} country="in" catagory="health"/>}></Route>
        <Route exact path="/science" element={<News key="science" pageSize={6} country="in" catagory="science"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" catagory="sports"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" catagory="technology"/>}></Route>
    
        </Routes>
        
 
         </Router>
      </div>
    )
  }
}

