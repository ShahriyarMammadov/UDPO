import React from "react";
import SiteNavigation from "../../../components/navigation";
import "./index.scss";

const SeherVeRayonSobeleri = () => {
  return (
    <div id="seherVeRayonSobeler">
      <div className="container" style={{ padding: "0 10px 20px 10px" }}>
        <SiteNavigation
          navigationData={{
            category: "Əlillik",
            subcategory: "DSMF-ın Şəhər və Rayon Şöbələri",
          }}
        />
        <h1>DSMF-ın Şəhər və Rayon Şöbələri</h1>

        <div style={{ padding: "30px 0" }}>
          <table
            border="1"
            cellpadding="0"
            cellspacing="0"
            className="stats"
            width="100%"
          >
            <tbody>
              <tr>
                <td
                  align="center"
                  className="hed"
                  colspan="6"
                  style={{ fontWeight: "bold" }}
                >
                  Bakı şəhər şöbələri
                </td>
              </tr>
              <tr>
                <td align="center" class="hed" width="5%">
                  №
                </td>
                <td align="center" class="hed" width="22%">
                  Soyadı, Adı
                </td>
                <td align="center" class="hed" width="27%">
                  Vəzifəsi
                </td>
                <td align="center" class="hed" width="12%">
                  Telefon
                </td>
                <td align="center" class="hed" width="23%">
                  Ünvan
                </td>
                <td align="center" class="hed" width="30%">
                  E-poçt ünvanı
                </td>
              </tr>
              <tr>
                <td align="center" class="stats">
                  1
                </td>
                <td align="left">Kərimov Hüseyn</td>
                <td align="left">Binəqədi rayon şöbəsinin müdiri</td>
                <td>413-82-90&nbsp;</td>
                <td>
                  AZ-1114,6-cı mkr.,İ.Həmidov küçəsi,27 saylı poliklinikanın
                  yanı
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">2</td>
                <td align="left">Əliyev Ehtiram</td>
                <td align="left">Qaradağ rayon şöbəsinin müdiri</td>
                <td>445-49-71</td>
                <td>AZ-1063,Lökbatan qəsəbəsi,28 may küçəsi</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">3</td>
                <td align="left">Həsənov İlkin</td>
                <td align="left">Xəzər rayon şöbəsinin müdiri</td>
                <td>554-44-48</td>
                <td>AZ-1044,Şüvəlan qəsəbəsi,A.İldırım küçəsi,32</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">4</td>
                <td align="left">Quliyev Şahin</td>
                <td align="left">Yasamal rayon şöbəsinin müdiri</td>
                <td align="center">537-15-01</td>
                <td align="center">
                  <a href="http://g.co/maps/dx5sg">
                    AZ-1065,İnşaatçılar prospekti,494/20
                  </a>
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">5</td>
                <td align="left">Məhərrəmov Nizami</td>
                <td align="left">Nərimanov rayon şöbəsinin müdiri</td>
                <td align="center">465-60-49</td>
                <td align="center">AZ-1072,Aşıq Alı küçəsi,7/19</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">6</td>
                <td align="left">Nuriyev Məmməd</td>
                <td align="left">Nəsimi rayon şöbəsinin müdiri</td>
                <td align="center">440-82-36</td>
                <td align="center">AZ-1010,S.Zeynalov küçəsi,22</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">7</td>
                <td align="left">Vəliyev Məzahir</td>
                <td align="left">Nizami rayon şöbəsinin müdiri</td>
                <td align="center">422-74-75</td>
                <td align="center">
                  <a href="http://g.co/maps/46hht">
                    AZ-1096,Ə.Əzimzadə küçəsi,4
                  </a>
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">8</td>
                <td align="left">Məhərrəmov Məhərrəm</td>
                <td align="left">Sabunçu rayon şöbəsinin müdiri</td>
                <td align="center">425-67-57</td>
                <td align="center">
                  AZ-1040,Bakıxanov qəsəbəsi,B.Bünyadov küçəsi,12
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">9</td>
                <td align="left">Bağırov Güləhməd</td>
                <td align="left">Səbail rayon şöbəsinin müdiri</td>
                <td align="center">437-21-51</td>
                <td align="center">AZ-1000,Neftçilər prospekti,57</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">10</td>
                <td align="left">Məmmədov Elçin</td>
                <td align="left">Suraxanı rayon şöbəsinin müdiri</td>
                <td align="center">458-06-07</td>
                <td align="center">AZ-1042,Əmircan qəsəbəsi,Park küçəsi,32</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">11</td>
                <td align="left">Abdullayev Vüqar</td>
                <td align="left">Xətai rayon şöbəsinin müdiri</td>
                <td align="center">424-50-61</td>
                <td align="center">AZ-1030,NZS qəsəbəsi,O.Vəliyev küçəsi,40</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center" colspan="6"></td>
              </tr>
              <tr>
                <td
                  align="center"
                  class="hed"
                  colspan="6"
                  style={{ fontWeight: "bold" }}
                >
                  Şöbələr
                </td>
              </tr>
              <tr>
                <td align="center" class="hed" width="5%">
                  №
                </td>
                <td align="center" class="hed" width="22%">
                  Adı, Atasının adı
                </td>
                <td align="center" class="hed" width="27%">
                  Vəzifəsi
                </td>
                <td align="center" class="hed" width="12%">
                  Telefon
                </td>
                <td align="center" class="hed" width="23%">
                  Ünvan
                </td>
                <td align="center" class="hed" width="30%">
                  E-poçt ünvanı
                </td>
              </tr>
              <tr>
                <td align="center">1</td>
                <td align="left">Novruzov Məhərrəm</td>
                <td align="left">Abşeron rayon şöbəsinin müdiri</td>
                <td align="center">342-20-22</td>
                <td align="center">
                  Xırdalan şəhəri, M, Ə. Rəsulzadə küçəsi-239
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">2</td>
                <td align="left">Sadıqov Əvəz</td>
                <td align="left">Ağdam rayon şöbəsinin müdiri</td>
                <td align="center">026-325-02-52</td>
                <td align="center">Quzanlı qəsəbəsi</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">3</td>
                <td align="left">Məmtiyev Raquf</td>
                <td align="left">Ağdaş rayon şöbəsinin müdiri</td>
                <td align="center">020-235-50-28</td>
                <td align="center">H. Əliyev prospekti -97</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">4</td>
                <td align="left">Məsmalıyev Oqtay</td>
                <td align="left">Ağstafa rayon şöbəsinin müdiri</td>
                <td align="center">022-225-26-12</td>
                <td align="center">S. Vurğun küçəsi-57a. AZ 0500</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">5</td>
                <td align="left">Məmmədov Elçin</td>
                <td align="left">Ağsu rayon şöbəsinin müdiri</td>
                <td align="center">020-225-33-35</td>
                <td align="center">Ü. Hacıbəyov küçəsi 27A</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">6</td>
                <td align="left">Abbasov Rauf</td>
                <td align="left">Ağcabədi rayon şöbəsinin müdiri</td>
                <td align="center">021-275-50-54</td>
                <td align="center">M. Rəsulzadə prospekti</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">7</td>
                <td align="left">Bayramov Maarif</td>
                <td align="left">Astara rayon şöbəsinin müdiri</td>
                <td align="center">025-225-13-35</td>
                <td align="center">Nizami küçəsi- 24</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">8</td>
                <td align="left">Qaracayev Rauf</td>
                <td align="left">Balakən rayon şöbəsinin müdir müavini</td>
                <td align="center">024-295-32-17</td>
                <td align="center">N. Nərimanov küçəsi 48. AZ 0800</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">9</td>
                <td align="left">Vəliyev Anar</td>
                <td align="left">Beyləqan rayon şöbəsinin müdiri</td>
                <td align="center">021-225-9-63</td>
                <td align="center">H. Əliyev küçəsi -7</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">10</td>
                <td align="left">Nəbiyev Əlipaşa</td>
                <td align="left">Bərdə rayon şöbəsinin müdiri</td>
                <td align="center">020-205-71-11</td>
                <td align="center">İsmət Qayıbov küçəsi -15. AZ 0900</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">11</td>
                <td align="left">Əliyev Hafiz</td>
                <td align="left">Biləsuvar rayon şöbəsinin müdiri</td>
                <td align="center">025-295-00-22</td>
                <td align="center">M. F. Axundov küçəsi 218</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">12</td>
                <td align="left">Ömərov Elşad</td>
                <td align="left">Qazax rayon şöbəsinin müdiri</td>
                <td align="center">022-295-27-96</td>
                <td align="center">H. Əliyev prospekti -61v</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">13</td>
                <td align="left">Əhmədzadə Vüqar</td>
                <td align="left">Qax rayon şöbəsinin müdiri</td>
                <td align="center">024-255-22-44</td>
                <td align="center">İmam Mustafayev küçəsi -43</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">14</td>
                <td align="left">Məmmədov Ariz</td>
                <td align="left">Qəbələ rayon şöbəsinin müdiri</td>
                <td align="center">024-205-06-99</td>
                <td align="center">H. Əliyev küçəsi-31</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">15</td>
                <td align="left">Niftalıyev Məsim</td>
                <td align="left">Qobustan rayon şöbəsinin müdiri</td>
                <td align="center">020-245-22-30</td>
                <td align="center">Yeni Massiv-1</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">16</td>
                <td align="left">Hacıyev Sabir</td>
                <td align="left">Quba rayon şöbəsinin müdiri</td>
                <td align="center">023-335-26-15</td>
                <td align="center">Qəbələ küçəsi-17</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">17</td>
                <td align="left">Məmmədov Cəlaləddin</td>
                <td align="left">Qubadlı rayon şöbəsinin müdiri</td>
                <td align="center">018-655-41-37</td>
                <td align="center">
                  Sumqayıt şəhəri, 21-ci məhəllə, Mehdi Hüseynzadə küçəsi-36
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">18</td>
                <td align="left">Tahirov Arif</td>
                <td align="left">Qusar rayon şöbəsinin müdiri</td>
                <td align="center">023-385-40-94</td>
                <td align="center">Füzuli küçəsi -21. AZ 3800</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">19</td>
                <td align="left">İsayev Mahir</td>
                <td align="left">Daşkəsən rayon şöbəsinin müdiri</td>
                <td align="center">022-215-52-42</td>
                <td align="center">H. Əliyev meydanı- 4</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">20</td>
                <td align="left">Əmrahov Tofiq</td>
                <td align="left">Dəvəçi rayon şöbəsinin müdiri</td>
                <td align="center">115-3-39-48</td>
                <td align="center">H. Əliyev prospekti</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">21</td>
                <td align="left">Xıdırov Sərdar</td>
                <td align="left">Zaqatala rayon şöbəsinin müdiri</td>
                <td align="center">024-225-68-88</td>
                <td align="center">Vidadi küçəsi</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">22</td>
                <td align="left">İbrahimov Zabit</td>
                <td align="left">Zərdab rayon şöbəsinin müdiri</td>
                <td align="center">020-296-60-66</td>
                <td align="center">20 yanvar küçəsi-15</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">23</td>
                <td align="left">Rüstəmov Əli</td>
                <td align="left">Zəngilan rayon şöbəsinin müdiri</td>
                <td align="center">563-15-70</td>
                <td align="center">Ziya Bünyadov küçəsi-43</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">24</td>
                <td align="left">Əliyev İntiqam</td>
                <td align="left">İmişli rayon şöbəsinin müdiri</td>
                <td align="center">021-246-35-01</td>
                <td align="center">Həzi Aslanov küçəsi -03</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">25</td>
                <td align="left">Muradov Kamran</td>
                <td align="left">İsmayıllı rayon şöbəsinin müdiri</td>
                <td align="center">020-285-31-48</td>
                <td align="center">H. Əliyev prospekti 8. AZ 3100</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">26</td>
                <td align="left">Əzizova Zərifə</td>
                <td align="left">Yevlax rayon şöbəsinin müdiri</td>
                <td align="center">022-336-29-77</td>
                <td align="center">H. Əliyev prospekti 78</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">27</td>
                <td align="left">Mahmudov Adil</td>
                <td align="left">Yardımlı rayon şöbəsinin müdiri</td>
                <td align="center">025-206-12-33</td>
                <td align="center">H. Əliyev küçəsi-58</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">28</td>
                <td align="left">Mamedov Loğman</td>
                <td align="left">Kəlbəcər rayon şöbəsinin müdiri</td>
                <td align="center">22-58-12-45</td>
                <td align="center">
                  Gəncə şəhəri, Gülüstan qəsəbəsi, AKTA-nın 6 saylı yataqxanası
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">29</td>
                <td align="left">Kərimov Ruslan</td>
                <td align="left">Kürdəmir rayon şöbəsinin müdiri</td>
                <td align="center">020-256-62-07</td>
                <td align="center">Atakişili yolu. AZ 3329</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">30</td>
                <td align="left">Əhmədov Nizami</td>
                <td align="left">Gəncə şəhəri Nizami rayon şöbəsinin müdiri</td>
                <td align="center">022-252-42-99</td>
                <td align="center">
                  Yeni Gəncə qəsəbəsi, İcra Hakimiyyətinin inzibati binası-22
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">31</td>
                <td align="left">Qənbərov Arif</td>
                <td align="left">Gəncə şəhəri Kəpəz rayon şöbəsinin müdiri</td>
                <td align="center">022-255-12-22</td>
                <td align="center">H. Əliyev prospekti-101</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">32</td>
                <td align="left">Məmmədov Məsud</td>
                <td align="left">Gədəbəy rayon şöbəsinin müdiri</td>
                <td align="center">022-326-00-93</td>
                <td align="center">Xəlil Haqverdiyev küçəsi- 21</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">33</td>
                <td align="left">Xəlilov Kamran</td>
                <td align="left">Göyçay rayon şöbəsinin müdiri</td>
                <td align="center">020-276-00-90</td>
                <td align="center">S. Vurğun -64</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">34</td>
                <td align="left">Nəcəfov Eyvaz</td>
                <td align="left">Goranboy rayon şöbəsinin müdiri</td>
                <td align="center">022-245-13-00</td>
                <td align="center">M. Məhərrəmov küçəsi-36</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">35</td>
                <td align="left">Cəfərov Adil</td>
                <td align="left">Göygöl rayon şöbəsinin müdiri</td>
                <td align="center">022-205-23-77</td>
                <td align="center">M. Ə. Sabir küçəsi -1A</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">36</td>
                <td align="left">Əzimov Ramiz</td>
                <td align="left">Lənkəran şəhər şöbəsinin müdiri</td>
                <td align="center">025-255-08-59</td>
                <td align="center">Ş. Axundov küçəsi-15</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">37</td>
                <td align="left">Cəbrayılov Əliş</td>
                <td align="left">Laçın rayon şöbəsinin müdiri</td>
                <td align="center">026-215-50-69</td>
                <td align="center"></td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">38</td>
                <td align="left">Məmiyev Təzəxan</td>
                <td align="left">Lerik rayon şöbəsinin müdiri</td>
                <td align="center">025-274-40-31</td>
                <td align="center">A. Asadullayev -35</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">39</td>
                <td align="left">Hətəmov Cəlil</td>
                <td align="left">Mingəçevir şəhər şöbəsinin müdiri</td>
                <td align="center">024-274-26-62</td>
                <td align="center">H. Əliyev pospekti 28/12</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">40</td>
                <td align="left">Şəmşirov Nahid</td>
                <td align="left">Masallı rayon şöbəsinin müdiri</td>
                <td align="center">025-215-61-02</td>
                <td align="center">Qarabağ-3</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">41</td>
                <td align="left">Əliyev Ruslan</td>
                <td align="left">Naftalan şəhər şöbəsinin müdiri</td>
                <td align="center">022-352-30-55</td>
                <td align="center">Ş. Qurbanov-1</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">42</td>
                <td align="left">İbrahimov Cavid</td>
                <td align="left">Nefçala rayon şöbəsinin müdiri</td>
                <td align="center">021-263-34-00</td>
                <td align="center">H. Əliyev pospekti -35</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">43</td>
                <td align="left">Valehov Şirin</td>
                <td align="left">Oğuz rayon şöbəsinin müdiri</td>
                <td align="center">024-215-34-73</td>
                <td align="center">H. Əliyev küçəsi-64</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">44</td>
                <td align="left">İsmayılov İsmayıl</td>
                <td align="left">Sumqayıt şəhər şöbəsinin müdiri</td>
                <td align="center">418-99-91</td>
                <td align="center">9-cu mikrarayon</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">45</td>
                <td align="left">Miriyev Hafiz</td>
                <td align="left">Saatlı rayon şöbəsinin müdiri</td>
                <td align="center">021-285-21-01</td>
                <td align="center">H. Əliyev pospekti -91</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">46</td>
                <td align="left">Quliyev Əlqəmə</td>
                <td align="left">Sabirabad rayon şöbəsinin müdiri</td>
                <td align="center">021-235-50-06</td>
                <td align="center">İ. İsgəndərov küçəsi-9</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">47</td>
                <td align="left">Vahidov Vahid</td>
                <td align="left">Salyan rayon şöbəsinin müdiri</td>
                <td align="center">021-255-50-61</td>
                <td align="center">Səməd Vurğun-80A</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">48</td>
                <td align="left">Zeynalov Afiq</td>
                <td align="left">Samux rayon şöbəsinin müdiri</td>
                <td align="center">022-275-10-75</td>
                <td align="center">H. Əliyev pospekti-</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">49</td>
                <td align="left">Yunusova Güllər</td>
                <td align="left">Siyəzən rayon şöbəsinin müdiri</td>
                <td align="center">023-304-09-04</td>
                <td align="center">Tofiq İsmayılov-3A</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">50</td>
                <td align="left">Bağırov Elxan</td>
                <td align="left">Tərtər rayon şöbəsinin müdiri</td>
                <td align="center">022-235-16-17</td>
                <td align="center">Nizami küçəsi-23</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">51</td>
                <td align="left">Əhmədov Zöhrab</td>
                <td align="left">Tovuz rayon şöbəsinin müdiri</td>
                <td align="center">022-315-00-40</td>
                <td align="center">Fariz Ələkbərov küçəsi</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">52</td>
                <td align="left">Mehdiyev Ramiz</td>
                <td align="left">Ucar rayon şöbəsinin müdiri</td>
                <td align="center">020-213-01-17</td>
                <td align="center">N. Nərimanov küçəsi-6</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">53</td>
                <td align="left">Hətəmov Zəfər</td>
                <td align="left">Füzuli rayon şöbəsinin müdiri</td>
                <td align="center">141-5-54-06</td>
                <td align="center">Horadiz şəhəri</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">54</td>
                <td align="left">İsrafilov Şahin</td>
                <td align="left">Xaçmaz rayon şöbəsinin müdiri</td>
                <td align="center">023-325-05-25</td>
                <td align="center">Aran küçəsi, döngə-1</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">55</td>
                <td align="left">Bayramov Elxan</td>
                <td align="left">Xocavənd rayon şöbəsinin müdiri</td>
                <td align="center">152-5-30-73</td>
                <td align="center">
                  Beyləqan rayonu, Haramı qəsəbəsi, 500-ailəlik Xocavənd
                  qəsəbəsi
                </td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">56</td>
                <td align="left">Rzayev İlqar</td>
                <td align="left">Xızı rayon şöbəsinin müdiri</td>
                <td align="center">023-315-01-64</td>
                <td align="center">H. Əliyev-21</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">57</td>
                <td align="left">Nəbiyeva Pərvanə</td>
                <td align="left">Xocalı rayon şöbəsinin müdiri</td>
                <td align="center">026-207-44-14</td>
                <td align="center">Goranboy rayon, Aşağı Ağcakənd qəsəbəsi</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">58</td>
                <td align="left">Qasımov Hacıağa</td>
                <td align="left">Hacıqabul rayon şöbəsinin müdiri</td>
                <td align="center">021-204-10-05</td>
                <td align="center">H. Səmədov küçəsi</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">59</td>
                <td align="left">Əhmədov Əliağa</td>
                <td align="left">Cəbrayıl rayon şöbəsinin müdiri</td>
                <td align="center">1118-4-62-02</td>
                <td align="center">Biləsuvar rayonu, 10 saylı qəsəbə</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">60</td>
                <td align="left">Salmanov Mirağa</td>
                <td align="left">Cəlilabad rayon şöbəsinin müdiri</td>
                <td align="center">025-243-52-60</td>
                <td align="center">Azərbaycan küçəsi-105</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">61</td>
                <td align="left">Xəlilov Tərlan</td>
                <td align="left">Şamaxı rayon şöbəsinin müdiri</td>
                <td align="center">020-265-14-15</td>
                <td align="center">Aşıq Məmmədağa küçəsi-54</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">62</td>
                <td align="left">Şəmiyev Natiq</td>
                <td align="left">Şəki rayon şöbəsinin müdiri</td>
                <td align="center">024-244-89-20</td>
                <td align="center">Axundov prospekti-56/A</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">63</td>
                <td align="left">Şərifov Azad</td>
                <td align="left">Şəmkir rayon şöbəsinin müdiri</td>
                <td align="center">022-302-30-33</td>
                <td align="center">H. Əliyev pospekti-11</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">64</td>
                <td align="left">Əhmədov Çingiz</td>
                <td align="left">Şirvan şəhər şöbəsinin müdiri</td>
                <td align="center">021-215-01-81</td>
                <td align="center">Məmmədəmin Rəsulzadə-12</td>
                <td align="center"></td>
              </tr>
              <tr>
                <td align="center">65</td>
                <td align="left">Nuriyev Şakir</td>
                <td align="left">Şuşa rayon şöbəsinin müdiri</td>
                <td align="center">417-21-59</td>
                <td align="center">Binəqədi rayonu Ziya Bünyadov-43</td>
                <td align="center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeherVeRayonSobeleri;
