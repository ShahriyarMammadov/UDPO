import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import akc from "../../assets/images/members/akc.jpg";
import əbəu from "../../assets/images/members/əbəu.jpg";
import əqc from "../../assets/images/members/əqc.jpg";
import adl from "../../assets/images/members/adl.jpg";
import agəc from "../../assets/images/members/agəc.jpg";
import hx from "../../assets/images/members/hx.jpg";
import aəc from "../../assets/images/members/aəc.jpg";

const Members = () => {
  return (
    <div id="members">
      <div className="container">
        <h1>  ÜZV TƏŞKİLATLAR</h1>
        <div>
          <Link>
            <img src={akc} alt="akc" className="membersLogo" />
            <p>Azərbaycan Karlar Cəmiyyəti</p>
          </Link>
        </div>
        <div>
          <Link>
            <img src={əbəu} alt="akc" className="membersLogo" />
            <p>Əlillərin Beynəlxalq Əməkdaşlığı Uğurunda</p>
          </Link>
        </div>
        <div>
          <Link>
            <img src={əqc} alt="akc" className="membersLogo" />
            <p> "Əlil Qadınlar" Cəmiyyəti</p>
          </Link>
        </div>
        <div>
          <Link>
            <img src={adl} alt="akc" className="membersLogo" />
            <p> Azərbaycan Diabet Liqası </p>
          </Link>
        </div>
        <div>
          <Link>
            <img src={agəc} alt="akc" className="membersLogo" />
            <p> Azərbaycan Gözdən Əlillər Cəmiyyəti İctimai Birliyi </p>
          </Link>
        </div>
        <div>
          <Link>
            <img src={hx} alt="akc" className="membersLogo" />
            <p> Hemofiliyalı Xəstələrin Respublika Assosiasiyası </p>
          </Link>
        </div>
        <div>
          <Link>
            <img src={aəc} alt="akc" className="membersLogo" />
            <p> Azərbaycan Əlillər Cəmiyyəti</p>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Members;
