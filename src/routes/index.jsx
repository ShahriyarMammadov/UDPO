import NotFound from "../components/notFound";
import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import HomePage from "../pages/homePage";
import NewsPage from "../pages/newsPage";
import BerpaVeMualiceMerkezleri from "../pages/xidmetlerPages/berpaMualiceMerkezleri";
import Mualice from "../pages/xidmetlerPages/mualice";
import ReabilitasiyaAvadanliqlari from "../pages/xidmetlerPages/reabilitasiyaAvadanliqlari";
import UnvanliSosialYardim from "../pages/xidmetlerPages/unvanliSosialYardim";

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
      {
        path: "xidmetler/berpavemualicemerkezleri",
        element: <BerpaVeMualiceMerkezleri />,
      },
      {
        path: "xidmetler/mualice",
        element: <Mualice />,
      },
      {
        path: "xidmetler/unvanlisosialyardim",
        element: <UnvanliSosialYardim />,
      },
      {
        path: "xidmetler/reabilitasiyaavadanliqlari",
        element: <ReabilitasiyaAvadanliqlari />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
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
];

export default ROUTES;
