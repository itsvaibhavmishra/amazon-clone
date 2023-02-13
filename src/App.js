import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Cart from './assists/Cart';
import Login from './assists/Login';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Routes>
        {/* when inside of '/' routes to home */}
        <Route path='/' element={
          <>
            <Header/>
            <Home/>
          </>
        }/>

        <Route path='/cart' element={
          <>
            <Header/>
            <Cart/>
          </>
        }/>

        <Route path='/login' element={
          <Login />
        }/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
