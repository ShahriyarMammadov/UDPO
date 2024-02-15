import React, { useEffect, useState } from "react";
import SiteNavigation from "../../components/navigation";
import "./index.scss";
import ContactMe from "../../components/contactMe";
import axios from "axios";
import { Spin } from "antd";

const Contactpage = () => {
  const [contactData, setContactData] = useState({});
  const [loading, setLoading] = useState(true);

  // get contact data
  const getContactData = async () => {
    try {
      const { data } = await axios.get(
        "https://udpobackend-production.up.railway.app/contact/getContactData"
      );
      setContactData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <div id="contactPage">
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Əlaqə",
            subcategory: "",
          }}
        />

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
        ) : (
          <>
            <div className="contact">
              <p>{contactData?.location}</p>
              <a href={`tel:+994503710302`}>
                Əlaqə: {contactData?.phoneNumber}
              </a>
              <a href="mailto:davudrehimli@gmail.com">
                Email: {contactData?.email}
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

            <ContactMe text={"Bizə Müraciət"} />
          </>
        )}
      </div>
    </div>
  );
};

export default Contactpage;
