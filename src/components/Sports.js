import React from 'react';
import axios from 'axios';
import './Sports.css'

function Sports() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
    .get(`https://www.scorebat.com/video-api/v1/`)
    .then(response => {
      setData(response.data)
    });
  }, [])

  return (
    <div className="App">
       <h1 className="sportTitle">Watch Games Online</h1>
       <div className='sportsCards'>
         {data && data.map(({ url, }) => {
          return (
              <div className="sportImage">
                <iframe width="920vw" height="1315vw"
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