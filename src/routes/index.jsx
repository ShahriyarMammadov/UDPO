import NotFound from "../components/notFound";
import AdminRoot from "../components/root/admin";
import MainRoot from "../components/root/site";
import HomePage from "../pages/homePage";
import NewsPage from "../pages/newsPage";
import BerpaVeMualiceMerkezleri from "../pages/xidmetlerPages/berpaMualiceMerkezleri";
import Mualice from "../pages/xidmetlerPages/mualice";
import QaynarXettler from "../pages/xidmetlerPages/qaynarXettler";
import ReabilitasiyaAvadanliqlari from "../pages/xidmetlerPages/reabilitasiyaAvadanliqlari";
import SosialXidmetMuessiseleri from "../pages/xidmetlerPages/sosialXidmetMuessiseleri";
import UnvanliSosialYardim from "../pages/xidmetlerPages/unvanliSosialYardim";
import Members from "../pages/members";
import BankomatdanIstifadeQaydalari from "../pages/xidmetlerPages/bankomatdanİstifade";

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
        path: "members",
        element: <Members />,
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
        path: "xidmetler/qaynarxettler",
        element: <QaynarXettler />,
      },
      {
        path: "xidmetler/BankomatdanIstifadeQaydalari",
        element: <BankomatdanIstifadeQaydalari />,
      },
      {
        path: "xidmetler/sosialxidmetmuessiseleri",
        element: <SosialXidmetMuessiseleri />,
      },
      {
        path: "xidmetler/sosialxidmetmuessiseleri",
        element: <SosialXidmetMuessiseleri />,
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
