import React from 'react';
import axios from 'axios';
import kelvinToCelsius from 'kelvin-to-celsius';
import './Weather.css';


function Weather() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=350028cae8aa4de558771495ccd2d478`)
    .then(response => {
      setData(response.data);
    });
  }, [])

  return (
      <>
        {data && (
            <div className="WeatherDiv">
            <img className="WeatherImage" src="https://cdn1.iconfinder.com/data/icons/weather-429/64/weather_icons_color-14-512.png" alt="Icon" />
             <p>{data.name}, {data.sys.country}, {data.weather[0].description}</p>
             <p>Main temp: {kelvinToCelsius(data.main.temp)}°C,</p>
             <p> Min:{kelvinToCelsius(data.main.temp_min)}°C, Max:{kelvinToCelsius(data.main.temp_max)}°C</p>
            </div>
        )}
      </>
  );
}

export default Weather;