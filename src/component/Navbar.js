import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
function Navbar(props) {
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));
  const s = document.querySelector('.switch')
  const main = document.querySelector('.main')
  props.getData(search)
  isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  return (
    <>
      <header>
        <div>
          <nav >
            <div className="logo"><Link to="/">स-machaar</Link></div>
            <div id="nav-links">
              <Link to="/">Home</Link>
              <a href="">News</a>
              <a href="">About</a>
              <a href="">Login</a>
            </div>
            <div class="pallete">
              <div class="icon moon"><i class="fa-solid fa-moon"></i></div>
              <span class="switch" onClick={() => {
                document.body.classList.toggle('dark')
                setIsDark(!isDark)
                isDark ? s.style.left = 0 : s.style.left = '50%';
                localStorage.setItem('isDark', !isDark)
              }}></span>
              <div class="icon sun"><i class="fa-solid fa-sun"></i></div>
            </div>
            <form className="signin">
              <input type="search" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            </form>
            <button id="nav-menu" onclick="index()"><img src="images/menu-rounded.png" /></button>
          </nav>
        </div >
      </header >
    </>
  )
}

export default Navbar
