import './App.css';
import React, {useEffect, useState} from 'react'


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
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="nimi" />
        <button type="submit">Submit</button>
        </form>
    </>
  );
}

export default App;
