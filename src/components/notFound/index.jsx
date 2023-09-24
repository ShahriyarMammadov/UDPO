import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div id="notFoundPage">
      <h1>404</h1>
      <h3>SƏHİFƏ TAPILMADI.</h3>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        GERI QAYIT
      </button>
    </div>
  );
};

export default NotFound;
