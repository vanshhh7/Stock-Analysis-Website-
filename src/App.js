import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home'
import Footer from './component/footer';
import data from './data';
import './component/css/responsive.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import StockDetail from './pages/StockDetail';
import Screener from './pages/Screener';

function App() {
  const [datarecive, setdatarecive] = useState([])
  const fun = (datagot) => { setdatarecive(datagot) }

  return (
    <>
      <Navbar getData={fun} />
      <div className="mycontainer">
        <div className='main'>
          <Routes>
            <Route path="/" element={<Home data={data} datarecive={datarecive} />} />
            <Route path="/">
              <Route path=':id' element={<StockDetail data={data} />} />
              <Route path='home/:sector/:id' element={<StockDetail data={data} />} />
            </Route>
            <Route path="home/:sector" element={<Screener />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
