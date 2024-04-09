import React, { useState, useEffect } from 'react';
import Siginin from './Siginin';
import Siginup from './Siginup';
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
        // Using fetch to fetch the API from the Flask server
        const response = await fetch("/bio");
        console.log(response)
        const data = await response.json();
        console.log("data",data)
        // Setting data from the API
        setBioName(data.name);
        setAge(data.age);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  return (
    <div className='Page'>
      {session ? <Home name={username} /> : (
        <div className='AuthCard'>
          <h1>name  : {bioName}<br></br> Age : {age}</h1>
          <Siginup />
          <Siginin OnSuccess={logined} />
        </div>
      )}
      <button className='Clear' onClick={clearJson}>Clear DB</button>
    </div>
  );
}

export default App;
