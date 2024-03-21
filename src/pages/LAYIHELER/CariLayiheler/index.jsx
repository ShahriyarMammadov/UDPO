import React from "react";
import "./index.scss";
import { Collapse } from "antd";

const CariLayihelerPage = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: "1",
      label:
        "Azərbaycanda İnnovasiyalara yönələn və davamli vətəndaş cəmiyyətinin İnkişaf edilməsi",
      children: (
        <p>
          Fövqəladə hallarda riskinin azaldılması ilə bağlı əlilliyə dair milli
          siyasətlər üçün tövsiyələr üzrə konseptual sənədin hazırlanması.
          Donor: Avropa İttifaqı, BMT-nin İnkişaf Proqramı <br />
          Ərazi: Azərbaycan <br />
          Müddət: 2022-2023
        </p>
      ),
    },
    {
      key: "2",
      label:
        "Alternativ hesabatların hazırlanmasında əlilliyi olan şəxslərin yerli təşkilatlarının (ƏoŞT) gücləndirilməsi. BMT-nin İnsan Hüquqları üzrə Ali Komisarlığı (OHCHR). 2022 - 2023 )",
      children: (
        <p>
          Alternativ hesabatların hazırlanmasında əlilliyi olan şəxslərin yerli
          təşkilatlarının (ƏoŞT) gücləndirilməsi. BMT-nin İnsan Hüquqları üzrə
          Ali Komisarlığı (OHCHR). <br />
          2022 - 2023
        </p>
      ),
    },
    {
      key: "3",
      label: "Gələcəyin assosiasiyaları. USAİD. 2022 - 2025",
      children: (
        <p>
          Gələcəyin assosiasiyaları. USAİD. <br />
          2022 - 2025
        </p>
      ),
    },
  ];

  return (
    <div id="cariLayiheler">
      <div className="container">
        <h1>Cari Layihələr</h1>

        <Collapse accordion items={items} />
      </div>
    </div>
  );
};

export default CariLayihelerPage;
