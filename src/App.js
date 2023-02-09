import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Cart from './assists/Cart';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Header/>
      <Routes>
        {/* when inside of '/' routes to home */}
        <Route path='/' element={
          <Home/>
        }/>

        <Route path='/cart' element={
          <Cart/>
        }/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
