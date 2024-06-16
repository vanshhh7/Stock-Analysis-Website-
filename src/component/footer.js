import React from 'react'
import './css/footer.css'
import twitterImg from './images/twitter icon.png'
import facebookImg from './images/facebook icon.png'
import youtubeImg from './images/youtube-icon.png'
import instagramImg from './images/instagram icon.png'

function Footer() {
  return (
    <>
      <footer>
        <div class="foot-news">
          <h3>Subscribe to our Newsletter</h3>
          <form action="">
            <input type="email" id="email" name="email" placeholder="Enter your Email" />
            <input type="submit" value="Subscribe" id="email-btn" />
          </form>
        </div>
        <div class="foot-main">
          <div class="foot-main-img">
            <img src={instagramImg} alt="" />
            <img src={facebookImg} alt="" />
            <img src={twitterImg} alt="" />
            <img src={youtubeImg} alt="" />
          </div>
          <p>Copyright © 2023 All rights reserved | made by Rajkamal Yadav</p>
          <p>Terms & Conditions/ Privacy Policy</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
