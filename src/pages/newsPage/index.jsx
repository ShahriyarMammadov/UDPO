import React, { useEffect } from "react";
import "./index.scss";

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>NewsPage</div>;
};

export default NewsPage;
