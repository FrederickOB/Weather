import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import Card from "./card";
import Search from "./search";
import SelectedPage from "./selectedPage";

const Main = () => {
  // const [value, setState] = useState(false);
  const [favCities, setFavCities] = useState([]);
  const [currentCity, setCurrentCity] = useState("accra");
  const [cardData, setcardData] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    setCurrentCity("accra");
    setFavCities(["london", "new york", "dublin", "los angeles", "dubai"]);
  }, []);

  const handleCardState = useCallback((cardState) => {
    const data = () => {
      if (cardState.isLoaded === true) {
        return cardState.data;
      }
    };
    setcardData((prevItems) => [...prevItems, data()]);
    // setcardData(cardState);
  }, []);

  const onCLickHandler = (favCity) => {
    const data = cardData.find((e) => e.name === favCity);

    console.log(data);
  };

  //   };
  // console.log(cardData);

  const homePage = () => {
    return (
      <div className="bg-custom h-full v-screen bg-fixed px-10 py-20">
        <Search />
        <div className="mb-8">
          <h1 className=" text-xs text text-gray-400 mb-4">Your Loaction</h1>
          <div>
            <div
              onClick={() => {
                // setState(true);
                handleCardState();
              }}
            >
              <Card city={currentCity} handleCard={handleCardState} />
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-xs text-gray-400 mb-4">Recommended</h1>
          <div>
            {favCities.map((favCity) => {
              return (
                <div
                  className="mb-6"
                  onClick={() => {
                    // setState(true);
                    onCLickHandler(favCity);
                  }}
                >
                  <Card city={favCity} handleCard={handleCardState} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return homePage();

  // const switchPage = (value) => {
  //   if (value === true) {
  //     return <SelectedPage setState={setState} cardState={cardData} />;
  //   }
  //   return homePage();
  // };

  // return switchPage(value);
};

export default Main;
