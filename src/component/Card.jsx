import React from "react";
import "./css/card.css";

function Card({ val }) {
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
  return (
    <div>
      <div className="news-con">
        <div className="card-news-img">
          <img src={val.imglink} alt="" />
        </div>
        <div className="card-news-main">
          <p>
            <b>Business, Travel - </b> {month[val.publishdate.getMonth()]}{" "}
            {val.publishdate.getDay()}, {val.publishdate.getFullYear()}
          </p>
          <h3>{val.title}</h3>
          <p>{val.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
