import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <span className="temperature">12</span>
          <span className="units">℃</span>
          <p>
            <strong>Monday</strong>, 16:00
          </p>
          <ul>
            <li>Partly cloudy</li>
            <li>Rain - 32%</li>
          </ul>
          <h3>New York, USA</h3>
        </div>

        <div className="col-6">
          <p className="highlights">Today's highlights</p>

          <div className="row">
            <div className="col-4">UV Index</div>
            <div className="col-4">Wind speed</div>
            <div className="row">
              <div className="col-4">Humidity</div>
              <div className="col-4">Visibility</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
