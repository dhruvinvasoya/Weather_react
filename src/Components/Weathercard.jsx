import React , {useState,useEffect } from "react";

const Weathercard = ({ weatherinfo ,formattedTime}) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [weatherMood, setWeatherMood] = useState()

  const {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    country,
    sunset,
    sunrise,
    speed
  } = weatherinfo;
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    useEffect(()=> {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherMood("wi-day-cloudy")
                    break;
                case "Sunny":
                    setWeatherMood("wi-day-sunny")
                    break;
                case "Mist":
                    setWeatherMood("wi-dust")
                    break;
                case "Smoke":
                    setWeatherMood("wi-smoke")
                    break;
                case "Fog":
                    setWeatherMood("wi-day-fog")
                    break;
                case "Snow":
                    setWeatherMood("wi-day-snow")
                    break;
            
                default:setWeatherMood("wi-day-sunny")
                    break;
            }
        }
    },[weathermood])
  return (
    <>
      <div className="Wrap">
        <div className="weather_Icon_main">
          <i className={`wi ${weatherMood} main_icon`}></i>
        </div>
        <div className="wrap_mid">
          <div className="location_info">
            <div className="temprature">
              <span>{temp}&deg;</span>
            </div>
            <div className="discription">
              <div className="condition">{weathermood}</div>
              <div className="place">{name}, {country}</div>
            </div>
          </div>
          <div className="date_time">{currentTime.toLocaleString()}</div>
        </div>
        <div className="wrap_last">
          <div className="two_side_sec">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p>
              {formattedTime} <br />
              Sunset
            </p>
          </div>
          <div className="two_side_sec">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p>
              {humidity} <br />
              Humidity
            </p>
          </div>
          <div className="two_side_sec">
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p>
              {pressure} <br />
              Pressure
            </p>
          </div>
          <div className="two_side_sec">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p>
              {speed} <br />
              Speed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weathercard;
