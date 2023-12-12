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
              <Link>
                <img src={logo} alt="UDPO" />
              </Link>

              <div className="menu">
                <ul className="menu_row">
                  <li>
                    <Link to="/about"> Haqqımızda</Link>
                  </li>
                  <li>
                    <Link to="/disability"> Əlillik</Link>
                  </li>
                  <li>
                    <Link to="/news"> Xəbərlər</Link>
                  </li>
                </ul>
                <ul className="menu_row">
                  <li>
                    <Link to="/partners"> Tərəfdaşlar</Link>
                  </li>
                  <li>
                    <Link to="/contests"> Müsabiqələr</Link>
                  </li>
                  <li>
                    <Link to="/competitions"> Müsahibələr</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact_social">
              <div className="contact">
                <p>
                  Ünvan: AZ1138, Bakı şəhəri, Yasamal rayonu, <br /> Əhməd Cavad
                  küçəsi 7a
                </p>
                <p>
                  Telefon: (+994 12) 434 48 36; <br /> Mobil: (+994 50) 371 03
                  02
                </p>
                <p>Tel/Faks: (+994 12) 434 93 29</p>
                <p>Email: union-dpo@baku.az ; davudrehimli@gmail.com</p>
              </div>

              <div className="social_bar">
                <ul>
                  <li>
                    <i class="fa-brands fa-facebook-f"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-youtube"></i>
                  </li>
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
