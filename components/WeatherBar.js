import React, { useState, useEffect } from "react";

import DailyWeather from "./DailyWeather.js";

import "../src/styles.css";

export default function WeatherBar() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = new Date().getDay();

  let [location, setLocation] = useState(0);

  getLocation(setLocation);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://darkskyapp.github.io/skycons/skycons.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div id="weather-bar">
      <DailyWeather location={location} today={days[day]} dayCount={0} />
      <DailyWeather
        location={location}
        today={days[(day + 1) % 7]}
        dayCount={1}
      />
      <DailyWeather
        location={location}
        today={days[(day + 2) % 7]}
        dayCount={2}
      />
      <DailyWeather
        location={location}
        today={days[(day + 3) % 7]}
        dayCount={3}
      />
      <DailyWeather
        location={location}
        today={days[(day + 4) % 7]}
        dayCount={4}
      />
      <DailyWeather
        location={location}
        today={days[(day + 5) % 7]}
        dayCount={5}
      />
      <DailyWeather
        location={location}
        today={days[(day + 6) % 7]}
        dayCount={6}
      />
    </div>
  );
}

function getLocation(setLocation) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        let location =
          position.coords.latitude + "," + position.coords.longitude;
        setLocation(location);
      },
      error => alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
}
