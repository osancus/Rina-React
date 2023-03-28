import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import "./VerifierLog.css";

const HolderLog: FunctionComponent = () => {
    const navigate = useNavigate();

    const [ddtData, setData] = useState<any[]>([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/ddtList", {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const openProfile = (item: any) => {
        navigate("/holder-s6", {
            state: {
                item,
            },
        });
    };

    return (
        <div className="verifier-log">
            <div className="desktop-full-responsive-butt-group">
                <div className="desktop-full-responsive-butt1">
                    <b className="ente-appartenenza1">MY RINA</b>
                    <div className="left-comntent1">
                        <div className="language-change-dropdown1">
                            <div className="labelchevron2">
                                <div className="labelchevron3">
                                    <b className="link1">ITA</b>
                                    <img className="navigation-chevron-expand2" alt="" />
                                </div>
                            </div>
                            <div className="master-dropdown-left1">
                                <div className="master-desktop-dropdownfu2">
                                    <img className="shape-icon2" alt="" src="/shape2.svg" />
                                    <div className="container4">
                                        <div className="list-container2">
                                            <div className="list-12">
                                                <div className="list4">
                                                    <div className="master-utilities20">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">ITALIANO</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities20">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">ENGLISH</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities22">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities22">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities22">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                </div>
                                            </div>
                                            <img className="divider-icon2" alt="" src="/divider.svg" />
                                            <div className="list-22">
                                                <div className="list5">
                                                    <div className="master-utilities20">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities20">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities20">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities20">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                    <div className="master-utilities20">
                                                        <div className="txtleft-icon20">
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                            <div className="link1">List item</div>
                                                        </div>
                                                        <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-login1">
                            <div className="header-button-logged-in-user1">
                                <div className="logged-in-user-button1">
                                    <div className="container5">
                                        <div className="container6">
                                            <div className="navigation-chevron-expand2">
                                                <div className="master1">
                                                    <div className="master-container1">
                                                        <img className="image-icon1" alt="" src="/image1.svg" />
                                                        <img className="icon13" alt="" src="/icon1.svg" />
                                                        <div className="letter1">
                                                            <img className="image-icon1" alt="" src="/portrait.svg" />
                                                            <div className="mr1">MR</div>
                                                        </div>
                                                        <div className="overlay1" />
                                                    </div>
                                                    <img className="focus-outline-icon1" alt="" src="/focus-outline.svg" />
                                                    <img className="user-presence-icon1" alt="" src="/user-presence.svg" />
                                                </div>
                                            </div>
                                            <b className="franca-rossi1">Franca Rossi</b>
                                            <img className="navigation-chevron-expand2" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="login-dropdown-left1">
                                    <div className="master-desktop-dropdownfu3">
                                        <img className="shape-icon2" alt="" src="/shape3.svg" />
                                        <div className="container7">
                                            <div className="list-container3">
                                                <div className="list-13">
                                                    <div className="list5">
                                                        <div className="master-utilities20">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">I miei servizi</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities20">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">Le mie pratiche</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities20">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">Notifiche</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities33">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">List item</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities33">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">List item</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <img className="divider-icon3" alt="" src="/divider1.svg" />
                                                <div className="list-23">
                                                    <div className="list5">
                                                        <div className="master-utilities35">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">Impostazioni</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities35">
                                                            <div className="txtleft-icon20">
                                                                <img className="navigation-chevron-expand2" alt="" src="/general--external-link.svg" />
                                                                <b className="label39">Esci</b>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities22">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">List item</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities22">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">List item</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                        <div className="master-utilities22">
                                                            <div className="txtleft-icon20">
                                                                <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                                <div className="link1">List item</div>
                                                            </div>
                                                            <img className="placeholder-exagon39" alt="" src="/placeholder--exagon.svg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-group">
                    <div className="search1">
                        <img className="navigation-chevron-expand2" alt="" src="/vector.svg" />
                    </div>
                    <img className="frame-item" alt="" src="/group-80.svg" />
                    <Dropdown className="login-container" value="HOLDER" />
                    {/* <div className="pipe-factory-lorem-group">
            <div className="pipe-factory-lorem1">VERIFIER</div>
            <img className="vector-icon3" alt="" src="/vector1.svg" />
          </div> */}
                </div>
            </div>
            <div className="logo-menu1">
                <img className="rina-logo1" alt="" src="/rina--logo1.svg" />
                <div className="men1">
                    <div className="layoutmenu-voicesdesktop22">
                        <div className="voice12" onClick={() => navigate("/holder-s1")}>
                            Homepage
                        </div>
                    </div>
                    <div className="layoutmenu-voicesdesktop13">
                        <div className="voice12" onClick={() => navigate("/holder-s2")}>
                            Product list
                        </div>
                    </div>
                    <div className="layoutmenu-voicesdesktop12">
                        <div className="voice12" onClick={() => navigate("/holder-s3")}>
                            DDT List
                        </div>
                        <div className="highlight8" />
                    </div>
                    <div className="layoutmenu-voicesdesktop12">
                        <div className="voice12">My certificates</div>
                    </div>
                    <div className="layoutmenu-voicesdesktop5">
                        <div className="voice5">Settings</div>
                    </div>
                </div>
            </div>
            <div className="title15" style={{ left: 35 }}><b>List</b></div>

            <div >
                <div className="input-field-master-component-parent">
                    <div className="input-field-master-component">
                        <div className="left">
                            <div className="icon14">
                                <div className="icon-name14">search</div>
                            </div>
                            <div className="input-text">{`Search `}</div>
                        </div>
                    </div>
                    <div className="input-field-master-component1">
                        <div className="left">
                            <div className="icon14">
                                <div className="icon-name14">sort</div>
                            </div>
                            <div className="input-text">{`Sort `}</div>
                        </div>
                        <div className="right">
                            <div className="icon14">
                                <div className="icon-name14">keyboard_arrow_down</div>
                            </div>
                        </div>
                    </div>
                    <div className="input-field-master-component1">
                        <div className="left">
                            <div className="icon14">
                                <div className="icon-name14">filter_list</div>
                            </div>
                            <div className="input-text">Filter</div>
                        </div>
                        <div className="right">
                            <div className="icon14">
                                <div className="icon-name14">keyboard_arrow_down</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="datepicker-parent">
                    <div className="datepicker">
                        <div className="master-field-simple">
                            <div className="main-field">
                                <div className="text">
                                    <div className="left-content">
                                        <img className="placeholder-exagon39" alt="" src="/icon2.svg" />
                                        <b className="b">€</b>
                                        <b className="b1">%</b>
                                        <div className="value">Start date</div>
                                    </div>
                                    <div className="right-content">
                                        <img className="navigation-chevron-expand2" alt="" src="/icon3.svg" />
                                        <div className="number-buttons">
                                            <img className="number-input-arrows" alt="" src="/number-input--arrows.svg" />
                                            <img className="number-input-arrows1" alt="" src="/number-input--arrows1.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="helper-text" />
                            <div className="focus-outline" />
                            <div className="label43">
                                <div className="label44">Datepicker</div>
                            </div>
                        </div>
                    </div>
                    <div className="end-date">End date</div>
                    <div className="div">
                        <img className="placeholder-exagon39" alt="" src="/icon4.svg" />
                        <div className="label39">–</div>
                        <b className="b2">€</b>
                        <b className="b1">%</b>
                    </div>
                </div>
            </div>

            <div>
                {ddtData.map((item) => (
                    <div
                        className="layoutlistconsultant5"
                        style={{ position: "relative", marginTop: "5px" }}
                        onClick={() => {
                            openProfile(item);
                        }}>
                        <div className="client8">
                            <div className="client9">
                                <img className="avatar-icon4" alt="" src="/avatar5.svg" />
                                <div className="ddt-1049400000">DDT {item?.ddt_number}</div>
                            </div>
                        </div>
                        <div className="divider17" />
                        <div className="title16">{item?.type}</div>
                        <div className="divider17" />
                        <div className="co2e-300-kg-container">
                            <p className="received-from4">Received from</p>
                            <p className="still-mill-lorem4">{item?.received_from}</p>
                        </div>
                        <div className="divider19" />
                        <div className="co2e-300-kg-container">
                            <p className="received-from4">Delivered date</p>
                            <p className="still-mill-lorem4">{item?.delivered_date}</p>
                        </div>
                        <div className="divider17" />
                        <div className="co2e-300-kg-container">
                            <p className="received-from4">CO2e</p>
                            <p className="still-mill-lorem4">{item?.co2}</p>
                        </div>
                        <div className="co2e-300-kg-container">
                            <p className="received-from4">Verification date</p>
                            <p className="still-mill-lorem4">{item?.verification_date}</p>
                        </div>

                        {item?.co2 ? (
                            <div className="tag5">
                                <div className="lorem-ipsum5">Footprint neutralised</div>
                            </div>
                        ) : (
                            <div className="tag5" style={{ backgroundColor: "orange" }}>
                                <div className="lorem-ipsum5" style={{ backgroundColor: "orange" }}>
                                    not neutralised
                                </div>
                            </div>
                        )}

                        <div className="button8">
                            <div className="navigation-chevron-expand2">
                                <div className="icon-name14">more_horiz</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="verifier-log-child" />
      <img className="vector-icon4" alt="" src="/vector2.svg" /> */}
        </div>
    );
};

export default HolderLog;
