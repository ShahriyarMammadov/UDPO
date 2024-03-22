import React from "react";
import "./index.scss";
import { Table } from "antd";

const IctimaiSuralarPage = () => {
  const columns = [
    {
      dataIndex: "Ad",
    },
    {
      dataIndex: "Link",
    },
  ];

  const data = [
    {
      key: "1",
      Ad: "Azərbaycan Respublikasının Dövlət Miqrasiya Xidməti",
      Link: (
        <>
          <a href="https://migration.gov.az" target="_blank">
            https://migration.gov.az
          </a>
        </>
      ),
    },
    {
      key: "2",
      Ad: "Ailə, Qadın və Uşaq Problemləri üzrə Dövlət Komitəsi yanında İctimai Şura",
      Link: (
        <>
          <a href="http://scfwca.gov.az/page/ictimai-shura" target="_blank">
            http://scfwca.gov.az/page/ictimai-shura
          </a>
        </>
      ),
    },
    {
      key: "3",
      Ad: "Binəqədi Rayon İcra Hakimiyyəti yanında İctimai Şura",
      Link: (
        <>
          <a href="http://binegedi-ih.gov.az/page/144.html " target="_blank">
            http://binegedi-ih.gov.az/page/144.html
          </a>
        </>
      ),
    },
    {
      key: "4",
      Ad: "Gənclər və İdman Nazirliyinin yanında Gənclərlə iş üzrə İctimai Şura",
      Link: (
        <>
          <a
            href="http://www.mys.gov.az/gnclr-siyasti/ictimai-sura"
            target="_blank"
          >
            http://www.mys.gov.az/gnclr-siyasti/ictimai-sura
          </a>
        </>
      ),
    },
    {
      key: "5",
      Ad: "Ədliyyə Nazirliyi yanında İctimai Komitə",
      Link: (
        <>
          <a href="http://justice.gov.az/?view=cat&id=64 " target="_blank">
            http://justice.gov.az/?view=cat&id=64
          </a>
        </>
      ),
    },
    {
      key: "6",
      Ad: "Əmək və Əhalinin Sosial Müdafiəsi Nazirliyi yanında İctimai Şura",
      Link: (
        <>
          <a href="http://www.mlspp.gov.az/az/pages/174" target="_blank">
            http://www.mlspp.gov.az/az/pages/174
          </a>
        </>
      ),
    },
  ];

  return (
    <div id="ictimaiSuralar">
      <div className="container">
        <h1>İctimai Şuralar</h1>

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

export default IctimaiSuralarPage;
