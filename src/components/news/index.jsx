import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const NewsComponent = ({ newsData }) => {
  // console.log("news", newsDatas);

  return (
    <div id="newsComponent">
      <div className="container">
        <h1>Xəbərlər</h1>
        <div className="newsCards">
          {newsData?.map((e, i) => {
            return (
              <Link
                to={`/xeberler/${e?.name}`}
                className="newsCard"
                key={e?._id}
              >
                <div className="image">
                  <img
                    src={`https://udpobackend-production.up.railway.app/images/${e?.coverImage}`}
                    alt={e?.name}
                  />
                  <p>{e?.name?.slice(0, 32)}...</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
