import React from 'react';
import { useParams } from 'react-router-dom';

function StockDetail({ data }) {
  const { id } = useParams();
  const dataObj = data.find((val) => val.stockId === id);
  console.log(dataObj);
  if (!dataObj) {
    return <div>Stock not found</div>;
  }

  return (
    <div>
      <h2>{dataObj.title}</h2>
    </div>
  );
}

export default StockDetail;
