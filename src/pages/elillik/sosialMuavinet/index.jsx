import React from "react";
import SiteNavigation from "../../../components/navigation";

const SosialMuavinet = () => {
  return (
    <div className="container" style={{ padding: "0 10px 20px 10px" }}>
      <SiteNavigation
        navigationData={{
          category: "Əlillik",
          subcategory: "Sosial Müavinət",
        }}
      />
      <h1>Sosial Muavinet</h1>
    </div>
  );
};

export default SosialMuavinet;
