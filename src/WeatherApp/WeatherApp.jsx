import React, { useState, useEffect, useCallback } from "react";
import WeatherCard from "./WeatherCard";
const WeatherApp = () => {
  const [city, setCity] = useState("Dhandhuka");
  const [tempInfo, setTempInfo] = useState({});
  const [isError, setIsError] = useState({
    message: "",
    error: false,
  });
  const [loading, setLoading] = useState(false);

  const getWeatherData = useCallback(
    async () => {
      try {
        setLoading(true);
        const key = process.env.REACT_APP_KEY;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        const result = await fetch(url);
        const data = await result.json();
        console.log('data :>> ', data);
        if (data?.cod === 200) {
          const { main: weatermood } = data?.weather[0];
          const { temp, pressure, humidity } = data.main;
          const { speed } = data.wind;
          const { country, sunset } = data.sys;
          const { name, dt } = data;
          const newInfo = {
            dt,
            weatermood,
            temp,
            pressure,
            humidity,
            speed,
            country,
            sunset,
            name,
          };
          setTempInfo(newInfo);
          setIsError({
            message: "",
            error: false,
          });
        } else if (data?.cod === "404") {
          setIsError({
            message: data?.message,
            error: true,
          });
        }
        else {
          setIsError({
            message: "Something went wrong.",
            error: true,
          });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsError({
          message: "Something went wrong.",
          error: true,
        });
      }
    }, [city]);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <WeatherCard
        setLoading={setLoading}
        loading={loading}
        city={city}
        setCity={setCity}
        tempInfo={tempInfo}
        getWeatherData={getWeatherData}
        isError={isError}
      />
    </>
  );
};

export default WeatherApp;
