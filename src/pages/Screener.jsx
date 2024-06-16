import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data";
import Card from "../component/Card";
import NoData from "../component/NoData";
import "../component/css/screener.css";

function Screener() {
  const params = useParams();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const sectorData = data.filter((item) =>
    item.sector.toLowerCase().includes(params.sector)
  );
  return (
    <>
      <div className="sort">
        <select id="mySelect">
          <option disabled selected>
            Sort By
          </option>
          <option value="valuation">Valuation</option>
          <option value="buyCall">StockFunda Buy Call</option>
          <option value="underPerforming">Under Performing</option>
          <option value="outPerforming">Out Performing</option>
        </select>
      </div>
      <div>
        {sectorData.length !== 0 ? (
          <div className="news-card-container">
            {sectorData.map((val) => (
              <Link to={val.stockId} key={val.id}>
                <Card val={val} />
              </Link>
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
}

export default Screener;
