import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Helmet } from "react-helmet";
import { xidmetlerData } from "../../data";
import SiteNavigation from "../../components/navigation";

const XidmetlerPage = () => {
  return (
    <div id="xidmetlerPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Xidmətlər</title>
      </Helmet>

      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xidmətlər",
            subcategory: "",
          }}
        />

        <div className="servicesCards">
          {xidmetlerData?.map((e, i) => {
            return (
              <Link to={`${e?.url}`} className="card">
                {e?.icon}
                <div className="serviceName">{e?.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default XidmetlerPage;
