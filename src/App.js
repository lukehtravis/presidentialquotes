import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="App">
      <Container>
        <Quotes />
      </Container>
    </div>
  );
}

export default App;
