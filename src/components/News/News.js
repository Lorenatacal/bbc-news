import React from 'react';
import './News.css';
import Search from '../Search/Search';
import MainPage from '../MainPage';

function News() {

  return (
    <div className="App">
      <Search />
      <MainPage />
    </div>
  );
}

export default News;