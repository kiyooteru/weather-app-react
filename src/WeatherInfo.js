import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <p>
            <img src={props.data.iconUrl} alt={props.data.description} />
          </p>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">℃</span>
          <p>
            <strong>
              <FormattedDate date={props.data.date} />
            </strong>
          </p>
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <h3>{props.data.city}</h3>
        </div>
        <div className="col-6">
          <p className="highlights">Today's highlights</p>
          <hr />
          <div className="row">
            <div className="col-6">
              <span className="uv">
                Feels like: <p>{Math.round(props.data.feels)}</p>{" "}
              </span>
            </div>
            <div className="col-6">
              <span className="windSpeed">
                Wind speed:
                <p>{props.data.wind} km/h</p>
              </span>
            </div>
            <div className="row">
              <div className="col-6">
                <span className="humidity">
                  Humidity: <p>{props.data.humidity} %</p>
                </span>
              </div>
              <div className="col-6">
                <span className="visibility">
                  Pressure:
                  <p>{props.data.pressure} hA</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
