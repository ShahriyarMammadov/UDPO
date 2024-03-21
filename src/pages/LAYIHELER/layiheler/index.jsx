import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const LayihelerPage = () => {
  return (
    <div id="allLayiheler">
      <div className="container">
        <h1>Layihələr</h1>
        <div className="projectsCards">
          <Link to="/layihe/carilayiheler" className="card">
            <i class="fa-solid fa-bolt"></i>
            <p>Cari</p>
          </Link>
          <Link to="/layihe/bitmislayiheler" className="card">
            <i class="fa-solid fa-calendar-check"></i>
            <p>Bitmiş</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LayihelerPage;
