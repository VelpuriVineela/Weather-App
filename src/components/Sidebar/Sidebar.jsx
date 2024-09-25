import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onHandleTarget, allCitiesData }) => {
  return (
    <div className="citiesList">
      <button className="getBtn" onClick={onHandleTarget}>
        Get Weather
      </button>
      <div className="cityTable">
        <p className="cityTitle">City</p>
        {allCitiesData.map(({ cityName, id, isSelected }) => (
          <p key={id} className={`cityList ${isSelected ? "selected" : ""}`}>
            {cityName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
