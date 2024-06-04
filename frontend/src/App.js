import './App.css';
import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import Store from './components/store';

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      event.target.reset();


    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Store" element={<Store/>}/>

        </Routes>
    </Router>
);
}

export default App;
