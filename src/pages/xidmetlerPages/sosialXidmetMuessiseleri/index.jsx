import React from "react";
import "./index.scss";
import SiteNavigation from "../../../components/navigation";
import { Collapse } from "antd";

const SosialXidmetMuessiseleri = () => {
  const items = [
    {
      key: "1",
      label: "Gəncə Pensiyacılara Ərazi Sosial Xidmət Mərkəzi",
      children: (
        <p style={{ textAlign: "justify" }}>
          Gəncə Pensiyacılara Ərazi Sosial Xidmət Mərkəzi xüsusi qayğıya ehtiyac
          duyan ruhi-əsəb əlillərinin dövlət himayəsində yaşadığı bir
          müəssisədir. Burada əlillər daimi olaraq yaşayış şəraiti, həmçinin
          qida, geyim və tibbi xidmətlə təmin olunurlar.
          <br /> 110 yerlik internat evində hazırda 103 nəfər ruhi-əsəb əlili
          yaşayır.
          <br />
          <br />
          Ünvanı: Göygöl rayonu, Qırıxlı kəndi.
        </p>
      ),
    },
    {
      key: "2",
      label: "Göygöl 8 saylı ruhi-əsəb əlilləri internat evi",
      children: (
        <p style={{ textAlign: "justify" }}>
          Göygöl 8 saylı ruhi-əsəb əlilləri internat evi xüsusi qayğıya ehtiyac
          duyan ruhi-əsəb əlillərinin dövlət himayəsində yaşadığı bir
          müəssisədir. Burada əlillər daimi olaraq yaşayış şəraiti, həmçinin
          qida, geyim və tibbi xidmətlə təmin olunurlar.
          <br /> 135 yerlik internat evində hazırda 119 nəfər ruhi-əsəb əlili
          yaşayır.
          <br />
          <br />
          Ünvanı: Göygöl rayonu, Qırıxlı kəndi. 022 20 32408 , 022 20 324 07
        </p>
      ),
    },
    {
      key: "3",
      label: "Mərdəkan Müalicə Pansionatı",
      children: (
        <p style={{ textAlign: "justify" }}>
          Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin Mərdəkan Müalicə
          Pansionatı əlillərə və digər imtiyazlı vətəndaşlara dövlət hesabına
          müalicə xidməti göstərən bir müəssisədir.
          <br /> Pansionat öz fəaliyyətində Azərbaycan Respublikasının
          Konstitusiyasını, Azərbaycan Respublikasının qanunlarını, Azərbaycan
          Respublikası Prezidentinin fərman və sərəncamlarını, Azərbaycan
          Respublikası Nazirlər Kabinetinin qərar və sərəncamlarını, Əmək və
          Əhalinin Sosial Müdafiəsi Nazirliyinin kollegiya qərərlarını, əmr və
          sərancamlarını, digər normativ-hüquqi aktları, həmçinin pansionatın
          Əsasnaməsini rəhbər tutur.
          <br />
          Pansionatda fizioterapevtik müalicə üsulları ilə müalicə xidməti
          göstərilir.
          <br />
          Pansionat müalicə işlərində müasir metodika və texnologiyalardan
          istifadə edir, öz fəaliyyətinin nəticələrinin ümümiləşdirilməsi,
          qabaqcıl təcrübənin öyrənilməsi əsasında müalicə metodları hazırlayır
          və təcrübədə tətbiq edir. 100 yerlik olan müəssisədə il ərzində
          müvafiq yollayış əsasında gəlmiş 1000 nəfərdən artıq vətəndaşa müalicə
          xidməti göstərilir. Pansionata rəhbərliyi Əmək və Əhalinin Sosial
          Müdafiəsi Naziri tərəfindən vəzifəyə təyin və azad olunan Baş həkim
          həyata keçirir.
          <br />
          <br />
          Ünvan: Bakı şəhəri, Xəzər rayonu, Mərdəkan qəsəbəsi, R.Qasımov küçəsi
          9.
        </p>
      ),
    },
    {
      key: "4",
      label: "Müharibə Əlilləri üçün Müalicə Pansionatı (Şaqan)",
      children: (
        <p style={{ textAlign: "justify" }}>
          Əlillərə bərpa müalicəsi xidməti göstərilməsi üçün nəzərdə tutulan 240
          çarpayılıq müəssisə öz fəaliyyətində Azərbaycan Respublikasının
          Konstitusiyasını, Azərbaycan Respublikasının qanunlarını, Azərbaycan
          Respublikası Prezidentinin fərman və sərəncamlarını, Azərbaycan
          Respublikası Nazirlər Kabinetinin qərar və sərəncamlarını, Əmək və
          Əhalinin Sosial Müdafiəsi Nazirliyinin kollegiya qərərlarını, əmr və
          sərancamlarını, digər normativ-hüquqi aktları, həmçinin pansionatın
          Əsasnaməsini rəhbər tutur.
          <br /> Pansionatın məqsədi əlillərə bərpa müalicəsi xidməti
          göstərilməsi yolu ilə onların sosial statusunun bərpa edilməsini və
          cəmiyyətə inteqrasiyasını təmin etməkdir. Pansionatın əsas vəzifələri
          və funksiyaları aşağıdakılardır:
          <br />
          tibbi,sosial ,peşə diaqnostikasının və reabilitasiyasının həyata
          keçirilməsi, xəstəlikləri nəzərə alınmaqla bərpa müalicəsi alanların
          dietik və rasional qidalanmasının təşkili, bərpa müalicəsi alanların
          yaşını və sağlamlıqlarını nəzərə almaqla onların mədəni-kütləvi
          tədbirlərə, müalicə idmanına cəlb edilməsi, gigiyenik vərdişlərin
          tərbiyə edilməsi, sağlam həyat tərzinin təbliği, bərpa müalicəsi
          alanların məlumat bankının yaradılması və s.
          <br />
          Pansionat bərpa müalicəsi alanların reabilitasiyasında müasir metodika
          və texnologiyalardan istifadə edir, öz fəaliyyətinin nəticələrinin
          ümümiləşdirilməsi, qabaqcıl təcrübənin öyrənilməsi əsasında
          reabilitasiya metodları hazırlayır və təcrübədə tətbiq edir.
          <br />
          Pansionata rəhbərliyi Əmək və Əhalinin Sosial Müdafiəsi Naziri
          tərəfindən vəzifəyə təyin və azad olunan Baş həkim həyata keçirir.
          <br />
          <br />
          Ünvan: Bakı şəhəri Xəzər rayonu, Şaqan qəsəbəsi. Telefon: (012) 459 80
          62
        </p>
      ),
    },
    {
      key: "5",
      label: "Müharibə və əmək əlilləri üçün pansionat (Bilgəh)",
      children: (
        <p style={{ textAlign: "justify" }}>
          Müharibə və əmək əlilləri üçün pansionat (El arasında Qocalar evi kimi
          tanınır) qanunla onları saxlamağa borclu övladları olmayan pensiya
          yaşlı tənha vətəndaşların və əlillərin dövlət himayəsində yaşadığı
          ümumi tipli bir müəssisədir. Burada tənha vətəndaşlar və əlillər daimi
          olaraq yaşayış şəraiti, həmçinin qida, geyim və tibbi xidmətlə təmin
          olunurlar.
          <br /> 150 yerlik müəssisədə hazırda 150 nəfər yaşayır.
          <br />
          <br />
          Ünvanı: Sabunçu rayonu, Bilgəh qəsəbəsi. Tel: 455 74 04
        </p>
      ),
    },
    {
      key: "6",
      label:
        "1 saylı Sağlamlıq İmkanları Məhdud Gənclərin Peşə Reabilitasiya Mərkəzi",
      children: (
        <p style={{ textAlign: "justify" }}>
          Məqsəd: Əlilliyi olan gənclərin sosial reabilitasiyasını, cəmiyyətə
          inteqrasiyasını və əmək bazarına çıxışını asanıaşdırmaq.
          <br /> Mərkəz 15-30 yaş arası sağlamlıq imkanları məhdud gənclərin
          sosial reabilitasiyasını və peşə hazırlığını təşkil edir.
          <br />
          <br />
          Ünvanı: Bakı şəhəri, Sabunçu rayonu, Yeni Ramana qəsəbəsi, Qara
          Qarayev küçəsi 14. Tel: 452 44 57
        </p>
      ),
    },
    {
      key: "7",
      label: "Şahbuz qoca və kimsəsizlər üçün pansionat",
      children: (
        <p style={{ textAlign: "justify" }}>
          Şahbuz qoca və kimsəsizlər üçün pansionat qanunla onları saxlamağa
          borclu övladları olmayan pensiya yaşlı tənha vətəndaşların və
          əlillərin dövlət himayəsində yaşadığı ümumi tipli bir müəssisədir.
          <br /> Burada tənha vətəndaşlar və əlillər daimi olaraq yaşayış
          şəraiti, həmçinin qida, geyim və tibbi xidmətlə təmin olunurlar.
          <br />
          100 yerlik müəssisədə hazırda 46 nəfər yaşayır.
          <br />
          <br />
          Ünvanı: Naxçıvan MR Şahbuz rayonu, Şahbuz qəsəbəsi
        </p>
      ),
    },
    {
      key: "8",
      label: "Şamaxı 1 saylı İxtisaslaşdırılmış ruhi-əsəb internat evi",
      children: (
        <p style={{ textAlign: "justify" }}>
          Şamaxı 1 saylı Ixtisaslaşdırılmış ruhi-əsəb əlilləri üçün internat evi
          xüsusi qayğıya ehtiyac duyan ruhi-əsəb əlillərinin dövlət himayəsində
          yaşadığı bir müəssisədir. Burada əlillər daimi olaraq yaşayış şəraiti,
          həmçinin qida, geyim və tibbi xidmətlə təmin olunurlar.
          <br /> 100 yerlik internat evində hazırda 96 nəfər ruhi-əsəb əlili
          yaşayır.
          <br />
          <br />
          Ünvanı: Şamaxı şəhəri, R. Əfəndiyev küçəsi 84.
        </p>
      ),
    },
    {
      key: "9",
      label: "Şaqan 3 saylı fiziki və əqli qüsurlu uşaqlar üçün internat evi",
      children: (
        <p style={{ textAlign: "justify" }}>
          Şaqan 3 saylı fiziki və əqli qüsurlu uşaqlar üçün internat evi xüsusi
          qayğıya ehtiyac duyan əqli cəhətdən qüsurlu uşaqların dövlət
          himayəsində yaşadığı bir müəssisədir. Burada uşaqlar daimi olaraq
          yaşamaqla, qida, geyim və lazımi tibbi və reabilitasiya xidməti ilə
          təmin olunurlar. 200 yerlik internat evində hazırda 138 nəfər uşaq
          yaşayır.
          <br /> Azərbaycanın birinci xanımı, Heydər Əliyev Fondunun prezidenti,
          YUNESKO-nun və İSESKO-nun xoşməramlı səfiri, Milli Məclisin deputatı
          Mehriban xanım Əliyevanın təşəbbüsü ilə internat aparılan əsaslı təmir
          və yenidənqurma işlərindən sonra bu müəssisədə əqli və fiziki cəhətdən
          qüsurlu uşaqların normal yaşayışı və onların müxtəlif reabilitasiya
          tədbirlərinə cəlb olunması üçün hərtərəfli şərait yaradılıb. İnternat
          evində yataq və qidalanma şəraiti, müasir avadanlıqlarla və dərman
          preparatları ilə təmin edilmiş, bir sıra mühüm prosedurların həyata
          keçirildiyi fizioterapiya, reabilitasiya, ilk yardım, funksional
          diaqnostika otaqları, günərzi qayğı mərkəzləri, konfrans, idman və
          musiqi zalları fəaliyyət göstərir.
          <br />
          <br />
          Uşaqlarda zəruri fiziki qabiliyyət və vərdişlər formalaşdırmaq üçün
          reabilitasiya kabinələrinin, fitri istedad və bacarıqların, əmək
          vərdişlərinin inkişafına xidmət edən dərnəklərin yaradıldığı internat
          evində dövlət uşaq müəssisələrindən uşaqların ailələrə verilməsi -
          de-istitusionallaşdırma məsələsi ilə bağlı işlər görülür və artıq bir
          çox uşağın doğma ailələrinə qovuşmasına nail olunub.
          <br />
          <br />
          Ünvanı: Bakı şəhəri, Xəzər rayonu, Şaqan qəsəbəsi, M.Əzizbəyov küçəsi
          86.
          <br /> Tel: 454 87 25, 454 42 47
        </p>
      ),
    },
    {
      key: "10",
      label: "Saray 7 saylı fiziki və əqli qüsurlu uşaqlar üçün internat evi",
      children: (
        <p style={{ textAlign: "justify" }}>
          Saray 7 saylı fiziki və əqli qüsurlu uşaqlar üçün internat evi xüsusi
          qayğıya ehtiyac duyan əqli cəhətdən qüsurlu uşaqların dövlət
          himayəsində yaşadığı bir müəssisədir. Burada uşaqlar daimi olaraq
          yaşamaqla, qida, geyim və lazımi tibbi xidmətlə təmin olunurlar. 405
          yerlik internat evində hazırda 125 nəfər uşaq yaşayır.
          <br /> <br />
          Azərbaycanın birinci xanımı, Heydər Əliyev Fondunun prezidenti,
          YUNESKO-nun və İSESKO-nun xoşməramlı səfiri, Milli Məclisin deputatı
          Mehriban xanım Əliyevanın təşəbbüsü ilə internat aparılan əsaslı təmir
          və yenidənqurma işlərindən sonra bu müəssisədə əqli və fiziki cəhətdən
          qüsurlu uşaqların normal yaşayışı və onların müxtəlif reabilitasiya
          tədbirlərinə cəlb olunması üçün hərtərəfli şərait yaradılıb. İnternat
          evində yataq və qidalanma şəraiti, müasir avadanlıqlarla və dərman
          preparatları ilə təmin edilmiş, bir sıra mühüm prosedurların həyata
          keçirildiyi fizioterapiya, reabilitasiya, ilk yardım, funksional
          diaqnostika otaqları, günərzi qayğı mərkəzləri, konfrans, idman və
          musiqi zalları fəaliyyət göstərir.
          <br />
          <br />
          Uşaqlarda zəruri fiziki qabiliyyət və vərdişlər formalaşdırmaq üçün
          reabilitasiya kabinələrinin, fitri istedad və bacarıqların, əmək
          vərdişlərinin inkişafına xidmət edən dərnəklərin yaradıldığı internat
          evində dövlət uşaq müəssisələrindən uşaqların ailələrə verilməsi -
          de-istitusionallaşdırma məsələsi ilə bağlı işlər görülür və artıq bir
          çox uşağın doğma ailələrinə qovuşmasına nail olunub.
          <br />
          <br />
          Ünvanı: Abşeron rayonu, Saray qəsəbəsi. 443 10 99.
          <br /> Tel: 454 87 25, 454 42 47
        </p>
      ),
    },
  ];
  return (
    <div id="sosialXidmetMuessiseleri">
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xidmətlər",
            subcategory: "Sosial Xidmət Müəssisələri",
          }}
        />
        <Collapse accordion items={items} />
      </div>
    </div>
  );
};

export default SosialXidmetMuessiseleri;
