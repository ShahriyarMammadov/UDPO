import React, { useEffect, useState } from "react";
import "./index.scss";
import CarouselComponent from "../../components/carousel";
import NewsComponent from "../../components/news";
import ColleaguesComponent from "../../components/collegausCarousel";
import RequestComponent from "../../components/request-sorgu";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { Empty, Spin } from "antd";

const HomePage = () => {
  const [selectedNewsData, setSelectedNewsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllHomePageData();
  }, []);

  const getAllHomePageData = async () => {
    try {
      const selectedNewsData = await axios.get(
        "https://udpobackend-production.up.railway.app/selectedNews/getAllSelectedNews"
      );
      setSelectedNewsData(selectedNewsData?.data?.data);

      const newsData = await axios.get(
        "https://udpobackend-production.up.railway.app/news/latest20news"
      );
      setNewsData(newsData?.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Əlil Təşkilatları İttifaqı (UDPO)</title>
      </Helmet>

      <section id="section1" className="news carousel">
        {loading ? (
          <Spin
            size="large"
            style={{
              width: "100%",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ) : selectedNewsData.length === 0 ? (
          <Empty
            description={false}
            style={{ paddingTop: "160px", paddingBottom: "160px" }}
          />
        ) : (
          <CarouselComponent data={selectedNewsData} />
        )}
      </section>

      <section id="section2" className="services">
        <div className="container">
          <h1>Göstərilən Xidmətlər</h1>
          <div className="servicesCards">
            <Link to={"/xidmetler/berpavemualicemerkezleri"} className="card">
              <i className="fa-regular fa-hospital"></i>
              <div className="serviceName">Bərpa və Müalicə Müəssisələri</div>
            </Link>
            <Link to={"/xidmetler/unvanlisosialyardim"} className="card">
              <i className="fa-regular fa-credit-card"></i>
              <div className="serviceName">Ünvanlı Sosial Yardım</div>
            </Link>
            <Link to={"/xidmetler/mualice"} className="card">
              <i className="fa-solid fa-hand-holding-medical"></i>
              <div className="serviceName">Müalicə</div>
            </Link>
            <Link to={"/elillik/elilliyinteyinolunmasi"} className="card">
              <i className="fa-solid fa-wheelchair"></i>
              <div className="serviceName">Əlilliyin Təyin Olunması</div>
            </Link>
            <Link to={"/elillik/sosialmuavinet"} className="card">
              <i className="fa-regular fa-lightbulb"></i>
              <div className="serviceName">Sosial Müavinət</div>
            </Link>
            <Link to={"/xidmetler/reabilitasiyaavadanliqlari"} className="card">
              <i className="fa-solid fa-stethoscope"></i>
              <div className="serviceName">Reabilitasiya Avadanlıqları</div>
            </Link>
            <Link to={"/xidmetler/muavinetveteqaud"} className="card pad">
              <i className="fa-regular fa-handshake"></i>
              <div className="serviceName">
                Müavinət və təqaüdlərin təyin olunması
              </div>
            </Link>
            <Link to={"/elillik/emekpensiyalari"} className="card">
              <i className="fa-regular fa-credit-card"></i>
              <div className="serviceName">Əmək Pensiyaları</div>
            </Link>
          </div>
        </div>
      </section>

      <section id="section3" className="projects">
        <div className="container">
          <h1>Layihələr</h1>
          <div className="projectsCards">
            <Link to="/layiheler/cariproject" className="card">
              <i class="fa-solid fa-bolt"></i>
              <p>Cari</p>
            </Link>
            <Link to="/layiheler/cariproject" className="card">
              <i class="fa-solid fa-calendar-check"></i>
              <p>Bitmiş</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="section4" className="news">
        {loading ? (
          <Spin
            size="large"
            style={{
              width: "100%",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        ) : newsData?.allNews?.length === 0 ? (
          <>
            <h1 className="container" style={{ padding: "10px" }}>
              Xəbərlər
            </h1>
            <Empty
              description={false}
              style={{ paddingTop: "150px", paddingBottom: "150px" }}
            />
          </>
        ) : (
          <NewsComponent newsData={newsData} />
        )}

        <div className="container" style={{ padding: "10px" }}>
          <Link to={"/xeberler"} className="moreNewsBtn">
            BÜTÜN XƏBƏRLƏR <i className="fa-solid fa-caret-right"></i>
          </Link>
        </div>
      </section>

      <section id="section5" className="colleagues">
        <ColleaguesComponent />
      </section>

      <section id="section6" className="request">
        <RequestComponent />
      </section>

      <section id="section7">
        <div className="container">
          <p>Köhnə vebsayta keçid</p>

          <a href="https://udpo.az" target="_blank">
            Keçid edin
          </a>
        </div>
      </section>

      <div style={{}} className="container">
        <a href="https://info.flagcounter.com/DaV8">
          <img
            style={{ width: "350px" }}
            src="https://s01.flagcounter.com/countxl/DaV8/bg_FFFFFF/txt_000000/border_1D2ECC/columns_4/maxflags_20/viewers_Ziyarerciler/labels_1/pageviews_1/flags_0/percent_0/"
            alt="Flag Counter"
            border="0"
          />
        </a>
      </div>
    </main>
  );
};

export default HomePage;
