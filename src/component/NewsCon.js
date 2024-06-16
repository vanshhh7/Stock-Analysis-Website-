import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/newscon.css';
import Card from './Card';

function NewsCon(props) {
  const [showCard, setshowCard] = useState(6);
  return (
    <>
      <div className="news-card-container">
        {
          props.data.slice(0, showCard)
            .filter((data) => data.title.toLowerCase().includes(props.search))
            .map((val) => (
              <Link to={val.stockId} key={val.id}>
                <Card val={val} />
              </Link>
            ))
        }
      </div>
      <div className='viewmore' onClick={() => (showCard > props.data.length) ? setshowCard(6) : setshowCard((val) => val + 6)}>View more ▼</div>
    </>
  );
}

export default NewsCon;
