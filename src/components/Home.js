import React from 'react';
import './Home.css';
import Search from './Search';
import MainPage from './MainPage';

function Home() {

  return (
    <div className="App">
      <Search />
      <MainPage />
    </div>
  );
}

export default Home;