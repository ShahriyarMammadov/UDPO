import React from "react";
import "./index.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer_top">
          <nav className="container">
            <div className="logo_menu">
              <Link to={"/"}>
                <img src={logo} alt="UDPO" />
              </Link>

              <div className="menu">
                <ul className="menu_row">
                  <li>
                    <Link to="/haqqimizda/bizkimik">Haqqımızda</Link>
                  </li>
                  <li>
                    <Link to="/elillik/umumimelumat">Əlillik</Link>
                  </li>
                  <li>
                    <Link to="/xeberler">Xəbərlər</Link>
                  </li>
                </ul>
                <ul className="menu_row">
                  <li>
                    <Link to="/haqqimizda/members">Tərəfdaşlar</Link>
                  </li>
                  <li>
                    <Link to="/xidmetler">Xidmətlər</Link>
                  </li>
                  <li>
                    <Link to="/layihe/layiheler">Layihələr</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact_social">
              <div className="contact">
                <p>Ünvan: AZ1138, Bakı şəhəri, M.C. Məmmədzadə 166D</p>
                <a href="tel:+994124349329">Telefon: (+994 12) 434 93 29</a>
                <br />
                <a href="tel:+994503710302">Mobil: (+994 50) 371 03 02</a>
                <p>Tel/Faks: (+994 12) 434 93 29</p>
                <a href="mailto:davudrehimli@gmail.com">
                  Email: union-dpo@baku.az; info@udpo.az; davudrehimli@gmail.com
                </a>
              </div>

              <div className="social_bar">
                <ul>
                  <a href="https://www.facebook.com/udpo.az" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.facebook.com/udpo.az" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/udpo.az" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC8rOR8zkmYtnFlcBR3ZQCMA/videos"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="footer_bottom">
          <p> © 2023 Bütün hüquqlar qorunur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
