import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form>
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="🔍 Enter a city..."
                    className="form-control"
                    autoFocus="on"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-secondary"
                  />
                </div>
              </div>
            </form>
            <p>
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </p>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">℃</span>
            <p>
              <strong>Monday</strong>, 16:00
            </p>
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <h3>{weatherData.city}</h3>
          </div>

          <div className="col-6">
            <p className="highlights">Today's highlights</p>
            <hr />
            <div className="row">
              <div className="col-6">
                <span className="uv">
                  Feels like: <p>{Math.round(weatherData.feels)}</p>{" "}
                </span>
              </div>
              <div className="col-6">
                <span className="windSpeed">
                  Wind speed:
                  <p>{weatherData.wind} km/h</p>
                </span>
              </div>
              <div className="row">
                <div className="col-6">
                  <span className="humidity">
                    Humidity: <p>{weatherData.humidity} %</p>
                  </span>
                </div>
                <div className="col-6">
                  <span className="visibility">
                    Pressure:
                    <p>{weatherData.pressure} hA</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "68b2e1953aab6836f24fao7tab3fc064";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
