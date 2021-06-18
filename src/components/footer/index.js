import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterestSquare,
  FaSearchLocation,
} from "react-icons/fa";
import { IoIosSend, IoIosMail, IoIosPhonePortrait } from "react-icons/io";
import logo from "../../images/logo.svg";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-first-line">
        <div className="contact-number">
          <IoIosPhonePortrait />
          <div className="phome">
            <h3 className="Call-us">Call us</h3>
            <p className="adress">+31 63 9999 9999</p>
          </div>
        </div>
        <div className="contact-location">
          <FaSearchLocation />
          <div className="location">
            <h3 className="find-us">Find us</h3>
            <p className="adress">
              Ankaradreef 20, 3564VK Utrecht. The Netherlands
            </p>
          </div>
        </div>

        <div className="contact-mail">
          <IoIosMail />
          <div className="mail">
            <h3 className="mail-us">Mail us</h3>
            <p className="adress">info@cultural-universal.com</p>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="left-content">
          <div className="footer-logo">
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
          <div className="footer-text">
            <p>
              {" "}
              Harum excepturi reiciendis adipisci hic incidunt sed voluptate
              dolore necessitatibus optio,{" "}
            </p>
          </div>
          <div className="footer-social-icon">
            <span>Follow us</span>
            <FaFacebookSquare />
            <FaInstagram />
            <FaPinterestSquare />
          </div>
        </div>

        <div className="mid-content">
          <div className="footer-widget-heading">
            <h2>Our Links</h2>
          </div>
          <ul>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>

            <li>
              <Link to="/comtact">Contact us</Link>
            </li>
            <li>
              <Link to="/user/signup">User Sign Up</Link>
            </li>
          </ul>
        </div>

        <div className="right-content">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h2>Subscribe</h2>
            </div>
            <div className="footer-text">
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <IoIosSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="cr">
        <div className="copyright">
          <p>
            Copyright &copy; 2021{" "}
            <a
              href="
Rakan Douli | Portfoliohttp://rdouli.online
">
              RAKAN DOULI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
