import React, { useState, useEffect } from "react";
import "./Details.css";
import { MdDeleteOutline } from "react-icons/md";

const Details = ({ weather, setAllCitiesData }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [matchingRow, setMatchingRow] = useState(null);

  // Update weatherData when the weather prop changes
  useEffect(() => {
    if (weather && Object.keys(weather).length !== 0) {
      setWeatherData((prevData) => [...prevData, weather]);
    }
  }, [weather]);

  // Handle search functionality
  const handleSearch = () => {
    const index = weatherData.findIndex((entry) =>
      entry.city.toLowerCase().includes(searchData.toLowerCase())
    );

    if (index !== -1) {
      setMatchingRow(index); // Set the matching row to highlight
      setTimeout(() => setMatchingRow(null), 3000); // Reset the highlight after 3 seconds
    }
  };

  // Handle delete functionality
  const handleDelete = (id) => {
    const filteredData = weatherData.filter((data) => data.id !== id);
    setWeatherData(filteredData);
    setAllCitiesData((prevData) =>
      prevData.map((city) =>
        city.id === id ? { ...city, isSelected: false } : city
      )
    );
  };

  // Calculate data age in hours
  const calculateDataAge = (dataTime) => {
    const now = new Date();
    const dataTimeDate = new Date(dataTime);
    const timeDiff = Math.abs(now - dataTimeDate);
    return (timeDiff / (1000 * 60 * 60)).toFixed(2); // Convert to hours
  };

  // Handle description change
  const handleDescriptionChange = (e, id) => {
    setWeatherData((prevData) =>
      prevData.map((data) =>
        data.id === id ? { ...data, description: e.target.value } : data
      )
    );
  };

  return (
    <div className="detailsData">
      <div className="search">
        <input
          type="text"
          placeholder="City Name"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <table>
        <tbody>
          <tr className="tableTitle">
            <td>City</td>
            <td>Description</td>
            <td>Temperature(&#8451;)</td>
            <td>Pressure(hpa)</td>
            <td>Data age(hrs)</td>
            <td>Delete</td>
          </tr>

          {weatherData && weatherData.length > 0 ? (
            weatherData.map((data, index) => (
              <tr
                key={data.id}
                className={matchingRow === index ? "highlight" : ""}
              >
                <td>{data.city}</td>
                <td>
                  <input
                    type="text"
                    value={data.description}
                    onChange={(e) => handleDescriptionChange(e, data.id)}
                  />
                </td>
                <td>{data.temp_in_celsius}</td>
                <td>{data.pressure_in_hPa}</td>
                <td>{calculateDataAge(data.date_and_time)}</td>
                <td>
                  <MdDeleteOutline
                    onClick={() => handleDelete(data.id)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th colSpan="6">
                <h2 style={{ textAlign: "center" }}>No DATA</h2>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
