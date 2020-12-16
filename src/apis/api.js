import axios from "axios";
import React, { useState } from "react";

const GetUserLocation = () => {
  const [location, setLocation] = React.useState();

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  console.log(location);
  React.useEffect(() => {
    const { geolocation } = navigator;

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!geolocation) {
      React.setError("Geolocation is not supported.");
      return;
    }

    // Call Geolocation API
    geolocation.getCurrentPosition(handleSuccess);
  }, []);

  return { location };

  //   const [getLat, setGetLat] = React.useState(0);
  //   const [getLon, setGetLon] = React.useState(0);
  //   React.useEffect(() => {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setGetLat(position.coords.latitude);
  //       setGetLon(position.coords.longitude);
  //       const latitude = getLat;
  //       const longitude = getLon;
  //       console.log(latitude, longitude);
  //       // console.log("Latitude is :", getLat);
  //       // console.log("Longitude is :", getLon);
  //     });
  //   });
};

// const LoadCurrentLocation = () => {
//   React.useEffect(() => {
//     GetUserLocation.getLat();
//     return () => {
//       console.log("done");
//     };
//   }, []);
// };

const GetWeather = () => {
  const [data, setData] = useState({});
  const APIKey = "c6d66f9957223df1a7e2d0b78a06e7a1";

  const cityname = "Accra";
  //   api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`;

  axios
    .get(`${URL}`)
    .then((res) => {
      // console.log(res);

      setData(res.data);
    })
    .catch((err) => {
      console.error("cannot fetch from API");
    });

  console.log(data);
};

export default GetWeather;

// const getWeather = async () => {
//   const APIKey = "c6d66f9957223df1a7e2d0b78a06e7a1";
//   const location = navigator.geolocation.getCurrentPosition(function (
//     position
//   ) {
//     const Latitude = position.coords.latitude;
//     const Longitude = position.coords.longitude;
//     console.log("Latitude is :", Latitude);
//     console.log("Longitude is :", Longitude);
//   });

//   const cityname = "Accra";
//   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`;

//   await axios
//     .get(`${URL}`)
//     .then((res) => {
//       console.log(res);
//       return res;
//     })
//     .catch((err) => {
//       console.error("cannot fetch from API");
//     });
// };

// export default getWeather;
