import React from "react";
import SiteNavigation from "../../../components/navigation";
import "./index.scss";

const BeynelxalqGunler = () => {
  return (
    <div id="beynelxalqGunler">
      <div className="container" style={{ padding: "0 10px 20px 10px" }}>
        <SiteNavigation
          navigationData={{
            category: "Əlillik",
            subcategory: "Beynəlxalq Günlər",
          }}
        />
        <h1>Beynəlxalq Günlər</h1>

        <table
          border="1"
          cellpadding="1"
          cellspacing="1"
          style={{ width: "100%", marginTop: "30px" }}
        >
          <tbody>
            <tr>
              <td>
                <strong>1</strong>
              </td>
              <td>
                <strong>4 Yanvar: Dünya Brayl Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>2</strong>
              </td>
              <td>
                <strong>21 Mart: Dünya Daun Sindromu Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>3</strong>
              </td>
              <td>
                <strong>8 Fevral: Beynəlxalq Epilepsiya Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>4</strong>
              </td>
              <td>
                <strong>15 Fevral: Dünya Uşaq Xərkəngi Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>5</strong>
              </td>
              <td>
                <strong>2 Aprel: Dünya Autizm Məlumatlandırma Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>6</strong>
              </td>
              <td>
                <strong>17 Aprel: Dünya Hemofiliya Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>7</strong>
              </td>
              <td>
                <strong>8 May: Beynəlxalq Talasemiya Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>8</strong>
              </td>
              <td>
                <strong>
                  13 İyun: Beynəlxalq Albinizm Məlumatlandırma Günü
                </strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>9</strong>
              </td>
              <td>
                <strong>
                  22 Sentyabr: Ümumdünya Xroniki Miyeloblast Leykoz Günü
                </strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>10</strong>
              </td>
              <td>
                <strong>24 Sentyabr: Beynəlxalq Lal-karlar Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>11</strong>
              </td>
              <td>
                <strong>5 Oktyabr: Dünya Habitat Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>12</strong>
              </td>
              <td>
                <strong>8 Oktyabr: Dünya Görmə Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>13</strong>
              </td>
              <td>
                <strong>10 Oktyabr: Dünya Əqli Sağlamlıq Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>14</strong>
              </td>
              <td>
                <strong>
                  17 Oktyabr: Dünya Yoxsulluğun Aradan Qaldırılması Günü
                </strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>15</strong>
              </td>
              <td>
                <strong>13 Noyabr: Beynəlxalq Korlar Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>16</strong>
              </td>
              <td>
                <strong>14 Noyabr: Ümumdünya Diabet Günü</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>17</strong>
              </td>
              <td>
                <strong>
                  3 Dekabr: Beynəlxalq Əlilliyi olan İnsanlar Günü
                </strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>18</strong>
              </td>
              <td>
                <strong>10 Dekabr: İnsan Hüquqları Günü</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BeynelxalqGunler;
