import React, { useEffect } from "react";
import "./index.scss";
import SiteNavigation from "../../../components/navigation";

const ReabilitasiyaAvadanliqlari = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="reabilitasiyaAvadanliqlariPage">
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xidmətlər",
            subcategory: "Reabilitasiya Avadanlıqları",
          }}
        />

        <h3>Reabilitasiya Vasitələri İlə Təminat</h3>
        <div className="text">
          <p>
            Əlilliyi olan şəxslər “Əlilliyi olan şəxslərə dövlət büdcəsi
            hesabına verilən reabilitasiya vasitələrinin növlərinin Siyahısı”nın
            və “Əlilliyi olan şəxslərin reabilitasiya vasitələri ilə təmin
            edilməsi Şərtləri və Qaydası” nın təsdiq edilməsi barədə Azərbaycan
            Respublikası Nazirlər Kabinetinin Qərarına əsasən protez-ortopedik
            məmulatlar və digər reabilitasiya vasitələri ilə təmin edilirlər.
          </p>
          <p>
            Azərbaycan Respublikasında əlilliyi olan şəxslərin reabiltasiya
            vasitələri ilə təmin edilmə, Azərbaycan Respublikasının Əmək və
            Əhalinin Sosial Müdafiəsi Nazirliyi yanında Dövlət Tibbi-Sosial
            Ekspertiza və Reabilitasiya Agentliyinin tibbi sosial ekspert
            komissiyalarının qərarı əsasında Fərdi Reabilitasiya Proqramında
            müəyyənləşdirməklə (minik avtomobili istisna olmaqla) reabilitasiya
            vasitələri Agentliyin tabeliyindəki Protez Ortopedik İstehsalat və
            Reabilitasiya Mərkəzi tərəfindən səyyar, ambulator və stasionar
            formada həyata keçirilir.
          </p>
          <p>
            Reabilitasiya məmulatlarına ehtiyacı olan əlilliyi olan şəxslər
            Protez-Ortopedik İstehsalat və Reabilitasiya Mərkəzi tərəfindən
            qeydiyyata alınması üçün aşağıda qeyd olunan sənədləri təqdim edir.
          </p>

          <h4>
            Reabilitasiya vasitələri (protez-ortez, ortopedik ayaqqabı və diğər
            reabilitasiya vasitələri)
          </h4>
          <ul>
            <li>Müvafiq səhiyyə müəssəsi tərəfindən epikriz</li>
            <li>Tibbi-Sosial Ekspertiza müayinəsindən çıxarış</li>
            <li>Şəxsiyyəti təsdiq edən sənədin əsli və surəti</li>
          </ul>

          <h4>Eşitmə aparatı</h4>
          <ul>
            <li>Müvafiq Səhiyyə müəssəsi tərəfindən epikriz</li>
            <li>Tibbi-Sosial Ekspertiza müayinəsindən çıxarış</li>
            <li>Şəxsiyyəti təsdiq edən sənədin əsli və surəti</li>
            <li>Həkim surdoloqun tibbi rəyi</li>
          </ul>

          <h4>Təkərli oturacaq</h4>
          <ul>
            <li>Tibbi-Sosial Ekspertiza müayinəsindən çıxarış</li>
            <li>Şəxsiyyəti təsdiq edən sənədin əsli və surəti</li>
            <li>Şəxsiyyəti təsdiq edən sənədin əsli və surəti</li>
            <li>
              Fərdi reabilitasiya proqramında təkərli oturacaq təminatına
              göstəriş (Reabilitasiya vasitələri ilə təmin edilmə qaydası
              müəyyən olunmuş tibbi göstərişlər olduğu halda, Agentliyin
              tibbi-sosial ekspert komissiyalarının qərarı əsasında Fərdi
              Reabilitasiya Proqramında müəyyənləşdirilməklə, reabilitasiya
              vasitələrini Agentliyin tabeliyindəki Protez-Ortopedik Bərpa
              Mərkəzi tərəfindən səyyar, ambulator və stasionar formada
              “Əlilliyi olan şəxslərin hüququları haqqında” Azərbaycan
              Respublikasının Qanununa uyğun olaraq həyata keçirilir)
            </li>
          </ul>

          <div className="melumat">
            <h4>Məlumat</h4>
            <a href="tel:+994123768011">+994 12 376 80 11</a>
          </div>
          <div className="melumat">
            <h4>Protez-Ortez və hazır reabilitasiya vasitələri </h4>
            <a href="tel:+994774899004">+994 77 489 90 04</a>
          </div>
          <div className="melumat">
            <h4>Təkərli oturacaq </h4>
            <a href="tel:+994774899005">+994 77 489 90 05</a>
          </div>
          <div className="melumat">
            <h4>Gəncə filialı </h4>
            <a href="tel: +994774890014">+994 77 489 00 14</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReabilitasiyaAvadanliqlari;
