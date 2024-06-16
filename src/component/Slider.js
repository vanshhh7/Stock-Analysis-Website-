import React from 'react';
import { Link } from 'react-router-dom';
import './css/slider.css'

function Slider(props) {
  return (
    <>
      <div className="main-crousel">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <div className="carousel-inner">
            {props.data.map((val, index) => (
              <Link to={val.stockId}>
                <div className="carousel-item active" data-interval="1000">
                  <div className="carousel-card">
                    <div className="carousel-news-img">
                      <img src={val.imglink} alt="" />
                    </div>
                    <div className="carousel-main">
                      <p><b>Business, Travel - </b> {props.month[val.publishdate.getMonth()]} {val.publishdate.getDay()}, {val.publishdate.getFullYear()}</p>
                      <h3>{val.title}</h3>
                      <p className="content">{val.content}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div >
    </>
  );
}

export default Slider;
