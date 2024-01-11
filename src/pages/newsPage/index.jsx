import React, { useEffect } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import SiteNavigation from "../../components/navigation";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fakeData = [
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "“Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”",
      text: "“Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
    {
      name: "12 dekabr Ümumilli lider Heydər Əliyevin anım günüdür.",
      text: "2023-cü il beynəlxalq əlillliyi olan şəxslər gününün mövzusu: “Əlilliyi olan şəxslərlə birlikdə və əlilliyi olan şəxslər tərəfindən DİM-ləri xilas etmək və onlara nail olmaq üçün fəaliyyətdə birləşək”. Mövzu 2015-ci ildən bəri Birləşmiş Millətlər Təşkilatına üzv dövlətlər tərəfindən qəbul edilən Dayanıqlı İnkişaf Məqsədləri (SDGs) üzrə 2030 Gündəliyinə diqqət yetirir.",
      coverImage: "https://udpo.az/uploads/h%C9%99.jpg",
      date: "14.12.2023",
      id: "465as4d9a79",
    },
  ];

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
            subcategory: "",
          }}
        />

        <div className="allNews">
          {fakeData?.map((e, i) => {
            return (
              <Link to={`/xeberler/${e.id}`} className="newsCard" key={i}>
                <img src={e?.coverImage} alt={e?.name} />
                <p>{e?.date}</p>
                <h4>{e?.name}</h4>
              </Link>
            );
          })}
        </div>

        <Pagination
          responsive={true}
          onChange={(page, pageSize) => {
            console.log(page, pageSize);
          }}
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
};

export default NewsPage;
