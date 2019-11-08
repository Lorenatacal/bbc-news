import React from 'react';
import axios from 'axios';
import './Search.css';
import Weather from './Weather'

function Search() {
    const [data, setData] = React.useState();
    const [typedInput, setTypedInput] = React.useState("")

    return(
        <>
                <div className="title">
                <Weather />
                    <img className="Nav-brand-logo" src="https://png2.cleanpng.com/sh/cac52aaed4e404b1f46890d66ac4ee6f/L0KzQYm3VMA5N5Npj5H0aYP2gLBuTgRpbV5zfek2eXB1e377if1me15oh995YX78PbBsl716d6NwRdVydImwfrbATfpmeqRqReZybXX2PYbogBFmOmY6StMAZUa3PoO6UMU1O2Y7Sac7M0K3RYe8U8E4O2cziNDw/kisspng-the-new-york-times-company-new-york-city-new-jerse-times-5acae2552a5e64.2305435615232456531736.png" alt="New York Times" />
                </div>
            <div className="inputDiv">
        <input className="input" onChange={event => setTypedInput(event.target.value)} />
        <button className="inputButton" onClick={() => {
            axios
            .get(`https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=51dde7a7caac40d5af679aa8eedde373&q=${typedInput}`)
            .then(response => {
                setData(response.data);
            })
        }}
      >Search</button>
      </div>
      <div className='cards'>
        {data && data.articles.map(({ title, urlToImage, author, description, url }) => {
          return (
              <div className='card'>
                <p className="searchTitle">{title}</p>
                <img className="image" src={urlToImage} alt="Search"/>
                <p>{author}</p>
                <p>{description}</p>
                <a href={url}>Read More</a>
              </div>
          )
        })}
      </div>
    </>
    )
}

export default Search;