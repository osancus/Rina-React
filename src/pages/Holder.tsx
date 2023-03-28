import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import axios from "axios";
import List from "../components/List";
import "./Verifier.css";

const Holder: FunctionComponent = () => {
  const navigate = useNavigate();
  const [productsData, setProducts] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/productData", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const openprofile1 = (item: any) => {
    navigate("/holder-s5", {
      state: {
        item,
      },
    });
  };

  const openprofile2 = () => {
    navigate("/holder-s4", {
      state: {
        productsData,
      },
    });
  };
  return (
    <>
      <div className="holder">
        <div className="title50" style={{ left: 30 }}><b>Product list</b></div>
        <div className="input-field-master-component-group">
          <div className="input-field-master-component3">
            <div className="left3">
              <div className="icon48">
                <div className="icon-name45">search</div>
              </div>
              <div className="input-text3">{`Search `}</div>
            </div>
          </div>
          <div className="input-field-master-component4">
            <div className="left3">
              <div className="icon48">
                <div className="icon-name45">sort</div>
              </div>
              <div className="input-text3">{`Sort `}</div>
            </div>
            <div className="right2">
              <div className="icon48">
                <div className="icon-name45">keyboard_arrow_down</div>
              </div>
            </div>
          </div>
          <div className="input-field-master-component4">
            <div className="left3">
              <div className="icon48">
                <div className="icon-name45">filter_list</div>
              </div>
              <div className="input-text3">Filter</div>
            </div>
            <div className="right2">
              <div className="icon48">
                <div className="icon-name45">keyboard_arrow_down</div>
              </div>
            </div>
          </div>
        </div>

        {productsData.map((item) => (
          <div
            className="frame-parent"
            style={{ position: "relative", marginTop: "5px" }}
            onClick={() => {
              openprofile1(item);
            }}>
            <div className="production-phases-parent">
              <div className="production-phases">Production phases</div>
              <div className="ph01-ph02">
                {item?.prod_phases[0]}
                {", "}
                {item?.prod_phases[1]}
              </div>
            </div>
            {item?.carbon_footprint ? (
              <div className="tag19">
                <div className="lorem-ipsum19">Neutralised</div>
              </div>
            ) : (
              <div className="tag19" style={{ backgroundColor: "orange" }}>
                <div className="lorem-ipsum19" style={{ backgroundColor: "orange" }}>
                  Not neutralised
                </div>
              </div>
            )}
            <div className="id-0001">{item?.product_id}</div>
            <div className="verification-01">Verification #01</div>
            <div className="text1">{item?.prod_details[0].description}</div>
            <div className="co2e-parent">
              <div className="co2e16">CO2e</div>
              <div className="kg-co2e16">
                {item?.carbon_footprint} {"kg co2e"}
              </div>
              <div className="verification-data16">Verification data</div>
              <div className="div2">{item?.verification_date}</div>
              <div className="leaf-parent">
                <img className="leaf-icon" alt="" src="/leaf.svg" />
                <div className="credits">{item?.credits}</div>
              </div>
            </div>
            <div className="weight-parent">
              <div className="production-phases">Weight</div>
              <div className="kg">
                {item?.weight} {" kg"}
              </div>
            </div>
            <div className="line-parent">
              <div className="frame-inner" />
              <div className="delivered-data-parent">
                <div className="production-phases">Delivered data</div>
                <div className="kg">{item?.ddt}</div>
              </div>
            </div>
          </div>
        ))}

        {/* <div
          className="frame-group"
          onClick={() => {
            openprofile2();
          }}>
          <div className="production-phases-parent">
            <div className="production-phases">Production phasese</div>
            <div className="ph01-ph02">
              {productsData[1]?.prod_phases[0]}
              {", "}
              {productsData[1]?.prod_phases[1]}
            </div>
          </div>
          <div className="id-0001">{productsData[1]?.product_id}</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">{productsData[1]?.prod_details[0].description}</div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">
              {productsData[1]?.carbon_footprint} {"kg co2e"}
            </div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">{productsData[1]?.verification_date}</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf.svg" />
              <div className="credits">{productsData[1]?.credits}</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">
              {productsData[1]?.weight} {" kg"}
            </div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">{productsData[1]?.ddt}</div>
            </div>
          </div>
        </div>
        <div className={productsData[1]?.carbon_footprint ? "tag19" : "tag20"}>
          <div className="lorem-ipsum19">
            {productsData[1]?.carbon_footprint ? "Footprint neutralised" : "not neutralized"}
          </div>
        </div> */}

        <div className="desktop-full-responsive-butt-parent1">
          <div className="desktop-full-responsive-butt4">
            <b className="ente-appartenenza4">MY RINA</b>
            <div className="left-comntent4">
              <div className="language-change-dropdown4">
                <div className="labelchevron8">
                  <div className="labelchevron9">
                    <b className="link4">ITA</b>
                    <img className="navigation-chevron-expand8" alt="" />
                  </div>
                </div>
                <div className="master-dropdown-left4">
                  <div className="master-desktop-dropdownfu8">
                    <img className="shape-icon8" alt="" src="/shape8.svg" />
                    <div className="container16">
                      <div className="list-container8">
                        <div className="list-18">
                          <div className="list16">
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">ITALIANO</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">ENGLISH</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities82">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities82">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities82">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                          </div>
                        </div>
                        <img className="divider-icon8" alt="" src="/divider.svg" />
                        <div className="list-28">
                          <div className="list17">
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                <div className="link4">List item</div>
                              </div>
                              <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-login4">
                <div className="header-button-logged-in-user4">
                  <div className="logged-in-user-button4">
                    <div className="container17">
                      <div className="container18">
                        <div className="navigation-chevron-expand8">
                          <div className="master4">
                            <div className="master-container4">
                              <img className="image-icon4" alt="" src="/image4.svg" />
                              <img className="icon53" alt="" src="/icon7.svg" />
                              <div className="letter4">
                                <img className="image-icon4" alt="" src="/portrait.svg" />
                                <div className="mr4">MR</div>
                              </div>
                              <div className="overlay4" />
                            </div>
                            <img className="focus-outline-icon4" alt="" src="/focus-outline.svg" />
                            <img className="user-presence-icon4" alt="" src="/user-presence.svg" />
                          </div>
                        </div>
                        <b className="franca-rossi4">Franca Rossi</b>
                        <img className="navigation-chevron-expand8" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="login-dropdown-left4">
                    <div className="master-desktop-dropdownfu9">
                      <img className="shape-icon8" alt="" src="/shape9.svg" />
                      <div className="container19">
                        <div className="list-container9">
                          <div className="list-19">
                            <div className="list17">
                              <div className="master-utilities80">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">I miei servizi</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities80">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">Le mie pratiche</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities80">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">Notifiche</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities93">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">List item</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities93">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">List item</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                            </div>
                          </div>
                          <img className="divider-icon9" alt="" src="/divider1.svg" />
                          <div className="list-29">
                            <div className="list17">
                              <div className="master-utilities95">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">Impostazioni</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities95">
                                <div className="txtleft-icon80">
                                  <img
                                    className="navigation-chevron-expand8"
                                    alt=""
                                    src="/general--external-link.svg"
                                  />
                                  <b className="label107">Esci</b>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities82">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">List item</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities82">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">List item</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                              </div>
                              <div className="master-utilities82">
                                <div className="txtleft-icon80">
                                  <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
                                  <div className="link4">List item</div>
                                </div>
                                <img className="placeholder-exagon156" alt="" src="/placeholder--exagon.svg" />
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
          <div className="search-parent2">
            <div className="search4">
              <img className="navigation-chevron-expand8" alt="" src="/vector.svg" />
            </div>
            <img className="group-icon" alt="" src="/group-80.svg" />
            <Dropdown className="login-container" value="HOLDER" />
            {/* <div className="steel-mill-lorem-parent">
              <div className="steel-mill-lorem">HOLDER</div>
              <img className="vector-icon12" alt="" src="/vector1.svg" />
            </div> */}
          </div>
          <div className="logo-menu4">
            <img className="rina-logo4" alt="" src="/rina--logo4.svg" />
            <div className="men4">
              <div className="layoutmenu-voicesdesktop22">
                <div className="voice12" onClick={() => navigate("/holder-s1")}>
                  Homepage
                </div>
              </div>
              <div className="layoutmenu-voicesdesktop13">
                <div className="voice12" onClick={() => navigate("/holder-s2")}>
                  Product list
                </div>
                <div className="highlight8" />
              </div>
              <div className="layoutmenu-voicesdesktop12">
                <div className="voice12" onClick={() => navigate("/holder-s3")}>
                  DDT List
                </div>
              </div>
              <div className="layoutmenu-voicesdesktop12">
                <div className="voice12">My certificates</div>
              </div>
              <div className="layoutmenu-voicesdesktop12">
                <div className="voice16">Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holder;
