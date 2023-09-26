import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.png";
import { Button, Dropdown } from "antd";
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
          <div className="right">
            <div className="tel">
              <a href="tel:+994124344836">
                <i className="fa-solid fa-phone"></i>
                (+994 12) 434 48 36
              </a>
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
              <NavLink to={"/haqqimizda"} className="parent first">
                AZƏRBAYCAN <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={"/haqqimizda/zemanet"} title="Zəmanət">
                  <div className="text">ƏTRAFLI MƏLUMATLAR</div>
                </NavLink>
                <NavLink to={"/haqqimizda/musteri_xidmeti"} title="Terminlər">
                  <div className="text">TURİZM</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">BAYRAM GÜNLƏRİ</div>
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
                <NavLink
                  to={"/xidmetler/menzilleteminat"}
                  title="Visitor Analytics"
                >
                  <div className="text">MƏNZİLLƏ TƏMİNAT</div>
                </NavLink>
                <NavLink to={"/xidmetler/mualice"} title="Visitor Analytics">
                  <div className="text">MÜALİCƏ</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/avtomobilleteminat"}
                  title="Visitor Analytics"
                >
                  <div className="text">AVTOMOBİLLƏ TƏMİNAT</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/sanatoriyakurortyollanislari"}
                  title="Visitor Analytics"
                >
                  <div className="text">SANATORİYA-KURORT YOLLANIŞLARI</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/reabilitasiyaavadanliqlari"}
                  title="Visitor Analytics"
                >
                  <div className="text">REABİLİTASİYA AVADANLIQLARI</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/sosialxidmetmuessiseleri"}
                  title="Visitor Analytics"
                >
                  <div className="text">SOSİAL XİDMƏT MÜƏSSİSƏLƏRİ</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/elektronxidmetler"}
                  title="Visitor Analytics"
                >
                  <div className="text">ELEKTRON XİDMƏTLƏR</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/bankomatdanistifadeqaydalari"}
                  title="Visitor Analytics"
                >
                  <div className="text">BANKOMATDAN İSTİFADƏ QAYDALARI</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/menzilalanvenovbededuranlar"}
                  title="Visitor Analytics"
                >
                  <div className="text">MƏNZİL ALAN VƏ NÖVBƏDƏ DURANLAR</div>
                </NavLink>
                <NavLink
                  to={"/xidmetler/avtomobilalanlarvenovbededuranlar"}
                  title="Visitor Analytics"
                >
                  <div className="text">
                    AVTOMOBİL ALANLAR VƏ NÖVBƏDƏ DURANLAR
                  </div>
                </NavLink>
                <NavLink to={"/xidmetler/qaynarxettler"} title="Qaynar Xəttlər">
                  <div className="text">QAYNAR XƏTTLƏR</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/haqqimizda"} className="parent">
                ƏLİLLİK <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={"/haqqimizda/zemanet"} title="Zəmanət">
                  <div className="text">ÜMUMİ MƏLUMAT</div>
                </NavLink>
                <NavLink to={"/haqqimizda/musteri_xidmeti"} title="Terminlər">
                  <div className="text">ƏLİLLİYİN TƏYİN OLUNMASI</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">ƏMƏK PENSİYALARI</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">SOSİAL MÜAVİNƏT</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">TİBBİ SOSİAL EKSPERT MƏRKƏZİ</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">SOSİAL MÜAVİNƏT ALANLARIN SİYAHISI</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/haqqimizda"} className="parent">
                QHT <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={"/haqqimizda/zemanet"} title="Zəmanət">
                  <div className="text">QANUN {`QHT`}</div>
                </NavLink>
                <NavLink to={"/haqqimizda/musteri_xidmeti"} title="Terminlər">
                  <div className="text">TƏSİS SƏNƏDLƏRİ</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">KOALİSİYALAR</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">QHT XƏBƏRLƏR</div>
                </NavLink>
                <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
                  <div className="text">İCTİMAİ ŞURALAR</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/haqqimizda"} className="parent">
                XƏBƏRLƏR
              </NavLink>
            </div>

            <div className="dropdown">
              <NavLink to={"/haqqimizda"} className="parent">
                QALEREYA <i className="fa-solid fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-content">
                <NavLink to={"/haqqimizda/zemanet"} title="Zəmanət">
                  <div className="text">VİDEO QALEREYA</div>
                </NavLink>
                <NavLink to={"/haqqimizda/musteri_xidmeti"} title="Terminlər">
                  <div className="text">FOTO QALEREYA</div>
                </NavLink>
              </div>
            </div>

            <div className="dropdown">
              <NavLink to={"/haqqimizda"} className="parent">
                QONAQ KİTABI
              </NavLink>
            </div>

            <div className="dropdown">
              <NavLink to={"/haqqimizda"} className="parent">
                ƏLAQƏ
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
