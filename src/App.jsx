import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './Components/UserProfile/UserProfile';
import Hunderd from './Components/Hunderd/Hunderd';
import Header from './Components/Header/header';

function App() {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" /> 
        <Route path="/UserProfile" element={<UserProfile />} /> 
        <Route path="/Hundred" element={<Hunderd />} /> 

      </Routes>
    </Router>
  );
}


export default App
