import React from "react";
import ContactMe from "../../components/contactMe";
import { Avatar, Empty } from "antd";

const QonaqKitabi = () => {
  const fakeData = [
    {
      fullName: "Shahriyar Mammadov",
      email: "shahriyarmammadov16@gmail.com",
      phoneNumber: "+994503134473",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      fullName: "Elman Asgarov",
      email: "elmanasgarov@gmail.com",
      phoneNumber: "+994554844848",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ];

  return (
    <div style={{ margin: "40px 0" }}>
      <ContactMe text={"Qeydlərinizi Əlavə Edin"} />

      <div className="container" style={{ padding: "0 10px" }}>
        <h3>Yazılmış Qeydlər:</h3>

        {fakeData.length === 0 ? (
          <Empty description={false} />
        ) : (
          <div className="commentCard" style={{ margin: "10px 0" }}>
            {fakeData?.map((e, i) => {
              return (
                <div key={i} style={{ margin: "15px 0" }}>
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

                  <p>{e?.message}</p>
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
