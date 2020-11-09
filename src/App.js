import React from 'react';
import Header from './components/Header';
import './App.css';
import List from './components/List/List';

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <div className="app-content">
          <List title="PROS" />
          <List title="CONS" />
        </div>
      </div>
    </div>
  );
}

export default App;
