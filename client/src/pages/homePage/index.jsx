import React from "react";
import "./index.scss";
import CarouselComponent from "../../components/carousel";
import NewsComponent from "../../components/news";
import ColleaguesComponent from "../../components/collegausCarousel";
import RequestComponent from "../../components/request-sorgu";

const HomePage = () => {
  return (
    <main>
      <section id="section1" className="news carousel">
        <CarouselComponent />
      </section>

      <section id="section2" className="services">
        <div className="container">
          <h1>Göstərilən Xidmətlər</h1>
          <div className="servicesCards">
            <a href="#" className="card" target="_blank">
              <i className="fa-regular fa-hospital"></i>
              <div className="serviceName">Bərpa və Müalicə Müəssisələri</div>
            </a>
            <a href="#" className="card" target="_blank">
              <i className="fa-regular fa-credit-card"></i>
              <div className="serviceName">Ünvanlı Sosial Yardım</div>
            </a>
            <a href="#" className="card" target="_blank">
              <i className="fa-solid fa-hand-holding-medical"></i>
              <div className="serviceName">Müalicə</div>
            </a>
            <a href="#" className="card" target="_blank">
              <i className="fa-solid fa-truck-medical"></i>
              <div className="serviceName">Sanatoriya Kurort Yollanışı</div>
            </a>
          </div>
        </div>
      </section>

      <section id="section3" className="news">
        <NewsComponent />
      </section>

      <section id="section4" className="colleagues">
        <ColleaguesComponent />
      </section>

      <section id="section5" className="request">
        <RequestComponent />
      </section>
    </main>
  );
};

export default HomePage;
