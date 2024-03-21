import React from "react";
import "./index.scss";
import { Collapse } from "antd";

const BitmisLayihelerPage = () => {
  const items = [
    {
      key: "1",
      label:
        "Əlilliyi olan şəxs və Dağlıq Qarabağ müharibəsinin veteranlarının yaşayış rifahının yaxşılaşdırılması. Birləşmiş Millətlər Təşkilatının İnkişaf Proqramı, BMT-nin Əhali Fondu və Əmək və Əhalinin Sosial Müdafiəsi Nazirliyi.",
      children: (
        <p>
          Əlilliyi olan şəxs və Dağlıq Qarabağ müharibəsinin veteranlarının
          yaşayış rifahının yaxşılaşdırılması. Birləşmiş Millətlər Təşkilatının
          İnkişaf Proqramı, BMT-nin Əhali Fondu və Əmək və Əhalinin Sosial
          Müdafiəsi Nazirliyi. <br />
          2022
        </p>
      ),
    },
    {
      key: "2",
      label:
        "Əlilliyi olan şəxslər üçün müyəssər formatda video təlim və consultasiyalar. Avropa İttifaqı Şərq Tərəfdaşlığı Vətəndaş Forumu ",
      children: (
        <p>
          Əlilliyi olan şəxslər üçün müyəssər formatda video təlim və
          consultasiyalar. Avropa İttifaqı Şərq Tərəfdaşlığı Vətəndaş Forumu
          <br />
          (01.09.2020 – 30.04.2021)
        </p>
      ),
    },
    {
      key: "3",
      label: "Hamı üçün layiqli məşğulluq. Finlandiya Xarici İşlər Nazirliyi",
      children: (
        <p>
          Hamı üçün layiqli məşğulluq. Finlandiya Xarici İşlər Nazirliyi <br />
          2020-2021
        </p>
      ),
    },
    {
      key: "4",
      label:
        "“İnkluziv turizmə dəstək”. Azərbaycan Respublikasının Prezidenti yanında QHT-lərə Dövlət Dəstəyi Şurası",
      children: (
        <p>
          “İnkluziv turizmə dəstək”. Azərbaycan Respublikasının Prezidenti
          yanında QHT-lərə Dövlət Dəstəyi Şurası <br />
          2019
        </p>
      ),
    },
    {
      key: "5",
      label:
        "Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin sifarişi ilə sosial xidmətlər sahəsində icra edilən layihələrin müstəqil monitorinqi və qiymətləndirilməsi",
      children: (
        <p>
          “Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin sifarişi ilə sosial
          xidmətlər sahəsində icra edilən layihələrin müstəqil monitorinqi və
          qiymətləndirilməsi” <br />
          2019
        </p>
      ),
    },
  ];

  return (
    <div id="bitmisLayiheler">
      <div className="container">
        <h1>Bitmiş Layihələr</h1>

        <Collapse accordion items={items} />
      </div>
    </div>
  );
};

export default BitmisLayihelerPage;
