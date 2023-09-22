import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const NewsComponent = () => {
  return (
    <div id="newsComponent">
      <div className="container">
        <h1>Xəbərlər</h1>
        <div className="newsCards">
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
          <Link to={"/xeber"} className="newsCard">
            <div className="image">
              <img
                src="https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=2000"
                alt="News"
              />
              <p>Bu gunlerde</p>
            </div>
          </Link>
        </div>

        <Link to={"/xeberler"} className="moreNewsBtn">
          BÜTÜN XƏBƏRLƏR <i className="fa-solid fa-caret-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default NewsComponent;
