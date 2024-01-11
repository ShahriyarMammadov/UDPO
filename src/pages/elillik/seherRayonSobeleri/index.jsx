import React from "react";
import SiteNavigation from "../../../components/navigation";

const SeherVeRayonSobeleri = () => {
  return (
    <div className="container" style={{ padding: "0 10px 20px 10px" }}>
      <SiteNavigation
        navigationData={{
          category: "Əlillik",
          subcategory: "DSMF-ın Şəhər və Rayon Şöbələri",
        }}
      />
      <h1>DSMF-ın Şəhər və Rayon Şöbələri</h1>
    </div>
  );
};

export default SeherVeRayonSobeleri;
