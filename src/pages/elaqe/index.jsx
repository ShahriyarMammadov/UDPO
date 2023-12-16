import React from "react";
import SiteNavigation from "../../components/navigation";
import "./index.scss";
import ContactMe from "../../components/contactMe";

const Contactpage = () => {
  return (
    <div id="contactPage">
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Əlaqə",
            subcategory: "",
          }}
        />

        <div className="contact">
          <p>
            Ünvan: AZ1138, Bakı şəhəri, Yasamal rayonu, Əhməd Cavad küçəsi 7a
          </p>
          <a href="tel:+994124344836">Telefon: (+994 12) 434 48 36</a>
          <a href="tel:+994503710302">Mobil: (+994 50) 371 03 02</a>
          <a href="tel:+994124349329">Tel/Faks: (+994 12) 434 93 29</a>
          <a href="mailto:union-dpo@baku.az">Email: union-dpo@baku.az;</a>
          <a href="mailto:davudrehimli@gmail.com">
            Email: davudrehimli@gmail.com;
          </a>
        </div>

        <div className="map">
          <iframe
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C6%8Flil%20T%C9%99%C5%9Fkilatlar%C4%B1%20%C4%B0ttifaq%C4%B1.%20Union%20of%20Disabled%20People%20Organisations+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        <ContactMe />
      </div>
    </div>
  );
};

export default Contactpage;
