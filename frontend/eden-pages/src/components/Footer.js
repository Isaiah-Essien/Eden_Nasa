import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="cent-cont">
        <div>
          <h1>Get in touch</h1>
          <p>
            Location, City, Country<br />
            info@example.com<br />
            +012 345 6789
          </p>
        </div>
        <div>
          <h1>Quick Links</h1>
          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">My Services</a></li>
            <li><a href="#">Meet the team</a></li>
            <li><a href="#">Latest Blogs</a></li>
          </ul>
        </div>
        <div>
          <h1>Popular Links</h1>
          <ul className="list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">My Services</a></li>
            <li><a href="#">Meet the team</a></li>
            <li><a href="#">Latest Blogs</a></li>
          </ul>
        </div>
        <div className="Newsletter">
          <h1>NEWSLETTER</h1>
          <h2>Subscribe to our Newsletter</h2>
          <p>Amet diam dolor rebum lorem sit stet sea justo kasd</p>
          <div className="input-space">
            <form>
            <div className="input-group">
                <input type="text" id="name" required placeholder="Your E-mail" />
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

