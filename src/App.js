import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Weather from './components/Weather'

function App() {

  return (
    <div className="App">
      <Header />
      <Weather />
      <MainPage />
    </div>
  );
}

export default App;
