import React, { useEffect } from "react";
import "./index.scss";
import CarouselComponent from "../../components/carousel";
import NewsComponent from "../../components/news";
import ColleaguesComponent from "../../components/collegausCarousel";
import RequestComponent from "../../components/request-sorgu";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Əlil Təşkilatları İttifaqı (UDPO)</title>
      </Helmet>

      <section id="section1" className="news carousel">
        <CarouselComponent />
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
            <a href="#" className="card">
              <i class="fa-solid fa-bolt"></i>
              <p>Cari</p>
            </a>
            <a href="#" className="card">
              <i class="fa-solid fa-calendar-check"></i>
              <p>Bitmiş</p>
            </a>
          </div>
        </div>
      </section>

      <section id="section4" className="news">
        <NewsComponent />
        <div className="container">
          {" "}
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
    </main>
  );
};

export default HomePage;
