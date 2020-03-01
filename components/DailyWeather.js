import React, { useState, useEffect } from "react";
import "../src/styles.css";

export default function DailyWeather({ location, today, dayCount }) {
  let [minTemp, setMinTemp] = useState();
  let [maxTemp, setMaxTemp] = useState();
  let [currentTemp, setCurrentTemp] = useState("loading...");
  let [icon, setIcon] = useState("");

  var ts = Math.round(new Date().getTime() / 1000) + dayCount * 24 * 60 * 60;

  if (location.toString() !== "0") {
    getMinMaxTemperature(
      setIcon,
      setMinTemp,
      setMaxTemp,
      setCurrentTemp,
      location,
      ts
    );
  }

  useEffect(() => {
    var skycons = new Skycons({ color: "grey" });
    skycons.add(document.getElementById(dayCount), icon);
    skycons.play();
  });

  return (
    <div id="daily-weather">
      <div>
        <span id="day">{today}</span>
      </div>
      <div>
        <span id="current-temp">{currentTemp}</span>
      </div>
      <div>
        <span>{minTemp}</span>
        <span> - </span>
        <span>{maxTemp}</span>
      </div>

      <canvas id={dayCount} width="128" height="128" />
    </div>
  );
}

function getMinMaxTemperature(
  setIcon,
  setMinTemp,
  setMaxTemp,
  setCurrentTemp,
  location,
  ts
) {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f6e19529a60f438ef7ee05b8d9a273f2/" +
      location +
      "," +
      ts +
      "?units=auto",
    {
      method: "GET"
    }
  )
    .then(res => res.json())
    .then(res => {
      setIcon(res.daily.data[0].icon);
      setCurrentTemp(Math.round(res.hourly.data[0].temperature) + "°C");
      setMinTemp(Math.round(res.daily.data[0].temperatureMin) + "°");
      setMaxTemp(Math.round(res.daily.data[0].temperatureMax) + "°");
    })
    .catch(err => {
      //alert(err)
    });
}
