import React from 'react';
import axios from 'axios';
import './Search.css';
import './Movies.css';

function Search() {
    const [data, setData] = React.useState();
    React.useEffect(() => {
      axios
      .get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=all&api-key=2VwRbeVmwKCp6P2xCiOqG1wGWkTdYeq2")
      .then(response => {
        setData(response.data)
      });
    }, [])
  
    return (
      <div className="App">
        <h1 className>Best Movies of the week</h1>
        <div className='movieCards'>
          {data && data.results.map(({ display_title, link, multimedia, summary_short }) => {
            return (
                <div className='card'>
                  <p>{display_title}</p>
                  <img className="movieImage" src={multimedia.src} />
                  <p>{summary_short}</p>
                  <a href={link.url}>Read More</a>
                </div>
            )
          })}
        </div>
      </div>
    );
}

export default Search;





