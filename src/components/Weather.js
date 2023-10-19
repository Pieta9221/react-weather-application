// Weather.js
import React from 'react';
import './Weather.css';

const Weather = (props) => {
  return (
    <div className="weather-container">
      <div className="left-section">
        <img src={props.data.condition.icon} alt="" className="weather-icon" />
        <div className="sky-status">{props.data.condition.text}</div>
      </div>
      <div className="right-section">
        <div className="location">
          {props.place.name}, {props.place.region}
        </div>
        <div className="temp"><b>Temperature: </b>{props.data.temp_c}°C</div>
        <div className="humidity"><b>Humidity:</b>{props.data.humidity}</div>
      </div>
    </div>
  );
};

export default Weather;
