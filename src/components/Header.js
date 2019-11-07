import React from 'react';
import axios from 'axios';
import './Header.css';

function Header() {
    const [data, setData] = React.useState();
    const [typedInput, setTypedInput] = React.useState("")

    return(
        <>
            <nav className="Nav">
                <div className="Nav-menus">
                    <img className="Nav-brand-logo" src="https://www.famouslogos.net/images/new-york-times-logo.jpg" alt="New York Times" />
                </div>
            </nav>
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
                <p>{title}</p>
                <img className="image" src={urlToImage} />
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

export default Header;