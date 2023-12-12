import { List } from "antd";
import React, { useEffect } from "react";
import SiteNavigation from "../../../components/navigation";
import { Helmet } from "react-helmet";

const QaynarXettler = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412109" style={{ minWidth: "150px" }}>
        (012) 109
      </a>
      <p style={{ fontWeight: "700" }}>Ümumi Məlumat Xidməti</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412108" style={{ minWidth: "150px" }}>
        (012) 108
      </a>
      <p style={{ fontWeight: "700" }}>Asan Xidmət</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412103" style={{ minWidth: "150px" }}>
        (012) 103
      </a>
      <p style={{ fontWeight: "700" }}>Təcili Tibbi Yardım</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <a href="tel:+99412101" style={{ minWidth: "150px" }}>
        (012) 101
      </a>
      <p style={{ fontWeight: "700" }}>Dövlət Yanğından Mühafizə Xidməti</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <a href="tel:+99412102" style={{ minWidth: "150px" }}>
        (012) 102
      </a>
      <p style={{ fontWeight: "700" }}>Daxili İşlər Nazirliyi</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412916" style={{ minWidth: "150px" }}>
        (012) 916
      </a>
      <p style={{ fontWeight: "700" }}>
        Azərbaycan Respublikası İnsan Hüquqları Üzrə Müvəkkili (OMBUDSMAN)
      </p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412142" style={{ minWidth: "150px" }}>
        (012) 142
      </a>
      <p style={{ fontWeight: "700" }}>
        Əmək və Əhalinin Sosial müdafiəsi Nazirliyi
      </p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412142101" style={{ minWidth: "150px" }}>
        (012) 142 101
      </a>
      <p style={{ fontWeight: "700" }}>
        Əmək Qanunvericiliyi ilə Əlaqədar Sorğuların Cavablandılması üçün
      </p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412142102" style={{ minWidth: "150px" }}>
        (012) 142 102
      </a>
      <p style={{ fontWeight: "700" }}>
        Ünvanlı Dövlət Sosial Yardımı və Sosial Müavinətlərlə Əlaqədar
        Sorğuların Cavablandılması üçün
      </p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <a href="tel:+99412142103" style={{ minWidth: "150px" }}>
        (012) 142 103
      </a>
      <p style={{ fontWeight: "700" }}>
        Əlillik Dərəcələrinin Verilməsi və Reabilitasiyası ilə Əlaqədar
        Sorğuların Cavablandırılması üçün
      </p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412142104" style={{ minWidth: "150px" }}>
        (012) 142 104
      </a>
      <p style={{ fontWeight: "700" }}>
        İş Yerləri, Məşğulluğun Təminatı, Əmək Miqrasiyası ilə Əlaqədar
        Sorğuların Cavablandılması üçün
      </p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <a href="tel:+99412109" style={{ minWidth: "150px" }}>
        (012) 109
      </a>
      <p style={{ fontWeight: "700" }}>Dövlət Sosial Müdafiə Fondu</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412112" style={{ minWidth: "150px" }}>
        (012) 112
      </a>
      <p style={{ fontWeight: "700" }}>Fövqəladə Hallar Nazirliyi</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+99412195" style={{ minWidth: "150px" }}>
        (012) 195
      </a>
      <p style={{ fontWeight: "700" }}>Vergilər Nazirliyi</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+994125980898" style={{ minWidth: "150px" }}>
        (012) 598 08 98
      </a>
      <p style={{ fontWeight: "700" }}>
        Rabitə və İnformasiya Texnologiyaları Nazirliyi
      </p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+994125651264" style={{ minWidth: "150px" }}>
        (012) 565 12 64
      </a>
      <p style={{ fontWeight: "700" }}>Səhiyyə Nazirliyi</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+994124963482" style={{ minWidth: "150px" }}>
        (012) 496 34 82
      </a>
      <p style={{ fontWeight: "700" }}>Təhsil Nazirliyi</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+994124301155" style={{ minWidth: "150px" }}>
        (012) 430 11 55
      </a>
      <p style={{ fontWeight: "700" }}>Ədliyyə Nazirliyi</p>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <a href="tel:+994124313126" style={{ minWidth: "150px" }}>
        (012) 431 31 26
      </a>
      <p style={{ fontWeight: "700" }}>
        Qaçqınların və Məcburi Köçkünlərin İşləri üzrə Dövlət Komitəsi
      </p>
    </div>,
  ];

  return (
    <div id="qaynarXettler" style={{ padding: "0 10px 40px 10px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UDPO | Qaynar Xəttlər</title>
      </Helmet>

      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xidmətlər",
            subcategory: "Qaynar Xəttlər",
          }}
        />
        <List
          size="small"
          header={
            <div style={{ textAlign: "center", fontWeight: "700" }}>
              Qaynar Xəttlər
            </div>
          }
          footer={<div></div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
};

export default QaynarXettler;
