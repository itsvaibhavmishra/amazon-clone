import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Cart from './assists/Cart';
import Login from './assists/Login';
import Register from './assists/Register';
import { auth } from './assists/firebase';
import { useStateValue } from './assists/sub-assists/StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) 
  // [] means it will only run once when App component loads

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

        <Route path='/register' element={
          <Register />
        }/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
