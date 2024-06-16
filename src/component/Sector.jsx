import React from "react";

import "./css/sector.css";
import { Link } from "react-router-dom";
const sector = [
  "Automobiles",
  "Banks",
  "Capital Goods",
  "Ports and Logistics",
  "Consumer Durables & Apparel",
  "Consumer Services",
  "Diversified Financials",
  "Energy",
  "Food, Beverage & Tobacco",
  "Food and Staples Retailing",
  "Health Care Equipment and Services",
  "Household and Personal Products",
  "Insurance",
  "Materials",
  "Media & Entertainment",
  "Pharmaceuticals",
  "Real Estate",
  "Retailing",
  "Semiconductors",
  "Information Technology ",
  "Telecommunication",
  "Transportation",
  "Utilities",
];
function Sector() {
  return (
    <>
      <div className="sector">
        {sector.map((val) => {
          return (
            <div className="sec">
              <Link to={"home/" + val.toLowerCase()}>{val}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Sector;
