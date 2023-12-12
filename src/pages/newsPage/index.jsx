import React, { useEffect } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UDPO | Xəbərlər</title>
      </Helmet>
      NewsPage
    </div>
  );
};

export default NewsPage;
