import React from "react";
import SiteNavigation from "../../../components/navigation";

const EmekPensiyalari = () => {
  return (
    <div className="container" style={{ padding: "0 10px 20px 10px" }}>
      <SiteNavigation
        navigationData={{
          category: "Əlillik",
          subcategory: "Əmək Pensiyaları",
        }}
      />
      <h1>Əmək Pensiyaları</h1>
    </div>
  );
};

export default EmekPensiyalari;
