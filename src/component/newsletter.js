import React, { useEffect, useState } from 'react';
import './css/newsletter.css';

const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=85bd3c687856487ba10b20b0353aa0e9';

async function fetcher() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles; // Assuming the data structure has an 'articles' property
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function Newsletter(props) {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetcher();
      setNewsData(data);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="news-category">
        <div className="news-category-con">
          {
            newsData && newsData.map((val, index) => (
              <div className="news-cat-con" key={index}>
                <div className="card-cat-img" style={{ backgroundImage: `url(${val.urlToImage})` }}></div>
                <div className="card-cat-main">
                  <p>{props.month[new Date(val.publishedAt).getMonth()]} {new Date(val.publishedAt).getDate()}, {new Date(val.publishedAt).getFullYear()}</p>
                  <h3>{val.title}</h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Newsletter;
