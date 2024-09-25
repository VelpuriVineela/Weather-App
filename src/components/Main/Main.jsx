import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Details from "../Details/Details";
import "./Main.css";
import axios from "axios";

const Main = () => {
  const allCities = [
    {
      id: 1,
      cityName: "Las Vegas",
      isSelected: false,
    },
    {
      id: 2,
      cityName: "London",
      isSelected: false,
    },
    {
      id: 3,
      cityName: "Los Angeles",
      isSelected: false,
    },
    {
      id: 4,
      cityName: "New York",
      isSelected: false,
    },
  ];

  const [allCitiesData, setAllCitiesData] = useState(allCities);

  const [weather, setWeather] = useState({});

  const getWeatherData = async (city, id) => {
    try {
      const response = await axios.get(
        `https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname=${city}`
      );
      setWeather({ ...response.data, city, id });
      // console.log({ ...response.data, city, id });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onHandleTarget = () => {
    let flag = false;

    for (let i = 0; i < allCitiesData.length; i++) {
      if (!allCitiesData[i].isSelected && !flag) {
        flag = true;
        getWeatherData(allCitiesData[i].cityName, allCitiesData[i].id);
        setAllCitiesData((prevState) =>
          prevState.map((city, index) =>
            index === i ? { ...city, isSelected: !city.isSelected } : city
          )
        );
      }
    }
  };

  return (
    <main className="main">
      <Sidebar onHandleTarget={onHandleTarget} allCitiesData={allCitiesData} />
      <Details
        weather={weather}
        onHandleTarget={onHandleTarget}
        setAllCitiesData={setAllCitiesData}
        allCities={allCitiesData}
      />
    </main>
  );
};

export default Main;
