import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import SiteNavigation from "../../components/navigation";
import { Pagination, Spin } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNews();
  }, []);

  const getAllNews = async (tabIndex = 1) => {
    console.log(tabIndex);
    try {
      const { data } = await axios.get(
        `https://udpobackend-production.up.railway.app/news/allNews`
      );

      setNewsData(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div id="newsPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>UDPO | Xəbərlər</title>
      </Helmet>
      <div className="container">
        <SiteNavigation
          navigationData={{
            category: "Xəbərlər",
            subcategory: "Bütün Xəbərlər",
          }}
        />

        <div className="allNews">
          {loading ? (
            <Spin
              size="large"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "60vh",
              }}
            />
          ) : (
            newsData?.map((e, i) => {
              return (
                <Link to={`/xeberler/${e._id}`} className="newsCard" key={i}>
                  <img
                    src={`https://udpobackend-production.up.railway.app/images/${e?.coverImage}`}
                    alt={e?.name}
                  />
                  <p>{e?.date?.slice(0, 10)?.replaceAll("-", ".")}</p>
                  <h4>
                    {e?.name?.length > 41
                      ? e?.name?.slice(0, 41) + "..."
                      : e?.name}
                  </h4>
                </Link>
              );
            })
          )}
        </div>

        <Pagination
          responsive={true}
          onChange={(page, pageSize) => {
            getAllNews(page);
            console.log(pageSize);
          }}
          total={newsData?.length}
          // showSizeChanger
          showQuickJumper
          showTotal={(total) => `Bu səhifədə ümumi ${total} xəbər var`}
        />
      </div>
    </div>
  );
};

export default NewsPage;
