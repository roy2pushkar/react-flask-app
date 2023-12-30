import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Python Flask API
    axios.get('http://127.0.0.1:5000/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Error fetching data. Please check the console.');
      });
  }, []);

  return (
    <div className="App">
      <h1 className='text-center'>React + Python Flask with Vite</h1>
      <p className='text-center font-semibold'>Message from Python API: {message}</p>
    </div>
  );
}

export default App;
