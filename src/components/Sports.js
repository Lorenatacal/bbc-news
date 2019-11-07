import React from 'react';
import axios from 'axios';
import './Sports.css'

function Sports() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
    .get(`https://www.scorebat.com/video-api/v1/`)
    .then(response => {
      console.log(response, 'resp')
      setData(response.data)
    });
  }, [])

  return (
    <div className="App">
       <h1>Best Books Of The Week</h1>
       <div className='sportsCards'>
         {data && data.map(({ url, }) => {
          return (
              <div className="sportImage">
                <iframe width="920" height="1315"
                    src={url}>
                </iframe>
              </div>
          )
        })}
      </div>
    </div>
  );
}

export default Sports;