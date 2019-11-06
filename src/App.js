import React from 'react';
import axios from 'axios';
import './App.css';

// Your API key is: 51dde7a7caac40d5af679aa8eedde373
function App() {
  const [data, setData] = React.useState();
  const [typedInput, setTypedInput] = React.useState("")

  console.log(typedInput)
  return (
    <div className="App">
      <input onChange={event => setTypedInput(event.target.value)} />
      <button onClick={() => {
        axios
          .get(`https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=51dde7a7caac40d5af679aa8eedde373&q=${typedInput}`)
          .then(response => {
            console.log(response, 'Response')
            setData(response.data);
          })
      }}
      >Search</button>
        {data && (
          <>
          <div>
            <p>{data.articles[0].title}</p>
            <p>{data.articles[0].author}</p>
            <img src={data.articles[0].urlToImage} />
            <p>{data.articles[0].description}</p>
            <p>{data.articles[0].url}</p>
          </div>
          </>
        )}
    </div>
  );
}

export default App;
