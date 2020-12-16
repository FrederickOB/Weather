import React, { useState, useEffect } from "react";

const SelectedPage = ({ setState, cardState }) => {
  // useEffect(() => {
  //   if (cardState) {
  //     setCardData(cardState.data);
  //   }
  // }, []);
  // console.log(cardData);

  const [weahterPic, setWeahterPic] = useState("");

  useEffect(() => {
    if (cardState.data.weather[0].main === "Clouds") {
      setWeahterPic("h-screen cloudy ");
    } else if (cardState.data.weather[0].main === "Rain") {
      setWeahterPic("h-screen rainy ");
    } else if (cardState.data.weather[0].main === "Snow") {
      setWeahterPic("h-screen snowy ");
    } else {
      setWeahterPic("h-screen sunny ");
    }
  }, [cardState]);

  return (
    <div className={weahterPic}>
      <div className="p-10">
        <h3 className="text-m font-normal">
          {cardState.data.weather[0].description}
        </h3>
        <h2 className="font-bold text-4xl">{cardState.data.main.temp}</h2>
      </div>

      <div className="h-64 w-full fixed bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,197.3C480,213,600,267,720,261.3C840,256,960,192,1080,149.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="h-full w-full -mt-1 px-10 bg-white">
          <h2 className="font-bold text-sm">{cardState.data.name}</h2>
          <div className="flex justify-between mt-6">
            <div>
              <h3 className="text-xs font-normal">Now</h3>
              <i class="fas fa-sun"></i>
            </div>
            <div>
              <h3 className="text-xs font-normal">Now</h3>
              <i class="fas fa-sun"></i>
            </div>
            <div>
              <h3 className="text-xs font-normal">Now</h3>
              <i class="fas fa-sun"></i>
            </div>
            <div>
              <h3 className="text-xs font-normal">Now</h3>
              <i class="fas fa-sun"></i>
            </div>
            <div>
              <h3 className="text-xs font-normal">Now</h3>
              <i class="fas fa-sun"></i>
            </div>
            <div>
              <h3 className="text-xs font-normal">Now</h3>
              <i class="fas fa-sun"></i>
            </div>
          </div>
          <div className="mx-auto">
            <button
              className="mx-auto px-4 py-2 border border-blue-300"
              onClick={() => {
                setState(false);
              }}
            >
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedPage;
