import React from "react";
import "./Details.css";
import { MdDeleteOutline } from "react-icons/md";

const Details = () => {
  return (
    <div className="detailsData">
      <div className="search">
        <input type="text" placeholder="City Name" />
        <button>Search</button>
      </div>

      <table>
        <tbody>
          <tr className="tableTitle">
            <td>City</td>
            <td>Description</td>
            <td>Temperature(&#8451;)</td>
            <td>Pressure(hpa)</td>
            <td>Data age(hrs)</td>
            <td>
              <MdDeleteOutline />
            </td>
          </tr>
          <tr>
            <th colSpan="6">
              <h2 style={{ textAlign: "center" }}>No DATA</h2>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
