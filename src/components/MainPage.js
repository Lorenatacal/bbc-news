import React from 'react';
import axios from 'axios';


function MainPage() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
    .get(`https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=51dde7a7caac40d5af679aa8eedde373`)
    .then(response => {
      setData(response.data);
    });
  }, [])

  return (
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
  );
}

export default MainPage;
