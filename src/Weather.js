import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <form>
            <div className="row">
              <div className="col-4">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <h1>12℃</h1>
          <p>Monday, 16:00</p>
          <ul>
            <li>Partly cloudy</li>
            <li>Rain - 32%</li>
          </ul>
          <h3>New York, USA</h3>
        </div>
        <div className="col-6">
          <strong>Today's highlights</strong>
          <div className="row">
            <div className="col-3">UV Index</div>
            <div className="col-3">Wind speed</div>
            <div className="row">
              <div className="col-3">Humidity</div>
              <div className="col-3">Visibility</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
