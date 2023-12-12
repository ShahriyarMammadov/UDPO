import React, { useEffect } from "react";
import "./index.scss";
import { Collapse } from "antd";
import SiteNavigation from "../../../components/navigation";
import { Helmet } from "react-helmet";

const BerpaVeMualiceMerkezleri = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <h4 style={{ margin: "0" }}>Respublika Əlillərin Bərpa Mərkəzi</h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Respublika Əlillərin Bərpa Mərkəzi 1986-cı ildə ümummilli lider
            Heydər Əliyevin təşəbbüsü ilə Cənubi Qafqazda bu sahədə ilk tibb
            ocağı kimi fəaliyyətə başlayıb. Prezident İlham Əliyevin 2015-ci il
            martın 16-da imzaladığı Fərmanla Əmək və Əhalinin Sosial Müdafiəsi
            Nazirliyi yanında Dövlət Tibbi Sosial Ekspertiza və Reabilitasiya
            Xidməti yaradılıb. Respublika Əlillərin Bərpa Mərkəzi hazırda həmin
            xidmətin tərkibində fəaliyyət göstərir. Mərkəz yarandığı gündən bu
            günədək respublikada olan bütün əlillərin, o cümlədən Azərbaycanın
            ərazi bütövlüyü uğrunda mübarizədə sağlamlıqlarını itirmiş Qarabağ
            müharibəsi əlillərinin, 20 Yanvar, Çernobıl, Əfqanıstan hadisələri
            zamanı əlil olmuş insanların müayinə və müalicəsində yüksək
            peşəkarlıq göstərir. Mərkəzdə fizioterapiya və psixoloji korreksiya,
            tibbi-sosial reabilitasiya və funksional diaqnostika şöbələri var.{" "}
            <br />
            <br />
            Mərkəzdə 16 yaşdan yuxarı bütün kateqoriyalardan olan əlillərə
            xidmət göstərilir. Mərkəz il ərzində 1000 nəfərə yaxın əlilin
            reabilitasiya və müalicəsi ilə məşğul olur. Azərbaycan
            Respublikasının Prezidenti cənab İlham Əliyev 21 sentyabr 2015-ci il
            tarixdə Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin Respublika
            Əlillərin Bərpa Mərkəzinin əsaslı yenidənqurmadan sonra açılış
            mərasimində iştirak etdi.
          </p>

          <a
            href="http://binegedi-ih.gov.az/az/page/274.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <h4 style={{ margin: "0" }}>
          Əlilliyi olan şəxslər üçün Müalicə Pansionatı
        </h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Əlillərə bərpa müalicəsi xidməti göstərilməsi üçün nəzərdə tutulan
            240 çarpayılıq müəssisə öz fəaliyyətində Azərbaycan Respublikasının
            Konstitusiyasını, Azərbaycan Respublikasının qanunlarını, Azərbaycan
            Respublikası Prezidentinin fərman və sərəncamlarını, Azərbaycan
            Respublikası Nazirlər Kabinetinin qərar və sərəncamlarını, Əmək və
            Əhalinin Sosial Müdafiəsi Nazirliyinin kollegiya qərərlarını, əmr və
            sərancamlarını, digər normativ-hüquqi aktları, həmçinin pansionatın
            Əsasnaməsini rəhbər tutut. Pansionatın məqsədi əlillərə bərpa
            müalicəsi xidməti göstərilməsi yolu ilə onların sosial statusunun
            bərpa edilməsini və cəmiyyətə inteqrasiyasını təmin etməkdir.
            Pansionatın əsas vəzifələri və funksiyaları aşağıdakılardır:
            <br />
            <br />
            tibbi,sosial ,peşə diaqnostikasının və reabilitasiyasının həyata
            keçirilməsi, xəstəlikləri nəzərə alınmaqla bərpa müalicəsi alanların
            dietik və rasional qidalanmasının təşkili, bərpa müalicəsi alanların
            yaşını və sağlamlıqlarını nəzərə almaqla onların mədəni-kütləvi
            tədbirlərə, müalicə idmanına cəlb edilməsi, gigiyenik vərdişlərin
            tərbiyə edilməsi, sağlam həyat tərzinin təbliği, bərpa müalicəsi
            alanların məlumat bankının yaradılması və s.
            <br /> <br />
            Pansionat bərpa müalicəsi alanların reabilitasiyasında müasir
            metodika və texnologiyalardan istifadə edir, öz fəaliyyətinin
            nəticələrinin ümümiləşdirilməsi, qabaqcıl təcrübənin öyrənilməsi
            əsasında reabilitasiya metodları hazırlayır və təcrübədə tətbiq
            edir.
            <br />
            <br />
            Pansionata rəhbərliyi Əmək və Əhalinin Sosial Müdafiəsi Naziri
            tərəfindən vəzifəyə təyin və azad olunan Baş həkim həyata keçirir.
            <br />
            <br />
            Ünvan: Bakı şəhəri Xəzər rayonu, Şaqan qəsəbəsi. Telefon: (012) 459
            80 62
          </p>

          <a
            href="https://sosial.gov.az/media/xeberler/3141"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "3",
      label: <h4 style={{ margin: "0" }}>Mərdəkan Müalicə Pansionatı</h4>,
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (012) 454-72-86 <br />
            E-poçt: mardakan.rm@sosial.gov.az
            <br /> Ünvan: Mərdəkan qəs., R.Qasımov küç., 9 Mərdəkan
            <br />
            <br />
            Reabilitasiya Pansionatı əlilliyi olan şəxslərə tibbi və
            sosial-psixoloji reabilitasiya xidməti göstərən bir müəssisədir.
            <br />
            <br />
            Pansionatın məqsədi əlilliyi olan şəxslərə bərpa müalicəsi xidməti
            göstərilməsi yolu ilə onların sosial statusunun bərpa edilməsini və
            cəmiyyətə inteqrasiyasını təmin etməkdir. Pansionatın əsas
            vəzifələri və funksiyaları tibbi,sosial ,peşə diaqnostikasının və
            reabilitasiyasının həyata keçirilməsi, xəstəlikləri nəzərə alınmaqla
            bərpa müalicəsi alanların dietik və rasional qidalanmasının təşkili,
            bərpa müalicəsi alanların yaşını və sağlamlıqlarını nəzərə almaqla
            onların mədəni-kütləvi tədbirlərə, müalicə idmanına cəlb edilməsi,
            gigiyenik vərdişlərin tərbiyə edilməsi, sağlam həyat tərzinin
            təbliği, bərpa müalicəsi alanların məlumat bankının yaradılması
            istiqamətində işlər görməkdir.Müəssisə 1,2 və 3 nəfərlik
            palatalardan ibarət olmaqla toplam 150 çarpayılıqdır. <br />
            <br />
            Pansionat bərpa müalicəsi alanların reabilitasiyasında müasir
            metodika və texnologiyalardan istifadə edir, öz fəaliyyətinin
            nəticələrinin ümümiləşdirilməsi, qabaqcıl təcrübənin öyrənilməsi
            əsasında reabilitasiya metodları hazırlayır və təcrübədə tətbiq
            edir.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/merdekan-reabilitasiya-pansionati?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "4",
      label: (
        <h4 style={{ margin: "0" }}>
          Lənkəran Əlillərin Regional Bərpa Mərkəzi
        </h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (025) 254-81-58
            <br /> E-poçt: lankaran.rm@sosial.gov.az <br />
            Ünvan: Lənkəran şəh., Əliağa Vahid küç., 85
            <br />
            <br />
            Lənkəran Reabilitasiya Mərkəzi əlilliyi olan şəxslərin kompleks
            tibbi-sosial reabilitasiyasınınhəyata keçirilməsi üçün nəzərdə
            tutulan regional müəssisədir.
            <br />
            <br />
            Mərkəz Lənkəran rayonunda və ətraf rayonlarda yaşayan əlillərə
            kompleks tibbi-sosial reabilitasiya xidməti göstərmək yolu ilə
            onların sosial statusunun bərpa edilməsi və cəmiyyətə inteqrasiyası,
            onların tibbi, sosial, peşə diaqnostikası və reabilitasiyası,
            xəstəlikləri nəzərə alınmaqla dietik və rasional qidalanmasının
            təşkili, yaş və sağlamlıqlarını nəzərə alınmaqla mədəni-kütləvi
            tədbirlərə, müalicə idmanına cəlb edilməsi, onlarda gigiyenik
            vərdişlərin tərbiyə edilməsi, sağlam həyat tərzinin təbliği
            istiqamətində işlər görür. <br />
            <br />
            Mərkəzdə reabilitasiya xidməti alanlarla bağlı məlumat bankı
            yaradılır, bərpa müalicəsi alanların reabilitasiyasında müasir
            metodika və texnologiyalardan istifadə edilir, qabaqcıl təcrübələrin
            öyrənilməsi əsasında reabilitasiya metodları hazırlanaraq təcrübədə
            tətbiq olunur. Müəssisə 2,3 və 4 nəfərlik palatalardan ibarət
            olmaqla toplam 14 çarpayılıqdır.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/lenkeran-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "5",
      label: (
        <h4 style={{ margin: "0" }}>
          Naftalan Əlillərin Regional Bərpa Mərkəzi
        </h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (022) 352-15-99
            <br /> E-poçt: naftalan.rm@sosial.gov.az
            <br /> Ünvan: Naftalan şəh., Nizami Gəncəvi küç. 55
            <br />
            <br />
            Naftalan Reabilitasiya Mərkəzi əlilliyi olan şəxslərin kompleks
            tibbi,sosial-psixoloji reabilitasiyasının həyata keçirilməsi üçün
            nəzərdə tutulan regional müəssisədir.
            <br />
            <br />
            Mərkəz Naftalan şəhərində və ətraf rayonlarda yaşayan əlilliyi olan
            şəxslərə kompleks tibbi, sosial-psixoloji reabilitasiya xidməti
            göstərmək yolu ilə onların sosial statusunun bərpa edilməsi və
            cəmiyyətə inteqrasiyası, onların tibbi, sosial-psixoloji, peşə
            diaqnostikası və reabilitasiyası, xəstəlikləri nəzərə alınmaqla
            dietik və rasional qidalanmasının təşkili, yaş və sağlamlıqlarını
            nəzərə alınmaqla mədəni-kütləvi tədbirlərə, müalicə idmanına cəlb
            edilməsi, onlarda gigiyenik vərdişlərin tərbiyə edilməsi, sağlam
            həyat tərzinin təbliği istiqamətində işlər görür.Müəssisə 2 və 3
            nəfərlik palatalardan ibarət olmaqla toplam 25 çarpayılıqdır.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/naftalan-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "6",
      label: (
        <h4 style={{ margin: "0" }}>
          Naxçıvan Əlillərin Regional Bərpa Mərkəzi
        </h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            16 may 2004-cü il il tarixdən fəaliyyətə başlayan Naxçıvan Əlillərin
            Bərpa Mərkəzi sağlamlıq imkanları məhdud şəxslərin fizioterapevtik
            vasitələrlə reabilitasiyasını həyata keçirən müalicə müəssisəsidir.
            <br />
            <br />
            İxtisaslı həkim və tibb personalının fəaliyyət göstərdiyi 20
            çarpayılıq Mərkəzdə müayinə və prosedur otaqları mövcuddur:
            <br />
            <br />
            Müayinə otaqlarına - fizioterapevtik müayinə, USM-lə müayinə,
            nevropatoloq otağı, laboratoriya aiddir.
            <br />
            <br />
            Mərkəzdə elektrik və işıqla müalicə kabinələri, o cümlədən
            ultrasəslə massaj, qısa dalğa diotermiya, mikrodalğa, infraqırmızı,
            elektrostimulyasiya, habelə hidroterapiya kabinələri (müxtəlif tipli
            duşlar, müalicəvi vannalar), parafin applikasiyası üçün xüsusi otaq,
            fərdi massaj otaqları və idman zalı vardır.
            <br />
            <br />
            Mərkəzdə xəstələr stasionar və ambulator müalicə alırlar. Stasionar
            müalicə alanlar gündə 3 dəfə pulsuz isti yeməklə təmin edilirlər.
          </p>

          <a
            href="http://rim.nax.az/2013-08-26-18-18-31/tibbi-reabilitasiya/%C9%99lill%C9%99rin-b%C9%99rpa-m%C9%99rk%C9%99zi/13-%C9%99lill%C9%99rin-b%C9%99rpa-m%C9%99rk%C9%99zi.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "7",
      label: (
        <h4 style={{ margin: "0" }}>Şəki Əlillərin Regional Bərpa Mərkəzi</h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (024) 245-16-90 , (024) 245-18-90 <br />
            E-poçt: sheki.rm@sosial.gov.az <br />
            Ünvan: Şəki şəh., Niyazi küç. 5<br />
            <br />
            Şəki Reabilitasiya Mərkəzi əlilliyi olan şəxslərin kompleks
            tibbi-sosial reabilitasiyasının həyata keçirilməsi üçün nəzərdə
            tutulan regional müəssisədir.
            <br />
            <br />
            Mərkəz Şəki rayonunda və ətraf rayonlarda yaşayan əlillərə kompleks
            tibbi-sosial reabilitasiya xidməti göstərmək yolu ilə onların sosial
            statusunun bərpa edilməsi və cəmiyyətə inteqrasiyası, onların tibbi,
            sosial, peşə diaqnostikası və reabilitasiyası, xəstəlikləri nəzərə
            alınmaqla dietik və rasional qidalanmasının təşkili, yaş və
            sağlamlıqlarını nəzərə alınmaqla mədəni-kütləvi tədbirlərə, müalicə
            idmanına cəlb edilməsi, onlarda gigiyenik vərdişlərin tərbiyə
            edilməsi, sağlam həyat tərzinin təbliği istiqamətində işlər görür.
            <br />
            <br />
            Mərkəzdə bərpa müalicəsi alanlarla bağlı məlumat bankı yaradılır,
            bərpa müalicəsi alanların reabilitasiyasında müasir metodika və
            texnologiyalardan istifadə edilir, qabaqcıl təcrübələrin öyrənilməsi
            əsasında reabilitasiya metodları hazırlanaraq təcrübədə tətbiq
            olunur. Müəssisə 2 və 3 nəfərlik palatalardan ibarət olmaqla toplam
            14 çarpayılıqdır.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/seki-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "8",
      label: (
        <h4 style={{ margin: "0" }}>Şirvan Əlillərin Regional Bərpa Mərkəzi</h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: ((021) 215-14-90 , (021) 215-14-92
            <br /> E-poçt: shirvan.rm@sosial.gov.az
            <br /> Ünvan: Şirvan şəh., Tofiq İsmayılov küç., 24
            <br />
            <br />
            Şirvan Reabilitasiya Mərkəzi əlilliyi olan şəxslərin kompleks
            tibbi,sosial-psixoloji reabilitasiyasının həyata keçirilməsi üçün
            nəzərdə tutulan regional müəssisədir.
            <br />
            <br />
            Mərkəz Şirvan şəhərində və ətraf rayonlarda yaşayan əlilliyi olan
            şəxslərə kompleks tibbi, sosial-psixoloji reabilitasiya xidməti
            göstərmək yolu ilə onların sosial statusunun bərpa edilməsi və
            cəmiyyətə inteqrasiyası, onların tibbi, sosial-psixoloji, peşə
            diaqnostikası və reabilitasiyası, xəstəlikləri nəzərə alınmaqla
            dietik və rasional qidalanmasının təşkili, yaş və sağlamlıqlarını
            nəzərə alınmaqla mədəni-kütləvi tədbirlərə, müalicə idmanına cəlb
            edilməsi, onlarda gigiyenik vərdişlərin tərbiyə edilməsi, sağlam
            həyat tərzinin təbliği istiqamətində işlər görür.Müəssisə 2 və 3
            nəfərlik palatalardan ibarət olmaqla toplam 14 çarpayılıqdır.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/sirvan-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "9",
      label: (
        <h4 style={{ margin: "0" }}>
          Sumqayıt Əlillərin Regional Bərpa Mərkəzi
        </h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (018) 644-49-65
            <br /> E-poçt: sumgayit.rm@sosial.gov.az
            <br /> Ünvan: Sumqayıt şəh., Bakı küç. 189, məh. 40
            <br />
            <br />
            Sumqayıt Reabilitasiya Mərkəzi əlilliyi olan şəxslərin kompleks
            tibbi-sosial reabilitasiyasının həyata keçirilməsi üçün nəzərdə
            tutulan regional müəssisədir.
            <br />
            <br />
            Mərkəz Sumqayıt şəhərində və ətraf rayonlarda yaşayan əlillərə
            kompleks tibbi-sosial reabilitasiya xidməti göstərmək yolu ilə
            onların sosial statusunun bərpa edilməsi və cəmiyyətə inteqrasiyası,
            onların tibbi, sosial, peşə diaqnostikası və reabilitasiyası,
            xəstəlikləri nəzərə alınmaqla dietik və rasional qidalanmasının
            təşkili, yaş və sağlamlıqlarını nəzərə alınmaqla mədəni-kütləvi
            tədbirlərə, müalicə idmanına cəlb edilməsi, onlarda gigiyenik
            vərdişlərin tərbiyə edilməsi, sağlam həyat tərzinin təbliği
            istiqamətində işlər görür.
            <br />
            <br />
            Sumqayıt Reabilitasiya Mərkəzində reabilitasiya xidməti alanlarla
            bağlı məlumat bankı yaradılır, bərpa müalicəsi alanların
            reabilitasiyasında müasir metodika və texnologiyalardan istifadə
            edilir, qabaqcıl təcrübələrin öyrənilməsi əsasında reabilitasiya
            metodları hazırlanaraq təcrübədə tətbiq olunur. Müəssisə 1 və 2
            nəfərlik palatalardan ibarət olmaqla toplam 20 çarpayılıqdır.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/sumqayit-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "10",
      label: (
        <h4 style={{ margin: "0" }}>Xaçmaz Əlillərin Regional Bərpa Mərkəzi</h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (023) 325-48-96
            <br />
            E-poçt: khachmaz.rm@sosial.gov.az
            <br /> Ünvan: Xaçmaz şəh., H.Əliyev pr., 1A
            <br />
            <br />
            Xaçmaz Reabilitasiya Mərkəzi əlilliyi olan şəxslərin kompleks
            tibbi-sosial reabilitasiyasının həyata keçirilməsi üçün nəzərdə
            tutulan regional müəssisədir.
            <br />
            <br />
            Mərkəz Xaçmaz rayonunda və ətraf rayonlarda yaşayan əlillərə
            kompleks tibbi-sosial reabilitasiya xidməti göstərmək yolu ilə
            onların sosial statusunun bərpa edilməsi və cəmiyyətə inteqrasiyası,
            onların tibbi, sosial, peşə diaqnostikası və reabilitasiyası,
            xəstəlikləri nəzərə alınmaqla dietik və rasional qidalanmasının
            təşkili, yaş və sağlamlıqlarını nəzərə alınmaqla mədəni-kütləvi
            tədbirlərə, müalicə idmanına cəlb edilməsi, onlarda gigiyenik
            vərdişlərin tərbiyə edilməsi, sağlam həyat tərzinin təbliği
            istiqamətində işlər görür.
            <br />
            <br />
            Mərkəzdə bərpa müalicəsi alanlarla bağlı məlumat bankı yaradılır,
            bərpa müalicəsi alanların reabilitasiyasında müasir metodika və
            texnologiyalardan istifadə edilir, qabaqcıl təcrübələrin öyrənilməsi
            əsasında reabilitasiya metodları hazırlanaraq təcrübədə tətbiq
            olunur. Müəssisə 2 və 3 nəfərlik palatalardan ibarət olmaqla toplam
            14 çarpayılıqdır.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/xacmaz-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "11",
      label: (
        <h4 style={{ margin: "0" }}>Yevlax Əlillərin Regional Bərpa Mərkəzi</h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (022) 337-81-56 , (022) 337-78-95
            <br />
            E-poçt: yevlakh.rm@sosial.gov.az
            <br />
            Ünvan: Yevlax şəh., Bakı pr., 1
            <br />
            <br />
            Yevlax Reabilitasiya Mərkəzi əlilliyi olan şəxslərin kompleks
            tibbi-sosial reabilitasiyasının həyata keçirilməsi üçün nəzərdə
            tutulan regional müəssisədir.
            <br />
            <br />
            Mərkəz Yevlax rayonunda və ətraf rayonlarda yaşayan əlillərə
            kompleks tibbi-sosial reabilitasiya xidməti göstərmək yolu ilə
            onların sosial statusunun bərpa edilməsi və cəmiyyətə inteqrasiyası,
            onların tibbi, sosial, peşə diaqnostikası və reabilitasiyası,
            xəstəlikləri nəzərə alınmaqla dietik və rasional qidalanmasının
            təşkili, yaş və sağlamlıqlarını nəzərə alınmaqla mədəni-kütləvi
            tədbirlərə, müalicə idmanına cəlb edilməsi, onlarda gigiyenik
            vərdişlərin tərbiyə edilməsi, sağlam həyat tərzinin təbliği
            istiqamətində işlər görür.
            <br />
            <br />
            Mərkəzdə bərpa müalicəsi alanlarla bağlı məlumat bankı yaradılır,
            bərpa müalicəsi alanların reabilitasiyasında müasir metodika və
            texnologiyalardan istifadə edilir, qabaqcıl təcrübələrin öyrənilməsi
            əsasında reabilitasiya metodları hazırlanaraq təcrübədə tətbiq
            olunur. Müəssisə 1,2,3 və 4 nəfərlik palatalardan ibarət olmaqla
            toplam 14 çarpayılıqdır.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/yevlax-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "12",
      label: <h4 style={{ margin: "0" }}>Protez-Ortopedik Bərpa Mərkəzi</h4>,
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon: (012) 569 63 76
            <br />
            E-poçt: po.irm@sosial.gov.az
            <br />
            Ünvan: Bakı şəh., Xətai ray., S.Ə.Şirvani küç., 3
            <br />
            <br />
            Protez-Ortopedik Bərpa Mərkəzi əlilliyi olan şəxslərə
            protez-ortopedik bərpa xidməti göstərən istehsalat müəssisəsidir.
            Mərkəz müasir texnologiya əsasında əlilliyi olan şəxslər üçün
            protez-ortopedik məhsulların (protez, ortez, korset, ortopedik
            ayaqqabı) və digər reabilitasiya məmulatlarının istehsalı, xəstə və
            əlillərin xəstəliklərinin diaqnostikası və stasionar müalicəsi
            istiqamətində fəaliyyət göstərir. Müəssisə istehsalat sahəsindən və
            stasionar şöbədən ibarətdir. Mərkəzdə əlillər velo və
            kresloarabalar, qoltuqaltı və dirsəkaltı ağaclar, əsa, eşitmə
            aparatları və s.ilə təmin edilirlər.
            <br />
            <br />
            Mərkəz öz fəaliyyətində Azərbaycan Respublikasının qanunlarını,
            Azərbaycan Respublikası Prezidentinin fərman və sərəncamlarını,
            digər normativ aktları, Əmək və Əhalinin Sosial Müdafiəsi Nazirliyi
            Kollegiyasının qərarlarını, özünün Əsasnaməsini rəhbər tutur.
            Mərkəzdə əlilliyi olan şəxslərin dayaq-hərəkət sisteminin itirilmiş
            funksiyalarının bərpası, protez-ortopedik məhsulları ilə təminat,
            əlilliyi olan şəxslərin tibbi-sosial reabilitasiyasının həyata
            keçirilməsi, protez-ortopedik məmulatların tibbi-texniki və
            biomexaniki sınaqlarının keçirilməsi, protezləşdirmənin keyfiyyətini
            müəyyənləşdirmək üçün müasir metodların işlənib hazırlanması, bu
            sahələr üzrə mütəxəssislərin hazırlanması, protez-ortopedik
            məhsulların istehsalında yeni konstruksiyaların, texnologiyaların və
            elmi nailiyyətlərin geniş tətbiq edilməsi, xəstə və əlilliyi olan
            şəxslərin məlumat bankının yaradılması istiqamətində işlər görülür.
            <br />
            <br />
            Müəssisə tərəfindən xəstə və əlilliyi olan şəxslərə ambulator,
            stasionar və səyyar şəkildə protez-ortopedik xidmət göstərilir,
            reabilitasiya terapiyası, protezləşdirmə və ortezləşdirmə vasitəsi
            ilə əlilliyi olan şəxslərin tibbi-sosial reabilitasiyası həyata
            keçirilir. Mərkəzin stasionarında bütün növ amputasiya olunmuş
            əlilliyi olan şəxslərin protezləşməyə hazırlanması, protezlə təmin
            edilmiş əlilliyi olan şəxslərə protezlə hərəkət edilməsinin
            öyrədilməsi, onurğa sutunu zədələnmiş spinal əlilliyi olan şəxslərin
            reabilitasiyası, skoliozlu uşaqların reabilitasiyası, uşaqların
            serebral iflicinin fəsadlarının, anadangəlmə bəzi qüsur və
            deformasiyaların aradan qaldırılması və s. istiqamətlərdə
            bərpa-müalicə tədbirləri həyata keçirilir.Mərkəzə rəhbərliyi Əmək və
            Əhalinin Sosial Müdafiəsi naziri tərəfindən vəzifəyə təyin və azad
            olunan direktor həyata keçirir.
          </p>

          <a
            href="https://dtsera.gov.az/agentlik/reabilitasiya-merkezleri/protez-ortopedik-istehsalat-ve-reabilitasiya-merkezi?hl=az"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "13",
      label: (
        <h4 style={{ margin: "0" }}>
          Protez-Ortopedik Bərpa Mərkəzinin Gəncə filialı
        </h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Gəncədə əlil şəxslərin ortopedik vasitələrlə təminatı və
            reabilitasiyasını təmin etmək üçün Protez Ortopedik Bərpa Mərkəzinin
            Gəncə filialına edilən müraciətlərin sayı artıb. Müəssisənin
            emalatxanasında hazırlanan məmulatlarla yanaşı təmirə ehtiyac
            duyulan protez-ortopedik vasitələr yenilənərək təkrar istifadəyə
            verilib.
            <br />
            <br />
            Gəncədə fəaliyyət göstərən müəssisəyə bu il 240-ı ilk dəfə olmaqla
            856 əlil vətəndaş müraciət edib. Onlar ümumilikdə müxtəlif adda 2
            min 665 ədəd reabilitasiya vasitəsi ilə təmin edilib. 100-ə qədər
            məmulat isə mərkəzin emalatxanasında təmir olunub. Təminatla yanaşı,
            burada fiziki qüsurlu şəxslərin reabilitasiyası da mümkündür.
          </p>

          <a
            href="http://kepeztv.az/news/id/17958"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "14",
      label: <h4 style={{ margin: "0" }}>Bakı Uşaq Bərpa Mərkəzi</h4>,
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Telefon (+99412) 440-16-31
            <br /> Ünvan Bakı, Nərimanov rayonu, M. Qaşqay küçəsi, 84 AZ1110
            verilib.
            <br />
            <br />
            Dövlət tibb müəssisələri “Əhalinin sağlamlığının qorunması haqqında”
            qanun və digər müvafiq normativ hüquqi aktlara uyğun olaraq
            fəaliyyət göstərir. Dövlət tibb müəssisələrinin fəaliyyətinin əsas
            məqsədi əhalinin sağlamlığının qorunması, bu sahədə vətəndaşlarının
            hüquqlarının təmin edilməsindən ibarətdir. Müəssisələr tərəfindən
            əhaliyə müxtəlif növ tibbi xidmətlər göstərilir
          </p>

          <a
            href="https://e-tibb.az/klinikalar/495-baki-seher-usaq-berpa-mualice-merkezi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "15",
      label: <h4 style={{ margin: "0" }}>Naxçıvan Uşaq Bərpa Mərkəzi</h4>,
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            08 iyun 2007-ci il tarixdən fəaliyyətə başlayan Naxçıvan Uşaq Bərpa
            Mərkəzi 18 yaşadək sağlamlıq imkanları məhdud uşaqların
            fizioterapevtik vasitələrlə reabilitasiyasını həyata keçirən müalicə
            müəssisəsidir.
            <br />
            <br />
            14 çarpayılıq Mərkəzdə muxtar respublikada yaşayan 18 yaşadək
            sağlamlıq imkanları məhdud uşaqlar müalicə kursu qəbul edə bilərlər.
            Stasionar və ambulator şəraitdə müalicə aparılan Mərkəzdə sağlamlıq
            imkanları məhdud uşaqların həkimlər tərəfindən ətraflı müayinə
            olunması üçün müasir standartlara cavab verən elektrokardioqrafiya,
            ultrasəslə müayinə və elektroensefaloqrafiya avadanlıqları
            mövcuddur. Stasionar müalicə alanlar gündə 5 dəfə pulsuz yeməklə
            təmin edilirlər.
            <br />
            <br />
            Sağlamlıq imkanları məhdud uşaqların müalicəsi üçün Mərkəzdə
            müxtəlif tezlikli cərəyanlarla müalicə, həmçinin mikrodalğa,
            infraqırmızı lampa, yeriş imitatoru, unikreslo, aşil-tendon gərici,
            artromot müalicə aparatları, müalicəvi bədən tərbiyəsi zalı, parafin
            applikasiyası üçün xüsusi otaq, fərdi massaj otağı, su ilə müalicə
            otağı (mirvari vannası, burulğanlı vanna), hovuz fəaliyyət göstərir.
          </p>

          <a
            href="http://rim.nax.az/2013-08-26-18-18-31/tibbi-reabilitasiya/u%C5%9Faq-b%C9%99rpa-m%C9%99rk%C9%99zi.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
    {
      key: "16",
      label: (
        <h4 style={{ margin: "0" }}>
          Xüsusi Qayğıya Ehtiyacı Olan Uşaqların Dövlət Reabilitasiya Müəssisəsi
        </h4>
      ),
      children: (
        <>
          <p style={{ textAlign: "justify" }}>
            Əmək və Əhalinin Sosial Müdafiəsi Nazirliyi yanında Dövlət
            Tibbi-Sosial Ekspertiza və Reabilitasiya Xidmətinin Xüsusi Qayğıya
            Ehtiyacı olan Uşaqların Dövlət Reabilitasiya Müəssisəsində bu ilin
            ötən dövründə 300-dən çox uşaq reabilitasiya xidmətləri ilə təmin
            edilib.
            <br />
            <br />
            Onlardan 200-nəfərdən çoxu uşaq serebral iflici olanlar, qalanları
            autizm və daun sindromlu, digər diaqnozlu uşaqlardır.
            <br />
            <br />
            Azərbaycan Respublikasının Birinci vitse-prezidenti, Heydər Əliyev
            Fondunun prezidenti Mehriban xanım Əliyevanın təşəbbüsü ilə Heydər
            Əliyev Fondunun dəstəyi nəticəsində yaradılan müəssisə ölkəmizdə
            sağlamlıq imkanları məhdud uşaqlar üçün tibbi-sosial reabilitasiya
            imkanlarının artırılmasına, bu sahədə yüksək standartlara uyğun
            infrastrukturun formalaşdırılmasına mühüm töhfə olub. Müəssisədə
            uşaqlara dünya praktikasında özünü doğrultmuş qum terapiyası, habelə
            artterapiya üsullarından, müalicəvi vannalardan və s. istifadə
            şəraitində 15-dən çox növdə reabilitasiya xidmətləri göstərilir.
            <br />
            <br />
            Xüsusi Qayğıya Ehtiyacı olan Uşaqların Dövlət Reabilitasiya
            Müəssisəsi kimi fəaliyyətə başladığı 2015-ci ilin oktyabr ayından bu
            vaxta qədər müəssisədə 1450-dək uşağa reabilitasiya xidmətləri
            göstərilib.
          </p>

          <a
            href="https://sosial.gov.az/media/xeberler/2576"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daha Ətraflı
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="container" style={{ marginBottom: "40px" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UDPO | Bərpa və Müalicə Mərkəzləri</title>
      </Helmet>

      <SiteNavigation
        navigationData={{
          category: "Xidmətlər",
          subcategory: "Bərpa və müalicə mərkəzləri",
        }}
      />
      <Collapse accordion items={items} />
    </div>
  );
};

export default BerpaVeMualiceMerkezleri;
