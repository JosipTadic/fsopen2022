import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          country.capital[0] +
          "&appid=" +
          process.env.REACT_APP_WEATHER_API_KEY
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, [country]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="country flag" />
      <h2>Weather in {country.capital[0]}</h2>
      {weatherData && (
        <>
          <p>
            temperature {(weatherData.main.temp - 273.15).toFixed(2)} Celsius
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="wheather icon"
          />
          <p>wind {weatherData.wind.speed} m/s</p>
        </>
      )}
    </div>
  );
};

export default Country;
