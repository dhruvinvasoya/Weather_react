// https://api.openweathermap.org/data/2.5/weather?q=rajkot&appid=b6741e7b64ff03f3484a4082e140620c
import React, { useEffect, useState } from "react";
import Weathercard from "./Weathercard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("ahmedabad");
  const [weatherinfo, setWeatherinfo] = useState({});
  const getWeatherReport = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=641fd186bf2a3686b1d9959d6d5df48c
      `;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, pressure, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { country, sunrise, sunset } = data.sys;
      const { speed } = data.wind;

      const alldata = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        country,
        sunset,
        sunrise,
        speed,
      };

      console.log(searchValue);
      setWeatherinfo(alldata);

      console.log(weatherinfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherReport();
  }, []);
  const timestamp = weatherinfo.sunset;

// Convert the Unix timestamp to milliseconds
const date = new Date(timestamp * 1000);

// Get hours, minutes, and seconds
const hours = date.getHours();
const minutes = "0" + date.getMinutes();
const seconds = "0" + date.getSeconds();

// Format the time as HH:mm:ss
const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);

  return (
    <>
      <div className="main">
        <div className="Search_field">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            className="search"
          />
          <button onClick={getWeatherReport}>Search</button>
        </div>
        <Weathercard weatherinfo={weatherinfo} formattedTime = {formattedTime} />
      </div>
    </>
  );
};

export default Weather;
