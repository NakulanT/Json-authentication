import React from 'react';
import Siginin from './Siginin';
import Siginup from './Siginup';
function App() {
  return (
    <div className='AuthPage'>
      <div className='AuthCard'>
        <Siginin />
        <Siginup />
      </div>
    </div>
  );
}

export default App;