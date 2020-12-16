import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Card = ({ city, handleCard }) => {
  const [data, setData] = useState({
    data: {},
    isLoaded: false,
  });
  const [temp, setTemp] = useState(0);
  const [description, setDescription] = useState(0);
  const [weahterPic, setWeahterPic] = useState("");

  // const [city, setCity] = useState();

  const getWeather = () => {
    // console.log(city);
    const APIKey = "c6d66f9957223df1a7e2d0b78a06e7a1";

    //   api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    axios
      .get(`${URL}`)
      .then((res) => {
        // console.log(res);

        setData({ data: res.data, isLoaded: true });
      })
      .catch((err) => {
        console.error("cannot fetch from API");
      });

    // console.log(data.coord);
  };

  useEffect(() => {
    getWeather();
    handleCard(data);
    // console.log(data);
  }, [data.isLoaded === true]);

  useEffect(() => {
    if (data.data.main) {
      setTemp(data.data.main.temp);
      // console.log(data.data.main.temp);
    }

    if (data.data.weather) {
      setDescription(data.data.weather[0].description);
      // console.log(data.data.weather[0].description);
      if (data.data.weather[0].main === "Clouds") {
        setWeahterPic(
          "card bg-white shadow-xl cloudy w-full  h-24 rounded-lg p-5"
        );
      } else if (data.data.weather[0].main === "Rain") {
        setWeahterPic(
          "card bg-white shadow-xl rainy w-full  h-24 rounded-lg p-5"
        );
      } else if (data.data.weather[0].main === "Snow") {
        setWeahterPic(
          "card bg-white shadow-xl snowy w-full  h-24 rounded-lg p-5"
        );
      } else {
        setWeahterPic(
          "card bg-white shadow-xl sunny w-full  h-24 rounded-lg p-5"
        );
      }
    }
  }, [data]);

  return (
    <div>
      <div className={weahterPic}>
        <div className="flex justify-between mt-6">
          <div className="text-white">
            <h2 className="font-bold text-sm">{data.data.name}</h2>
            <h3 className="text-xs font-normal">{description}</h3>
          </div>
          <h1 className="font-bold text-xl">{temp}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
