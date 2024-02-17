import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import SiteNavigation from "../../components/navigation";
import { Empty, Pagination, Spin } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNews();
  }, []);

  const getAllNews = async (tabIndex = 1) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://udpobackend-production.up.railway.app/news/withpagesize?page=${tabIndex}`
      );

      setNewsData(data);

      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      setLoading(false);
    }
  };

  console.log(newsData);

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
          ) : newsData?.allNews?.length === 0 ? (
            <Empty
              description={false}
              style={{ paddingTop: "150px", paddingBottom: "150px" }}
            />
          ) : (
            newsData?.allNews?.map((e, i) => {
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
          }}
          total={newsData?.totalNewsCount}
          // showSizeChanger
          // showQuickJumper
          defaultPageSize={15}
          showTotal={(total) => `Ümumi ${total} xəbər var`}
        />
      </div>
    </div>
  );
};

export default NewsPage;
