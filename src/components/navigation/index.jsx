import React from "react";
import "./index.scss";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const SiteNavigation = ({ navigationData }) => {
  return (
    <Breadcrumb
      style={{ padding: "20px 5px" }}
      items={[
        {
          //   href: "/",
          title: (
            <Link to={"/"}>
              <HomeOutlined />
            </Link>
          ),
        },
        {
          title: (
            <>
              <Link to={"/xidmetler"}>{navigationData?.category}</Link>
            </>
          ),
        },
        {
          title: navigationData?.subcategory,
        },
      ]}
    />
  );
};

export default SiteNavigation;
