import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Button, Progress } from "antd";
import { SendOutlined } from "@ant-design/icons";

const RequestComponent = () => {
  const [radioValue, setRadioValue] = useState(90);
  const [sorgu, setSorgu] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalVoteCount, setTotalVoteCount] = useState(0);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://udpobackend-production.up.railway.app/sorgu/getSorgu`
      );

      setSorgu(data?.data);

      const optionsTotalVoteCount = data?.data?.options?.reduce(
        (total, option) => total + option.voteCount,
        0
      );
      setTotalVoteCount(optionsTotalVoteCount);
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
        <h4 style={{ paddingBottom: "10px" }}>Mövzu: {sorgu?.name}</h4>

        <hr style={{ marginBottom: "20px" }} />
        {sorgu?.result?.length > 1 ? (
          <div>
            {sorgu?.result?.map((e, i) => {
              return (
                <div className="resultsDiv">
                  <p>{e?.option}</p>
                  <Progress
                    percent={e?.percentage}
                    status="active"
                    strokeColor={{
                      from: "#108ee9",
                      to: "#87d068",
                    }}
                  />
                </div>
              );
            })}
            <p style={{ marginTop: "10px" }}>
              {" "}
              Sorğuda İştirak Edənlərin Sayı: {totalVoteCount} Nəfər
            </p>
          </div>
        ) : (
          <form
            action=""
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
        )}
      </div>
    </div>
  );
};

export default RequestComponent;
