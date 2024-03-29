import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.png";
import { Button, Drawer, Dropdown, Collapse } from "antd";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // SCROLL
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [visible, setVisible] = useState(true);

  // HEADERTOP VISIBLE
  const threshold = 100;
  const scrollThreshold = 400;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos < threshold;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);

      // if (currentScrollPos >= scrollThreshold) {
      //   setColorChange(true);
      // } else {
      //   setColorChange(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const items = [
    {
      key: "1",
      label: "RU",
    },
    {
      key: "2",
      label: "EN",
    },
    {
      key: "3",
      label: "AZ",
    },
  ];

  // DRAWER
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  // DRAWER ITEMS
  const draweritems = [
    {
      key: "1",
      label: "Haqqımızda",
      children: (
        <>
          <NavLink
            to={"/haqqimizda/bizkimik"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Biz Kimik
          </NavLink>
          <NavLink
            to={"/haqqimizda/members"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Üzvlər
          </NavLink>
          <NavLink
            to={"/layihe/layiheler"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Layihələr
          </NavLink>
        </>
      ),
    },
    {
      key: "2",
      label: "Xidmətlər",
      children: (
        <>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/berpavemualicemerkezleri"}
            title="BƏRPA VƏ MÜALİCƏ"
            onClick={onClose}
          >
            Bərpa və Müalicə
          </NavLink>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/unvanlisosialyardim"}
            title="ÜNVANLI SOSİAL YARDIM"
            onClick={onClose}
          >
            Ünvanlı Sosial Yardım
          </NavLink>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/mualice"}
            title="MÜALİCƏ"
            onClick={onClose}
          >
            Müalicə
          </NavLink>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/reabilitasiyaavadanliqlari"}
            title=" REABİLİTASİYA AVADANLIQLARI"
            onClick={onClose}
          >
            Reabilitasiya Avadanlıqları
          </NavLink>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/MuavinatveTeqaudlerinTeyinOlunmasi"}
            title="SOSİAL XİDMƏT MÜƏSSİSƏLƏRİ"
            onClick={onClose}
          >
            Müavinət və Təqaüdlərin təyin olunması
          </NavLink>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/sosialxidmetmuessiseleri"}
            title="SOSİAL XİDMƏT MÜƏSSİSƏLƏRİ"
            onClick={onClose}
          >
            Sosial Xidmət Müəssisələri
          </NavLink>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/BankomatdanIstifadeQaydalari"}
            title="BANKOMATDAN İSTİFADƏ QAYDALARI"
            onClick={onClose}
          >
            Bankomatdan İstifadə Qaydaları
          </NavLink>
          <NavLink
            style={{ display: "block", marginTop: "10px" }}
            to={"/xidmetler/qaynarxettler"}
            title=" QAYNAR XƏTTLƏR"
            onClick={onClose}
          >
            Qaynar Xəttlər
          </NavLink>
        </>
      ),
    },
    {
      key: "3",
      label: "Əlillik",
      children: (
        <>
          <NavLink
            to={"/elillik/umumimelumat"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Ümumi Məlumat
          </NavLink>
          <NavLink
            to={"/elillik/elilliyinteyinolunmasi"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Əlilliyin Təyin Olunması
          </NavLink>
          <NavLink
            to={"/elillik/beynelxalqgunler"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Beynəlxalq günlər
          </NavLink>
          <NavLink
            to={"/elillik/sosialmuavinet"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Sosial Müavinət
          </NavLink>

          <NavLink
            to={"/elillik/dsmfseherverayonsobeleri"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            DSMF-ın şəhər və rayon şöbələri
          </NavLink>
        </>
      ),
    },
    {
      key: "4",
      label: "QHT",
      children: (
        <>
          <NavLink
            to={"/qht/qanun"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Qanun QHT
          </NavLink>
          <NavLink
            to={"/qht/koalisiyalar"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Koalisiyalar
          </NavLink>
          <NavLink
            to={"/qht/ictimaisuralar"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            İctimai Şuralar
          </NavLink>
        </>
      ),
    },
    {
      key: "5",
      label: "Xəbərlər",
      children: (
        <>
          <NavLink
            to={"/xeberler"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Xəbərlər
          </NavLink>
        </>
      ),
    },
    {
      key: "6",
      label: "Qalereya",
      children: (
        <>
          <NavLink
            to={"/"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Foto Qalereya
          </NavLink>
        </>
      ),
    },
    {
      key: "7",
      label: "Qonaq Kitabı",
      children: (
        <>
          <NavLink
            to={"/qonaqkitabi"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Qonaq Kitabı
          </NavLink>
        </>
      ),
    },
    {
      key: "8",
      label: "Əlaqə",
      children: (
        <>
          <NavLink
            to={"elaqe"}
            style={{ display: "block", marginTop: "10px" }}
            onClick={onClose}
          >
            Əlaqə
          </NavLink>
        </>
      ),
    },
  ];

  return (
    <header className={`${visible ? "" : "resize"}`}>
      <div id={`header`}>
        <div
          className={`${visible ? "active" : "inactive"} headerTop container`}
        >
          <div className="left">
            <Link to={"/"}>
              <img src={logo} alt="UDPO" />
              <span>
                Azərbaycan Respublikası Əlil Təşkilatları İttifaqı {"(ƏTİ)"}
              </span>
            </Link>
          </div>
          <i class="fa-solid fa-bars" onClick={showDrawer}></i>
          <div className="right">
            <div className="tel">
              <a href="tel:+994124349329">
                <i className="fa-solid fa-phone"></i>
                (+994 12) 434 93 29
              </a>
              <div className="social_bar">
                <ul>
                  <a href="https://www.facebook.com/udpo.az" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.facebook.com/udpo.az" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/udpo.az" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC8rOR8zkmYtnFlcBR3ZQCMA/videos"
                    target="_blank"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </ul>
              </div>
              <i className="fa-solid fa-magnifying-glass"></i>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <Button>AZ</Button>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="headerBottom">
          <nav className="container">
            <div className="dropdown">
              <Link to={"/"} className="parent">
                BAŞ SƏHİFƏ
              </Link>
            </div>

            <div className="dropdown">
              <NavLink to={"/haqqimizda/bizkimik"} className="parent ">
                HAQQIMIZDA <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={"/haqqimizda/bizkimik"} title="bizkimik">
                  <div className="text">BİZ KİMİK</div>
                </NavLink>
                <NavLink to={"/haqqimizda/members"} title="üzvlər">
                  <div className="text">ÜZVLƏR</div>
                </NavLink>
                <NavLink to={"/layihe/layiheler"} title="cari layihələr">
                  <div className="text">LAYİHƏLƏR</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/xidmetler"} className="parent">
                XİDMƏTLƏR <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink
                  to={"/xidmetler/berpavemualicemerkezleri"}
                  title="Zəmanət"
                >
                  <div className="text">BƏRPA VƏ MÜALİCƏ</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/unvanlisosialyardim"}
                  title="Terminlər"
                >
                  <div className="text">ÜNVANLI SOSİAL YARDIM</div>
                </NavLink>
                <NavLink to={"/xidmetler/mualice"} title="Visitor Analytics">
                  <div className="text">MÜALİCƏ</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/reabilitasiyaavadanliqlari"}
                  title="Visitor Analytics"
                >
                  <div className="text">REABİLİTASİYA AVADANLIQLARI</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/MuavinatveTeqaudlerinTeyinOlunmasi"}
                  title="Muavinat və Təqaüdlərin Təyin Olunması"
                >
                  <div className="text">
                    MÜAVİNƏT VƏ TƏQAÜDLƏRİN TƏYİN OLUNMASI
                  </div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/sosialxidmetmuessiseleri"}
                  title="Visitor Analytics"
                >
                  <div className="text">SOSİAL XİDMƏT MÜƏSSİSƏLƏRİ</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/BankomatdanIstifadeQaydalari"}
                  title="Visitor Analytics"
                >
                  <div className="text">BANKOMATDAN İSTİFADƏ QAYDALARI</div>
                </NavLink>
                <NavLink to={"/xidmetler/qaynarxettler"} title="Qaynar Xəttlər">
                  <div className="text">QAYNAR XƏTTLƏR</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/elillik/umumimelumat"} className="parent">
                ƏLİLLİK <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={"/elillik/umumimelumat"} title="ÜMUMİ MƏLUMAT">
                  <div className="text">ÜMUMİ MƏLUMAT</div>
                </NavLink>
                <NavLink
                  to={"/elillik/elilliyinteyinolunmasi"}
                  title="ƏLİLLİYİN TƏYİN OLUNMASI"
                >
                  <div className="text">ƏLİLLİYİN TƏYİN OLUNMASI</div>
                </NavLink>
                <NavLink
                  to={"/elillik/beynelxalqgunler"}
                  title="Beynəlxalq Günlər"
                >
                  <div className="text">BEYNƏLXALQ GÜNLƏR</div>
                </NavLink>
                <NavLink to={"/elillik/sosialmuavinet"} title="SOSİAL MÜAVİNƏT">
                  <div className="text">SOSİAL MÜAVİNƏT</div>
                </NavLink>
                <NavLink
                  to={"/elillik/dsmfseherverayonsobeleri"}
                  title="DSMF-in ŞƏHƏR VƏ RAYON ŞÖBƏLƏRİ"
                >
                  <div className="text">DSMF-in ŞƏHƏR VƏ RAYON ŞÖBƏLƏRİ</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/qht/qanun"} className="parent">
                QHT <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={"/qht/qanun"} title="Zəmanət">
                  <div className="text">QANUN {`QHT`}</div>
                </NavLink>
                <NavLink to={"/qht/koalisiyalar"} title="Visitor Analytics">
                  <div className="text">KOALİSİYALAR</div>
                </NavLink>
                <NavLink to={"/qht/ictimaisuralar"} title="Visitor Analytics">
                  <div className="text">İCTİMAİ ŞURALAR</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/xeberler"} className="parent">
                XƏBƏRLƏR
              </NavLink>
            </div>

            <div className="dropdown">
              <NavLink to={"/qalereya/fotoqaleri"} className="parent">
                QALEREYA <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                {/* <NavLink to={"/qalereya/fotoqaleri"} title="Video Qalereya">
                  <div className="text">VİDEO QALEREYA</div>
                </NavLink> */}
                <NavLink to={"/qalereya/fotoqaleri"} title="Foto Qalereya">
                  <div className="text">FOTO QALEREYA</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/qonaqkitabi"} className="parent">
                QONAQ KİTABI
              </NavLink>
            </div>

            <div className="dropdown">
              <NavLink to={"elaqe"} className="parent" title="Əlaqə">
                ƏLAQƏ
              </NavLink>
            </div>
          </nav>
        </div>
      </div>

      <Drawer
        title="UDPO.az"
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Collapse accordion items={draweritems} />
      </Drawer>
    </header>
  );
};

export default Header;
