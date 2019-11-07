import React from 'react';
import axios from 'axios';
import './Search.css';

function Search() {
    const [data, setData] = React.useState();
    const [typedInput, setTypedInput] = React.useState("")

    return(
        <>
        <input className="input" onChange={event => setTypedInput(event.target.value)} />
        <button className="inputButton" onClick={() => {
            axios
            .get(`https://api.nytimes.com/svc/movies/v2/reviews/api-key=2VwRbeVmwKCp6P2xCiOqG1wGWkTdYeq2}`)
            .then(response => {
                console.log(response)
            })
        }}
      >Search</button>
      <div className='cards'>
        {/* {data && data.articles.map(({ title, urlToImage, author, description, url }) => {
          return (
              <div className='card'>
                <p>{title}</p>
                <img className="image" src={urlToImage} />
                <p>{author}</p>
                <p>{description}</p>
                <a href={url}>Read More</a>
              </div>
          )
        })} */}
      </div>
    </>
    )
}

export default Search;





