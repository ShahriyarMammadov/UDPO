import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const RequestComponent = () => {
  const [radioValue, setRadioValue] = useState(90);
  const [sorgu, setSorgu] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://udpobackend-production.up.railway.app/sorgu/getSorgu`
      );

      setSorgu(data?.data);
    } catch (error) {
      console.log(error, error?.response?.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const sendRequest = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://udpobackend-production.up.railway.app/sorgu/sorgular/${sorgu?._id}`,
        {
          optionIndex: radioValue,
        }
      );
      // console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error, error?.response?.data);
      setLoading(false);
    }
  };

  return (
    <div id="request">
      <div className="container request">
        <h1>SORĞU</h1>
        <h4>Mövzu: {sorgu?.name}</h4>

        <hr />
        <form
          action=""
          // onChange={(e) => {
          //   setRadioValue();
          // }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {sorgu?.options?.map((e, i) => {
            return (
              <div key={e?._id}>
                <input
                  type="radio"
                  id={e?._id}
                  name="optionsGroup"
                  value={e?.option}
                  onChange={() => setRadioValue(i)}
                />
                <label htmlFor={e?._id}>{e?.option}</label>
              </div>
            );
          })}

          <Button
            type="primary"
            icon={<SendOutlined />}
            loading={loading}
            onClick={sendRequest}
            disabled={sorgu?.result?.length > 0 || radioValue === 90}
          >
            Göndər
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RequestComponent;
