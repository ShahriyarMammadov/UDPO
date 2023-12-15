import React from "react";
import SiteNavigation from "../../../components/navigation";

const UmumiMelumat = () => {
  return (
    <div className="container" style={{padding: "0 10px 20px 10px"}}>
      <SiteNavigation
        navigationData={{
          category: "Əlillik",
          subcategory: "Ümumi Məlumat",
        }}
      />
      <h1>Statistika</h1>
    </div>
  );
};

export default UmumiMelumat;
