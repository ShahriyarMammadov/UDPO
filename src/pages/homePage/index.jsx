import React, { useEffect } from "react";
import "./index.scss";
import CarouselComponent from "../../components/carousel";
import NewsComponent from "../../components/news";
import ColleaguesComponent from "../../components/collegausCarousel";
import RequestComponent from "../../components/request-sorgu";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section id="section1" className="news carousel">
        <CarouselComponent />
      </section>

      <section id="section2" className="services">
        <div className="container">
          <h1>Göstərilən Xidmətlər</h1>
          <div className="servicesCards">
            <a href="#" className="card">
              <i className="fa-regular fa-hospital"></i>
              <div className="serviceName">Bərpa və Müalicə Müəssisələri</div>
            </a>
            <a href="#" className="card">
              <i className="fa-regular fa-credit-card"></i>
              <div className="serviceName">Ünvanlı Sosial Yardım</div>
            </a>
            <a href="#" className="card">
              <i className="fa-solid fa-hand-holding-medical"></i>
              <div className="serviceName">Müalicə</div>
            </a>
            <a href="#" className="card">
              <i className="fa-solid fa-truck-medical"></i>
              <div className="serviceName">Sanatoriya Kurort Yollanışı</div>
            </a>
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
