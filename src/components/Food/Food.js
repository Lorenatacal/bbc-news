import React from 'react';
import axios from 'axios';
import FoodSearch from './FoodSearch'
import './Food.css'


function Food() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(response => {
      setData(response.data);
    });
  }, [])

  return (
    <div className="App">
      <h1 className="foodTitle">Let's cook something tasty</h1>
      < FoodSearch />
        <div className='foodCards'>
          {data && data.categories.map(({ strCategory, strCategoryDescription, strCategoryThumb }) => {
            return (
                <div className='card'>
                  <p className="foodTitle">{strCategory}</p>
                  <img className="foodImage" src={strCategoryThumb} alt="food"/>
                  <p>{strCategoryDescription}</p>
                </div>
            )
          })}
        </div>
      </div>
  );
}

export default Food;