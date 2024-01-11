import React from "react";
import SiteNavigation from "../../../components/navigation";

const ElilliyinTeyinOlunmasi = () => {
  return (
    <div className="container" style={{ padding: "0 10px 20px 10px" }}>
      <SiteNavigation
        navigationData={{
          category: "Əlillik",
          subcategory: "Əlilliyin Təyin Olunması",
        }}
      />
      <h1>Əlilliyin Təyin Olunması</h1>
    </div>
  );
};

export default ElilliyinTeyinOlunmasi;
