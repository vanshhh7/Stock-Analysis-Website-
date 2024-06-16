import { useState } from 'react'
import NewsCon from '../component/NewsCon';
import Slider from '../component/Slider';
import Newsletter from '../component/newsletter';
import Sector from '../component/Sector';

function Home({ data, datarecive }) {
  const month = ['Januaury', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (
    <>
      <div class="main-head">Trending</div>
      <Slider data={data} month={month} />
      <Sector />
      <NewsCon data={data} month={month} search={datarecive} />
      <Newsletter month={month} />
    </>
  )
}

export default Home
