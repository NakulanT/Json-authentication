import React, { useState } from 'react';
import Siginin from './Siginin';
import Siginup from './Siginup';
import Home from './Home';
import './App.css';

function App() {
  const [session, setSession] = useState(false);
  const [username, setUsername] = useState('');

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

  return (
    <div className='Page'>
      {session ? <Home name={username} /> : (
        <div className='AuthCard'>
          <Siginup />
          <Siginin OnSuccess={logined} />
        </div>
      )}
      <button className='Clear' onClick={clearJson}>Clear DB</button>
    </div>
  );
}

export default App;
