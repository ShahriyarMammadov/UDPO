import React from "react";
import SiteNavigation from "../../../components/navigation";
import "./index.scss";

const UmumiMelumat = () => {
  return (
    <div id="umumiMelumat">
      <div className="container" style={{ padding: "0 10px 20px 10px" }}>
        <SiteNavigation
          navigationData={{
            category: "Əlillik",
            subcategory: "Ümumi Məlumat",
          }}
        />
        <h1>Statistika</h1>

        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          style={{ width: "100" }}
          className="statisticsTable"
        >
          <tbody>
            <tr>
              <td>
                <strong>Mənbə: Dövlət Statistika Komitəsi</strong>
              </td>
              <td style={{ textAlign: "center" }}>
                <strong>2023</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Əhalinin ümumi sayı</strong>
              </td>
              <td>10 127,1 100 nəfər</td>
            </tr>
            <tr>
              <td>
                <strong>Əlilliyi olan şəxslərin ümumi sayı</strong>
              </td>
              <td>
                488 774{" "}
                <span style={{ textAlign: "right" }}>
                  (ümumi əhalinin 4,8%)
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Əlilliyi olan uşaqlar</strong>
              </td>
              <td>46 654 (ümumi əoş-ların 9,5%)</td>
            </tr>
            <tr>
              <td>
                <strong>Sosial müavinat alan əlilliyi olan şəxslər</strong>
              </td>
              <td>162 813 nəfər</td>
            </tr>
            <tr>
              <td>
                18 yaşadək əlilliyi olan uşaqların 1 nəfərinə düşən aylıq
                müavinat
              </td>
              <td>196,37 manat</td>
            </tr>
            <tr>
              <td>
                <strong>Orta aylıq sosial müavinat</strong>
              </td>
              <td>162.36 manat</td>
            </tr>
            <tr>
              <td>
                <strong>Əlilliyi olan pensiyaçılar</strong>
              </td>
              <td>273 153 nəfər</td>
            </tr>
            <tr>
              <td>
                <strong>Onlardan:</strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <strong>Qadınlar</strong>
              </td>
              <td>132 983 nəfər</td>
            </tr>
            <tr>
              <td>
                <strong>Kişilər</strong>
              </td>
              <td>140 170 nəfər</td>
            </tr>
            <tr>
              <td>
                <strong>Işləyənlər</strong>
              </td>
              <td>43 789 nəfər</td>
            </tr>
            <tr>
              <td>
                <strong>Işləməyənlər</strong>
              </td>
              <td>229 364 nəfər</td>
            </tr>
            <tr>
              <td>
                <span style={{ fontSize: "14px" }}>
                  <strong>
                    Azərbaycan Respublikası Prezidentinin əlilliyi olan şəxslər
                    üçün təqaüdləri:
                  </strong>
                </span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                Ümumi səbəblərdən orqanizmin funksiyalarının 81-100 faiz
                pozulmasına görə əlilliyi müəyyən edilmiş şəxslərə (gözdən
                əlilliyi olan şəxslər istisna olmaqla)
              </td>
              <td>130.00 manat</td>
            </tr>
            <tr>
              <td>
                Ümumi səbəblərdən orqanizmin funksiyalarının 81-100 faiz
                pozulmasına görə gözdən əlilliyi müəyyən edilmiş şəxslərə
              </td>
              <td>210.00 manat</td>
            </tr>
            <tr>
              <td>
                Orqanizmin funksiyalarının 81-100 faiz pozulmasına görə əlilliyi
                müəyyən edilmiş şəxslərə qulluq edən şəxslərə;
              </td>
              <td>80.00 manat</td>
            </tr>
            <tr>
              <td>
                18 yaşınadək əlilliyi müəyyən edilmiş şəxslərə qulluq edən
                şəxslərə
              </td>
              <td>80.00 manat</td>
            </tr>
            <tr>
              <td>
                1990-cı ilin 20 Yanvar hadisələri ilə əlaqədar əlilliyi olan
                şəxslərə
              </td>
              <td>335.69 manat</td>
            </tr>
            <tr>
              <td>
                <strong>
                  Müharibə ilə əlaqədar əlilliyi olan şəxslərə, o cümlədən:
                </strong>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                Azərbaycan Respublikasının ərazi bütövlüyünün, müstəqilliyinin
                və konstitusiya quruluşunun müdafiəsi ilə əlaqədar əlilliyi olan
                şəxslərə
              </td>
              <td>337.63 manat</td>
            </tr>
            <tr>
              <td>
                Hərbi xidmət vəzifələrini (xidməti vəzifələri) yerinə yetirməklə
                əlaqədar əlilliyi olan şəxslərə
              </td>
              <td>339.90 manat</td>
            </tr>
            <tr>
              <td>
                &nbsp;Böyük Vətən Müharibəsi ilə əlaqədar əlilliyi olan şəxslərə
              </td>
              <td>X</td>
            </tr>
            <tr>
              <td>
                Çernobıl AES-də hərbi xidmət vəzifələrini (xidməti vəzifələri)
                yerinə yetirməklə əlaqədar əlilliyi olan şəxslərə;
              </td>
              <td>&nbsp;350.19 manat</td>
            </tr>
            <tr>
              <td>
                <strong>Xüsusi qayğıya ehtiyacı olanlar</strong>
              </td>
              <td>97 000 nəfər</td>
            </tr>
            <tr>
              <td colspan="2">
                <strong>Onlardan:</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>- yetginlik yaşına çatmayanlar</strong>
              </td>
              <td>47 000 nəfər</td>
            </tr>
            <tr>
              <td>
                <strong>- yetginlik yaşına çatanlar</strong>
              </td>
              <td>&nbsp;50 000 nəfər</td>
            </tr>
            <tr>
              <td>
                <strong>Orta aylıq pensiya</strong>
              </td>
              <td>372,1 manat</td>
            </tr>
            <tr>
              <td>
                <strong>Minimum pensiya</strong>
              </td>
              <td>280 manat</td>
            </tr>
            <tr>
              <td>Orta aylıq əmək haqqı</td>
              <td>923,9 manat</td>
            </tr>
            <tr>
              <td>Minimum əmək haqqı</td>
              <td>345 manat</td>
            </tr>
            <tr>
              <td>
                <strong>
                  İnkluziv təhsilə cəlb olunmuş əlilliyi olan uşaqlar
                </strong>
              </td>
              <td>120 nəfər ümumi əoş-ların 0.2%</td>
            </tr>
            <tr>
              <td>
                <strong>Ali məktəblərdə </strong>
                <strong>təhsil</strong>
                <strong>&nbsp;alan</strong>
                <strong>&nbsp;əlilliyi&nbsp;olan</strong>
                <strong>&nbsp;şəxslər</strong>
              </td>
              <td>Statistika aparılmır</td>
            </tr>
          </tbody>
        </table>

        <h2>Əlilliyi olan şəxslər barədə ümumi məlumat</h2>

        <div className="umumiMelumatContent">
          <p>
            Müxtəlif maneələrlə qarşılaşdığı zaman digər şəxslərlə bərabər
            səviyyədə cəmiyyət həyatında tam və səmərəli iştirakına mane olan
            sabit fiziki, psixi, əqli və ya hissiyyat pozuntuları olan şəxs
            əlilliyi olan şəxs hesab edilir.
          </p>

          <p>
            Azərbaycan Respublikasında əhaliyə göstərilən tibbi-sosial
            ekspertiza xidməti, əlilliyi və 18 yaşınadək əlilliyi müəyyən
            edilmiş şəxslərin əlilliyinin qiymətləndirilməsi, əlilliyi olan
            şəxslərin sosial müdafiə tədbirlərinə ehtiyacların müəyyən edilməsi
            tibbi-sosial ekspert komissiyaları (TSEK) tərəfindən həyata
            keçirilir.
          </p>

          <p>
            TSEK Azərbaycan Respublikasının Əmək və Əhalinin Sosial Müdafiəsi
            Nazirliyi yanında Dövlət Tibbi-Sosial Ekspertiza və Reabilitasiya
            Xidmətinin (bundan sonra - Xidmət), Naxçıvan Muxtar Respublikasında
            isə Naxçıvan Muxtar Respublikasının Əmək və Əhalinin Sosial
            Müdafiəsi Nazirliyinin tabeliyində fəaliyyət göstərir.
          </p>
        </div>

        <div>
          <h4>
            Şəxsin əlilliyi aşağıdakı səbəblərdən birinə əsasən müəyyən edilir:
          </h4>

          <p>
            1. ümumi səbəblərdən: <br />· ümumi xəstəlik, <br />· istehsalat
            zədəsi; <br />· peşə xəstəliyi, <br />· Çernobıl AES-də qəzanın
            ləğvi ilə əlaqədar, <br />· hərbi xidmət dövrü ilə əlaqədar, <br />·
            hərbi əməliyyatlar keçirilən zonada olmaqla əlaqədar, <br />· terror
            hadisəsi ilə əlaqədar
          </p>

          <p style={{ paddingTop: "10px" }}>
            2. xüsusi səbəblərdən: <br />· Azərbaycan Respublikasının ərazi
            bütövlüyünün, müstəqilliyinin və konstitusiya quruluşunun müdafiəsi
            ilə əlaqədar; <br />· 1990-cı ilin 20 Yanvar hadisələri ilə
            əlaqədar,
            <br /> · hərbi xidmət vəzifələrini (xidməti vəzifələri) yerinə
            yetirməklə əlaqədar, <br />· Çernobıl AES-də hərbi xidmət
            vəzifələrini (xidməti vəzifələri) yerinə yetirməklə əlaqədar.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UmumiMelumat;
