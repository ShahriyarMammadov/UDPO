import React from "react";
import SiteNavigation from "../../../components/navigation";

const ElilliyinTeyinOlunmasi = () => {
  return (
    <div className="container" style={{ padding: "0 10px 20px 10px" }}>
      <SiteNavigation
        navigationData={{
          category: "Əlillik",
          subcategory: "Əlilliyin Təyin Olunması",
        }}
      />
      <h1>Əlilliyin Təyin Olunması</h1>

      <dl>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>&nbsp;</p>
        <p
          align="center"
          style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}
        >
          <strong>Əlillik dərəcələrinin təyin edilməsi</strong>
        </p>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>
          Azərbaycan Respublikası Nazirlər Kabinetinin 2016-cı il 11 noyabr
          tarixli 446 nömrəli qərarı ilə “Tibbi-sosial ekspert komissiyaları
          haqqında Əsasnamə”yə edilən dəyişikliklərlə vətəndaşların onlara
          əlilik dərəcələrinin təyin edilməsi məqsədilə Tibbi-sosial ekspert
          komissiyalarına (TSEK) müvafiq sənədlərlə müraciət etmələri və TSEK-də
          müayinə olunmaqla əlilliyin qiymətləndirilməsi &nbsp;proseduru ləğv
          olunub.
        </p>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>
          Dəyişikliklərə əsasən, əlilliyin qiymətləndirilməsi üçün göndərişin
          rəsmiləşdirilməsi barədə məlumat Azərbaycan Respublikasının Səhiyyə
          Nazirliyindən elektron qaydada real vaxt rejimində Azərbaycan
          Respublikasının Əmək və Əhalinin Sosial Müdafiəsi Nazirliyinin
          Mərkəzləşdirilmiş İnformasiya Sistemində Tibbi-Sosial Ekspertiza və
          Reabilitasiya Alt Sisteminə (TSERAS) ötürülür.
        </p>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>
          Göndərişin aid olduğu şəxsə (əlillik vəziyyəti qiymətləndirilməli olan
          vətəndaşa) dair elektron sənəddə həmçinin əks olunan, yəni göndərişi
          verən səhiyyə müəssisəsinin adını, onu təsdiq edən şəxslərin kimliyini
          müəyyən etməyə imkan verən bütün məlumatlar TSERAS tərəfindən
          adsızlaşdırılaraq şifrə verilir. Bundan sonra sistem tərəfindən
          göndəriş əlilliyin qiymətləndirilməsi üçün elektron şəkildə hər hansı
          TSEK-ə (göndərişi vermiş səhiyyə müəssisəsinin ünvanına və şəxsin
          yaşayış yerinə xidmət edən TSEK istisna olmaqla) göndərilir.
        </p>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>
          Göndərişi elektron formada qəbul etmiş TSEK tərəfindən həmin sənəddə
          qeyd olunan xəstəliyin vəziyyəti barədə məlumatlar əsasında əlillik
          təyin olunub-olunmamasına dair qərar qəbul edilir. Əlillik
          vəziyyətinin qiymətləndirilməsinin nəticəsi olaraq qəbul edilmiş
          qərar, habelə onun aid olduğu şəxsin sosial müdafiə tədbirlərinə
          ehtiyacının olub-olmamasına dair tibbi göstəriş və əmək zəmanətinə
          dair məlumatlar gücləndirilmiş elektron imza ilə TSERAS-a daxil
          edilir, TSEK-in sədri və üzvlərinin gücləndirilmiş elektron imzası ilə
          təsdiqlənir.
        </p>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>
          “Tibbi-sosial ekspert komissiyaları haqqında Əsasnamə”yə edilən
          dəyişikliklər əsasında tətbiq olunan bu yeni prosedur əlilliyin
          qiymətləndirilməsi prosesinin məmur-vətəndaş təmasları olmadan,
          elektron ifrastruktur üzərində tam obyektiv və şəffaf şəraitdə
          aparılmasına xidmət edir.
        </p>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>
          Nazirliyin “Tibbi-Sosial Ekspert Komissiyaları tərəfindən keçirilmiş
          müayinə barədə məlumatın verilməsi”, eləcə də autentifikasiya
          vasitəsinə ehtiyac olmadan istifadə edilən “Tibbi-Sosial Ekspert
          Komissiyalarında aparılmış sonuncu müayinəyə dair məlumatın verilməsi”
          (
          <a href="https://www.e-gov.az/az/services/read/3493/0">
            https://www.e-gov.az/az/services/read/3493/0
          </a>
          ) e-xidmətləri vətəndaşlara əlilliklərinin qiymətləndirilməsinin
          nəticəsi barədə elektron qaydada, yəni heç bir vəzifəli şəxsə müraciət
          etmədən elektron formada məlumat almağa imkan verir.
        </p>
        <p style={{ color: "rgb(42, 42, 42)", textAlign: "justify" }}>
          Vətəndaşlar əlilliklərinin qiymətləndirilməsinin nəticəsi barədə
          Azərbaycan Respublikasının Əmək və Əhalinin Sosial Müdafiəsi 142
          “Çağrı mərkəzi”nə zəng edərək şəxsiyyət vəsiqəsinin nömrəsini və doğum
          tarixini daxil etməklə nazirliyin mərkəzləşdirilmiş informasiya
          sistemindən məlumat əldə edə bilərlər.
        </p>
      </dl>
    </div>
  );
};

export default ElilliyinTeyinOlunmasi;
