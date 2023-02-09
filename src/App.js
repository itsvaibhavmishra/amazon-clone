import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        {/* when inside of '/' show header and home */}
        <Route path='/' element={
          <> <Header/> <Home/></>
        }/>

        <Route path='/checkout' element={
          <> <Header/> Hello This is Checkout Page <Home/></>
        }/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
