import NotFound from "../components/notFound";
import MainRoot from "../components/root/site";
import HomePage from "../pages/homePage";
import NewsPage from "../pages/newsPage";
import BerpaVeMualiceMerkezleri from "../pages/xidmetlerPages/berpaMualiceMerkezleri";
import Mualice from "../pages/xidmetlerPages/mualice";
import QaynarXettler from "../pages/xidmetlerPages/qaynarXettler";
import ReabilitasiyaAvadanliqlari from "../pages/xidmetlerPages/reabilitasiyaAvadanliqlari";
import SosialXidmetMuessiseleri from "../pages/xidmetlerPages/sosialXidmetMuessiseleri";
import UnvanliSosialYardim from "../pages/xidmetlerPages/unvanliSosialYardim";
import BizKimik from "../pages/bizKimik";
import Members from "../pages/members";
import BankomatdanIstifadeQaydalari from "../pages/xidmetlerPages/bankomatdanİstifade";
import ElilliyinTeyinOlunmasi from "../pages/elillik/elilliyinTeyinOlunmasi";
import UmumiMelumat from "../pages/elillik/umumiMelumat";
import BeynelxalqGunler from "../pages/elillik/beynelxalqGunler";
import SosialMuavinet from "../pages/elillik/sosialMuavinet";
import SeherVeRayonSobeleri from "../pages/elillik/seherRayonSobeleri";
import EmekPensiyalari from "../pages/elillik/emekPensiyalari";
import CariProject from "../pages/cariProject";
import NewsDetail from "../pages/newsDetail";
import PhotoGallery from "../pages/qalereya/fotoQalereya";
import Contactpage from "../pages/elaqe";
import QonaqKitabi from "../pages/qonaqKitabi";
import XidmetlerPage from "../pages/xidmetlerPages";
import MuavinatveTeqaudlerinTeyinOlunmasiPage from "../pages/xidmetlerPages/MuavinatVeTeqaudlerinTeyinOlunmasi";
import QhtQanunPage from "../pages/QHT/Qanun";
import QhtTesisSenedleriPage from "../pages/QHT/TesisSenedleri";

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
        path: "/xeberler",
        element: <NewsPage />,
      },
      {
        path: "/haqqimizda/bizkimik",
        element: <BizKimik />,
      },
      {
        path: "/haqqimizda/members",
        element: <Members />,
      },
      {
        path: "xeberler/:id",
        element: <NewsDetail />,
      },
      {
        path: "xidmetler",
        element: <XidmetlerPage />,
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
        path: "xidmetler/MuavinatveTeqaudlerinTeyinOlunmasi",
        element: <MuavinatveTeqaudlerinTeyinOlunmasiPage />,
      },
      {
        path: "qht/qanun",
        element: <QhtQanunPage />,
      },
      {
        path: "qht/tesissenedleri",
        element: <QhtTesisSenedleriPage />,
      },
      {
        path: "elillik/elilliyinteyinolunmasi",
        element: <ElilliyinTeyinOlunmasi />,
      },
      {
        path: "elillik/beynelxalqgunler",
        element: <BeynelxalqGunler />,
      },
      {
        path: "elillik/sosialmuavinet",
        element: <SosialMuavinet />,
      },
      {
        path: "elillik/dsmfseherverayonsobeleri",
        element: <SeherVeRayonSobeleri />,
      },
      {
        path: "elillik/emekpensiyalari",
        element: <EmekPensiyalari />,
      },
      {
        path: "layiheler/cariproject",
        element: <CariProject />,
      },
      {
        path: "qalereya/fotoqaleri",
        element: <PhotoGallery />,
      },
      {
        path: "elaqe",
        element: <Contactpage />,
      },
      {
        path: "qonaqkitabi",
        element: <QonaqKitabi />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
