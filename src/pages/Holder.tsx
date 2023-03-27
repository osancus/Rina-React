import { FunctionComponent } from "react";
import { useNavigate } from 'react-router-dom';
import Dropdown from '../components/Dropdown'
import List from '../components/List'
import "./Holder.css";

const Holder: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="holder">
        <div className="title50">Product list</div>
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
        <div className="frame-parent" onClick={() => {
          navigate('/holder-s5')
        }} >
          <div className="production-phases-parent">
            <div className="production-phases">Production phasese</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="tag19">
            <div className="lorem-ipsum19">Footprint neutralised</div>
          </div>
          <div className="id-0001">ID 0001</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0001</div>
            </div>
          </div>
        </div>
        <div className="frame-group">
          <div className="production-phases-parent">
            <div className="production-phases">Production phasess</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="id-0001">ID 0002</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0000</div>
            </div>
          </div>
        </div>
        <div className="tag20">
          <div className="lorem-ipsum19">Not neutralised</div>
        </div>
        <div className="frame-container">
          <div className="production-phases-parent">
            <div className="production-phases">Production phases</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="tag19">
            <div className="lorem-ipsum19">Footprint neutralised</div>
          </div>
          <div className="id-0001">ID 0001</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0000</div>
            </div>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="production-phases-parent">
            <div className="production-phases">Production phases</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="id-0001">ID 0001</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0000</div>
            </div>
          </div>
        </div>
        <div className="tag22">
          <div className="lorem-ipsum19">Not neutralised</div>
        </div>
        <div className="frame-parent2">
          <div className="production-phases-parent">
            <div className="production-phases">Production phases</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="tag19">
            <div className="lorem-ipsum19">Footprint neutralised</div>
          </div>
          <div className="id-0001">ID 0001</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0000</div>
            </div>
          </div>
        </div>
        <div className="frame-parent3">
          <div className="production-phases-parent">
            <div className="production-phases">Production phases</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="id-0001">ID 0001</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0000</div>
            </div>
          </div>
        </div>
        <div className="tag24">
          <div className="lorem-ipsum19">Not neutralised</div>
        </div>
        <div className="frame-parent4">
          <div className="production-phases-parent">
            <div className="production-phases">Production phases</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="tag19">
            <div className="lorem-ipsum19">Footprint neutralised</div>
          </div>
          <div className="id-0001">ID 0001</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf1.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0000</div>
            </div>
          </div>
        </div>
        <div className="frame-parent5">
          <div className="production-phases-parent">
            <div className="production-phases">Production phases</div>
            <div className="ph01-ph02">Ph01, Ph02</div>
          </div>
          <div className="id-0001">ID 0001</div>
          <div className="verification-01">Verification #01</div>
          <div className="text1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid...
          </div>
          <div className="co2e-parent">
            <div className="co2e16">CO2e</div>
            <div className="kg-co2e16">30 kg co2e</div>
            <div className="verification-data16">Verification data</div>
            <div className="div2">00/00/0000</div>
            <div className="leaf-parent">
              <img className="leaf-icon" alt="" src="/leaf1.svg" />
              <div className="credits">20 credits</div>
            </div>
          </div>
          <div className="weight-parent">
            <div className="production-phases">Weight</div>
            <div className="kg">456 kg</div>
          </div>
          <div className="line-parent">
            <div className="frame-inner" />
            <div className="delivered-data-parent">
              <div className="production-phases">Delivered data</div>
              <div className="kg">00/00/0000</div>
            </div>
          </div>
        </div>
        <div className="tag26">
          <div className="lorem-ipsum19">Not neutralised</div>
        </div>
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
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">ITALIANO</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">ENGLISH</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities82">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities82">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities82">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="divider-icon8"
                          alt=""
                          src="/divider.svg"
                        />
                        <div className="list-28">
                          <div className="list17">
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
                            </div>
                            <div className="master-utilities80">
                              <div className="txtleft-icon80">
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                                <div className="link4">List item</div>
                              </div>
                              <img
                                className="placeholder-exagon156"
                                alt=""
                                src="/placeholder--exagon.svg"
                              />
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
                              <img
                                className="image-icon4"
                                alt=""
                                src="/image4.svg"
                              />
                              <img className="icon53" alt="" src="/icon7.svg" />
                              <div className="letter4">
                                <img
                                  className="image-icon4"
                                  alt=""
                                  src="/portrait.svg"
                                />
                                <div className="mr4">MR</div>
                              </div>
                              <div className="overlay4" />
                            </div>
                            <img
                              className="focus-outline-icon4"
                              alt=""
                              src="/focus-outline.svg"
                            />
                            <img
                              className="user-presence-icon4"
                              alt=""
                              src="/user-presence.svg"
                            />
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
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">I miei servizi</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                              <div className="master-utilities80">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">Le mie pratiche</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                              <div className="master-utilities80">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">Notifiche</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                              <div className="master-utilities93">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">List item</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                              <div className="master-utilities93">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">List item</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="divider-icon9"
                            alt=""
                            src="/divider1.svg"
                          />
                          <div className="list-29">
                            <div className="list17">
                              <div className="master-utilities95">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">Impostazioni</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
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
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                              <div className="master-utilities82">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">List item</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                              <div className="master-utilities82">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">List item</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
                              </div>
                              <div className="master-utilities82">
                                <div className="txtleft-icon80">
                                  <img
                                    className="placeholder-exagon156"
                                    alt=""
                                    src="/placeholder--exagon.svg"
                                  />
                                  <div className="link4">List item</div>
                                </div>
                                <img
                                  className="placeholder-exagon156"
                                  alt=""
                                  src="/placeholder--exagon.svg"
                                />
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
              <img
                className="navigation-chevron-expand8"
                alt=""
                src="/vector.svg"
              />
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
              <div className="layoutmenu-voicesdesktop12">
                <div className="voice12" onClick={() => navigate('/holder-s1')}>Homepage</div>
              </div>
              <div className="layoutmenu-voicesdesktop13">
                <div className="voice12" onClick={() => navigate('/holder-s2')}>Product list</div>
                <div className="highlight8" />
              </div>
              <div className="layoutmenu-voicesdesktop12">
                <div className="voice12" onClick={() => navigate('/holder-s3')}>DDT List</div>
              </div>
              <div className="layoutmenu-voicesdesktop12">
                <div className="voice12">Phase Monitoring</div>
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
