import React, { useEffect, useState } from "react";
import ContactMe from "../../components/contactMe";
import { Avatar, Empty, Spin } from "antd";
import "./index.scss";
import axios from "axios";

const QonaqKitabi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const { data } = await axios.get(
        `https://udpobackend-production.up.railway.app/qonaqKitabi/allData`
      );
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error, error?.response?.data);
      setLoading(false);
    }
  };
  return (
    <div id="qonaqKitabi" style={{ margin: "40px 0" }}>
      <ContactMe text={"Qeydlərinizi Əlavə Edin"} />

      <div className="container" style={{ padding: "0 10px" }}>
        <h3>Yazılmış Qeydlər:</h3>

        {loading ? (
          <Spin
            size="large"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          />
        ) : data?.length === 0 ? (
          <Empty description={false} style={{ marginTop: "40px" }} />
        ) : (
          <div className="commentCard" style={{ margin: "10px 0" }}>
            {data?.map((e, i) => {
              return (
                <div key={e?._id} style={{ margin: "15px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "10px 0",
                    }}
                  >
                    <Avatar size={50}>
                      {e?.fullName?.split(" ").map((name) => name.slice(0, 1))}
                    </Avatar>

                    <h5 style={{ fontWeight: "700", fontSize: "18px" }}>
                      {e?.fullName}
                    </h5>
                  </div>

                  <p>{e?.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default QonaqKitabi;
