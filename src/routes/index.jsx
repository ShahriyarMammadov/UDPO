import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import HomePage from "../pages/homePage";
import NewsPage from "../pages/newsPage";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "xeberler",
        element: <NewsPage />,
      },
      //   {
      //     path: "*",
      //     element: <NotFoundPage />,
      //   },
    ],
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: [
      {
        path: "adminData/:id",
        // element: <DashBoard />,
      },
      {
        path: "user/",
        // element: <AboutMePage />,
      },
    ],
  },
  {
    path: "/login",
    // element: <LoginPage />,
  },
  {
    path: "/signup",
    // element: <SignupPage />,
  },
];

export default ROUTES;
