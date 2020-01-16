import React, { useState } from 'react';
import Container from './components/Container'
import './App.css';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)
  console.log(isAuthenticated)
  return (
    <div className="App">
      <Container 
      isAuthenticated={isAuthenticated}
      setAuthenticated={setAuthenticated}/>
    </div>
  );
}

export default App;
