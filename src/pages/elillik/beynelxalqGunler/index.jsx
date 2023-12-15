import React from "react";
import SiteNavigation from "../../../components/navigation";

const BeynelxalqGunler = () => {
  return (
    <div className="container" style={{ padding: "0 10px 20px 10px" }}>
      <SiteNavigation
        navigationData={{
          category: "Əlillik",
          subcategory: "Beynəlxalq Günlər",
        }}
      />
      <h1>Beynəlxalq Günlər</h1>
    </div>
  );
};

export default BeynelxalqGunler;
