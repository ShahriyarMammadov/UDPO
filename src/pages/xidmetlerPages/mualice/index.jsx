import React from "react";
import "./index.scss";
import SiteNavigation from "../../../components/navigation";

const Mualice = () => {
  return (
    <div id="mualicePage">
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xidmətlər",
            subcategory: "Müalicə",
          }}
        />
        <div className="text">
          <h3>
            Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin Əlillərin Bərpa
            Mərkəzlərində müalicə almaq üçün aşağıdakı sənədlər təqdim olunur:
          </h3>
          <p>
            1. Şəxsiyyət vəsiqəsi;
            <br /> 2. Əlillik dərəcəsini təsdiq edən sənəd;
            <br /> 3. Tibbi-sosial ekspert komissiyasının və ya müalicə
            müəssisəsinin göndərişi;
            <br /> 4. Ünvan, əlaqə telefonu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mualice;
