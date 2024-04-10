import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import Home from './Home';
import './App.css';

function App() {
  const [session, setSession] = useState(false);
  const [username, setUsername] = useState('');
  const [bioName, setBioName] = useState('');
  const [age, setAge] = useState('');

  const logined = (username) => {
    setUsername(username);
    setSession(true);
    console.log(username, " is Successfully logged in");
  }

  const clearJson = () => {
    setUsername('');
    setSession(false);
    localStorage.removeItem('formDataArray');
    console.log("Entire DB is cleared!")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/bio"); // Use Axios for GET request
        // Check if the response is successful
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = response.data; // Get the response data
        console.log(data); // Log the data for inspection
        setBioName(data.bioName); // Update bioName state
        setAge(data.age); // Update age state
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors gracefully (e.g., display an error message)
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className='Page'>
      {session ? (
        <Home name={username} />
      ) : (
        <AuthCard bioName={bioName} age={age} logined={logined} />
      )}
      <button className='Clear' onClick={clearJson}>Clear DB</button>
    </div>
  );
}

function AuthCard({ bioName, age, logined }) {
  return (
    <div className='AuthCard'>
      <h1>Name: {bioName}<br />Age: {age}</h1>
      {/* <Signup /> */}
      {/* <Signin OnSuccess={logined} /> */}
    </div>
  );
}

export default App;
