import React, { useState } from "react";
import "./index.scss";
import axios from "axios";

const RequestComponent = () => {
  const [radioValue, setRadioValue] = useState("");

  const sendRequest = async () => {
    try {
      const { data } = await axios.post(`asdasdsdnfkjsa`, {
        radioValue,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="request">
      <div className="container request">
        <h1>SORĞU</h1>
        <h4>
          Mövzu: ƏLİLLİYİ OLAN İNSANLARIN CƏMİYYƏTƏ İNTEQRASİYASINA NƏ MANE OLUR
        </h4>

        <hr />
        <form
          action=""
          onChange={(e) => {
            setRadioValue(e.target.value);
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <input
              type="radio"
              id="one"
              name="drone"
              value="Qanunların zəif icra olunması"
            />
            <label htmlFor="one">Qanunların zəif icra olunması</label>
          </div>

          <div>
            <input
              type="radio"
              id="two"
              name="drone"
              value="İnfrastrukturun uyğun olmaması"
            />
            <label htmlFor="two">İnfrastrukturun uyğun olmaması</label>
          </div>

          <div>
            <input
              type="radio"
              id="four"
              name="drone"
              value="Əlilliyi olan insanların hüquqlarını bilməməsi "
            />
            <label htmlFor="four">
              Əlilliyi olan insanların hüquqlarını bilməməsi{" "}
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="five"
              name="drone"
              value="İctimai nəzarətin zəif olması"
            />
            <label htmlFor="five">İctimai nəzarətin zəif olması</label>
          </div>

          <div>
            <input
              type="radio"
              id="six"
              name="drone"
              value="Laqeydlilik və məsuliyyətsizlik"
            />
            <label htmlFor="six">Laqeydlilik və məsuliyyətsizlik</label>
          </div>
          <button className="submitBtn" onClick={sendRequest}>
            Göndər
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestComponent;
