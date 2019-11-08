import React from 'react';
import axios from 'axios';
import './Food.css'

function FoodSearch() {
    const [data, setData] = React.useState();
    const [typedInput, setTypedInput] = React.useState("")
  
    return (
        <>
        <div className="inputDiv">
        <input className="input" onChange={event => setTypedInput(event.target.value)} />
        <button className="inputButton" onClick={() => {
            axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${typedInput}`)
            .then(response => {
              console.log(response)
                setData(response.data);
            })
        }}
        >Search</button>
      </div>
      <div className='foodCards'>
      {data && data.meals.map(({
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
          strIngredient16,
          strIngredient17,
          strIngredient18,
          strIngredient19,
          strIngredient20,
          strInstructions,
          strMeal,
          strMeasure1,
          strMeasure2,
          strMeasure3,
          strMeasure4,
          strMeasure5,
          strMeasure6,
          strMeasure7,
          strMeasure8,
          strMeasure9,
          strMeasure10,
          strMeasure11,
          strMeasure12,
          strMeasure13,
          strMeasure14,
          strMeasure15,
          strMeasure16,
          strMeasure17,
          strMeasure18,
          strMeasure19,
          strMeasure20,
          strMealThumb,
       }) => {
           
        return (
            <div className='foodCards'>
              <p className="foodTitle">{strMeal}</p>
              <img className="foodImage" src={strMealThumb}></img>
              <ul>
                  <ol>{strMeasure1} {strIngredient1}</ol>
                  <ol>{strMeasure2} {strIngredient2}</ol>
                  <ol>{strMeasure3} {strIngredient3}</ol>
                  <ol>{strMeasure4} {strIngredient4}</ol>
                  <ol>{strMeasure5} {strIngredient5}</ol>
                  <ol>{strMeasure6} {strIngredient6}</ol>
                  <ol>{strMeasure7} {strIngredient7}</ol>
                  <ol>{strMeasure8} {strIngredient8}</ol>
                  <ol>{strMeasure9} {strIngredient9}</ol>
                  <ol>{strMeasure10} {strIngredient10}</ol>
                  <ol>{strMeasure11} {strIngredient11}</ol>
                  <ol>{strMeasure12} {strIngredient12}</ol>
                  <ol>{strMeasure13} {strIngredient13}</ol>
                  <ol>{strMeasure14} {strIngredient14}</ol>
                  <ol>{strMeasure15} {strIngredient15}</ol>
                  <ol>{strMeasure16} {strIngredient16}</ol>
                  <ol>{strMeasure17} {strIngredient17}</ol>
                  <ol>{strMeasure18} {strIngredient18}</ol>
                  <ol>{strMeasure19} {strIngredient19}</ol>
                  <ol>{strMeasure20} {strIngredient20}</ol>
              </ul>
              <p>{strInstructions}</p>
            </div>
        )
      })}
    </div>
    </>
    );
  }
  
  export default FoodSearch;