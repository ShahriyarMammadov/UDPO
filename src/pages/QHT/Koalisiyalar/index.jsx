import React from "react";
import "./index.scss";
import { Table } from "antd";

const KoalisiyalarPage = () => {
  const columns = [
    {
      dataIndex: "Ad",
      // responsive: ["lg"],
    },
    {
      dataIndex: "Link",
      // responsive: ["lg"],
    },
  ];

  const data = [
    {
      key: "1",
      Ad: "Açıq Hökumətin Təşviqinə Dair Hökumət -Vətəndaş Cəmiyyəti Dialoqu Platforması",
      Link: (
        <>
          <a href="http://ogp.org.az" target="_blank">
            http://ogp.org.az
          </a>
        </>
      ),
    },
    {
      key: "2",
      Ad: "Azərbaycan Şəffaflıq Tərəfdaşlığı QHT-lərin platforması",
      Link: "",
    },
    {
      key: "3",
      Ad: "“MƏDƏN SƏNAYESİNDƏ ŞƏFFAFLIĞIN ARTIRILMASI” Koalisiyası",
      Link: (
        <>
          <a href="http://eiti-ngo-azerbaijan.org/az/" target="_blank">
            http://eiti-ngo-azerbaijan.org/az/
          </a>
        </>
      ),
    },
    {
      key: "4",
      Ad: "Uşaq Hüquqları üzrə QHT Alyansı",
      Link: (
        <>
          <a href="http://ngoalliance.net/ " target="_blank">
            http://ngoalliance.net/
          </a>
        </>
      ),
    },
    {
      key: "5",
      Ad: "Azərbaycan Respublikası Gənclər Təşkilatları Milli Şurası (ARGTMŞ)",
      Link: (
        <>
          <a href="http://www.nayora.az" target="_blank">
            http://www.nayora.az
          </a>
        </>
      ),
    },
    {
      key: "6",
      Ad: "Azərbaycan Milli QHT Forumu",
      Link: (
        <>
          <a href="http://azngoforum.org" target="_blank">
            http://azngoforum.org
          </a>
        </>
      ),
    },
    {
      key: "7",
      Ad: "Azərbaycan Respublikası Əlil Təşkilatları İttifaqı (ƏTİ)",
      Link: (
        <>
          <a href="https://www.udpo.az" target="_blank">
            https://www.udpo.az
          </a>
        </>
      ),
    },
  ];

  return (
    <div id="koalisiyalarPage">
      <div className="container">
        <h1>Koalisiyalar</h1>

        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default KoalisiyalarPage;
