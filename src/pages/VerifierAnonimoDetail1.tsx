import { FunctionComponent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./VerifierAnonimoDetail1.css";
import Dropdown from "../components/Dropdown";

const VerifierAnonimoDetail1: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modal, setModal] = useState(false);

  const toggle = () => {
    try {
      setModal(!modal);
      let i = 1;
      let id = setInterval(() => {
        // try 
        const l: HTMLElement | any = document.getElementById('l' + i);
        const f: HTMLElement | any = document.getElementById('f' + i);
        if (l)
          l.style.display = "none";

        if (f)
          f.textContent = "✅";

        i = i + 1;
        if (i === 8) {
          clearInterval(id);
        }

      }, 300);
    } catch (error) {

    }

  }

  console.log("inside", location);
  return (
    <div className="verifier-anonimo-detail1">
      <div className="layoutsection-title1">
        <div className="title-section1" onClick={() => window.history.go(-1)}>
          <div className="icon30">
            <div className="icon-name27">arrow_back</div>
          </div>
          <div className="title24">{`Back `}</div>
        </div>


        {location.state.item.carbon_footprint ? (
          <div className="tag13">
            <div className="lorem-ipsum13">Neutralised</div>
          </div>
        ) : (

          <div className="tag13" style={{ backgroundColor: "orange" }}>
            <div className="lorem-ipsum13" style={{ backgroundColor: "orange" }}>Not neutralised</div>
          </div>

        )}



        <div className="searchfield1">
          <div className="button16">
            <div className="label45">Create offer</div>
          </div>
        </div>
      </div>
      <div className="desktop-full-responsive-butt-container">
        <div className="desktop-full-responsive-butt2">
          <b className="ente-appartenenza2">MY RINA</b>
          <div className="left-comntent2">
            <div className="language-change-dropdown2">
              <div className="labelchevron4">
                <div className="labelchevron5">
                  <b className="link2">ITA</b>
                  <img className="navigation-chevron-expand4" alt="" />
                </div>
              </div>
              <div className="master-dropdown-left2">
                <div className="master-desktop-dropdownfu4">
                  <img className="shape-icon4" alt="" src="/shape4.svg" />
                  <div className="container8">
                    <div className="list-container4">
                      <div className="list-14">
                        <div className="list8">
                          <div className="master-utilities40">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">ITALIANO</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities40">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">ENGLISH</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities42">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities42">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities42">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                        </div>
                      </div>
                      <img className="divider-icon4" alt="" src="/divider.svg" />
                      <div className="list-24">
                        <div className="list9">
                          <div className="master-utilities40">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities40">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities40">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities40">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                          <div className="master-utilities40">
                            <div className="txtleft-icon40">
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                              <div className="link2">List item</div>
                            </div>
                            <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-login2">
              <div className="header-button-logged-in-user2">
                <div className="logged-in-user-button2">
                  <div className="container9">
                    <div className="container10">
                      <div className="navigation-chevron-expand4">
                        <div className="master2">
                          <div className="master-container2">
                            <img className="image-icon2" alt="" src="/image2.svg" />
                            <img className="icon31" alt="" src="/icon5.svg" />
                            <div className="letter2">
                              <img className="image-icon2" alt="" src="/portrait.svg" />
                              <div className="mr2">MR</div>
                            </div>
                            <div className="overlay2" />
                          </div>
                          <img className="focus-outline-icon2" alt="" src="/focus-outline.svg" />
                          <img className="user-presence-icon2" alt="" src="/user-presence.svg" />
                        </div>
                      </div>
                      <b className="franca-rossi2">Franca Rossi</b>
                      <img className="navigation-chevron-expand4" alt="" />
                    </div>
                  </div>
                </div>
                <div className="login-dropdown-left2">
                  <div className="master-desktop-dropdownfu5">
                    <img className="shape-icon4" alt="" src="/shape5.svg" />
                    <div className="container11">
                      <div className="list-container5">
                        <div className="list-15">
                          <div className="list9">
                            <div className="master-utilities40">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">I miei servizi</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities40">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">Le mie pratiche</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities40">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">Notifiche</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities53">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">List item</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities53">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">List item</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                          </div>
                        </div>
                        <img className="divider-icon5" alt="" src="/divider1.svg" />
                        <div className="list-25">
                          <div className="list9">
                            <div className="master-utilities55">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">Impostazioni</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities55">
                              <div className="txtleft-icon40">
                                <img className="navigation-chevron-expand4" alt="" src="/general--external-link.svg" />
                                <b className="label62">Esci</b>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities42">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">List item</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities42">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">List item</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                            </div>
                            <div className="master-utilities42">
                              <div className="txtleft-icon40">
                                <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
                                <div className="link2">List item</div>
                              </div>
                              <img className="placeholder-exagon78" alt="" src="/placeholder--exagon.svg" />
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
        <div className="search-container">
          <div className="search2">
            <img className="navigation-chevron-expand4" alt="" src="/vector.svg" />
          </div>
          <img className="vector-icon6" alt="" src="/vector3.svg" />
          <Dropdown className="login-container" value="VERIFIER" />
          {/* <div className="login-parent">
            <div className="login">LOGIN</div>
            <img className="vector-icon7" alt="" src="/vector1.svg" />
          </div> */}
        </div>
        <div className="logo-menu2">
          <img className="rina-logo2" alt="" src="/rina--logo2.svg" />
          <div className="men2">
            <div className="layoutmenu-voicesdesktop22">
              <div className="voice12" onClick={() => navigate("/verifier-s1")}>
                Homepage
              </div>
            </div>
            <div className="layoutmenu-voicesdesktop13">
              <div className="voice12" onClick={() => navigate("/verifier-s2")}>
                Product list
              </div>
              <div className="highlight8" />
            </div>
            <div className="layoutmenu-voicesdesktop12">
              <div className="voice12" onClick={() => navigate("/verifier-s3")}>
                DDT List
              </div>
            </div>
            <div className="layoutmenu-voicesdesktop12">
              <div className="voice12">My certificates</div>
            </div>
            <div className="layoutmenu-voicesdesktop8">
              <div className="voice8">Settings</div>
            </div>
          </div>
        </div>
      </div>
      <div className="verification-date-group">
        <div className="verification-date1">Verification date</div>
        <div className="title25">{location.state.item.verification_date}</div>
        <div className="title26"><b>Carbon status</b></div>
        <div className="total-co2e-group">
          <div className="total-co2e1">Total CO2e</div>
          <div className="title27">{location.state.item.carbon_footprint}</div>
        </div>
        <div className="certificates1">Certificates</div>
        <div className="attachment3">
          <div className="iconname1">
            <div className="image6">
              <div className="icon32">
                <div className="icon-name28">image</div>
              </div>
            </div>
            <div className="image-123-abcjpg1">Image_123_ABC.jpg</div>
          </div>
          <div className="button17">
            <div className="navigation-chevron-expand4">
              <div className="icon-name28">more_horiz</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-id-l10494000004" style={{ left: 30 }}><b>{`Product ${location.state.item.product_id} `}</b></div>
      <div className="at-vero-eos1">{location.state.item.prod_details[0].description}</div>
      <div className="label66">Read full description</div>
      <div className="title28">{location.state.item.seller}</div>
      <div className="ddt-number1">DDT number</div>
      <div className="seller1">Seller</div>
      <div className="title29">
        {location.state.item.weight}
        {" kg"}
      </div>
      <div className="weight">Weight</div>
      <div className="title30">{location.state.item.ddt_number}</div>
      <div className="dtt-date1">DTT date</div>
      <div className="title31">{location.state.item.ddt}</div>
      <div className="delivered-data13">Delivered date</div>
      <div className="title32">{location.state.item.verification_date}</div>
      <div className="cfp">CFP</div>
      <div className="title33">60/140</div>
      <div className="title34" style={{ left: 30 }}><b>Product detail</b></div>
      <div className="verification-number-group">
        <div className="verification-number1">Verification number:</div>
        <div className="label67">{location.state.item.verification_number}</div>
      </div>
      <div className="divider49" />
      <div className="dropzone1">
        <div className="content1" style={{ width: "500px" }}>
          <div className="icon34">
            <div className="icon-name30">upload_file</div>
          </div>
          <div className="drop-files-here1" style={{ width: "500px" }}>Check carbon neutrality certificate now</div>
        </div>
      </div>
      <div className="primary-filled-mini-text-o1">
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Check Certificate</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="panel panel-default" style={{ width: "100%" }}>

                <ul id="list" className="list-group">
                  <li className="list-group-item"><span className="badge">
                    <div id="l1" className="loadingSpinner"></div>
                    <div id="f1"></div>

                  </span>

                    Issued on {new Date().toISOString().split('T')[0]}<span id="date1"></span></li>

                  <li className="list-group-item"><span className="badge">
                    <div id="l2" className="loadingSpinner"></div>
                    <div id="f2"></div>
                  </span>Issued by Infocert</li>
                  <li className="list-group-item"><span className="badge">
                    <div id="l3" className="loadingSpinner"></div>
                    <div id="f3"></div>
                  </span>Issued using Dizme</li>
                  <li className="list-group-item"><span className="badge">
                    <div id="l4" className="loadingSpinner"></div>
                    <div id="f4"></div>
                  </span>Issued to User</li>
                  <li className="list-group-item"><span className="badge">
                    <div id="l5" className="loadingSpinner"></div>
                    <div id="f5"></div>
                  </span>Accepted on {new Date().toISOString().split('T')[0]}<span id="date2"></span></li>
                  <li className="list-group-item"><span className="badge">
                    <div id="l6" className="loadingSpinner"></div>
                    <div id="f6"></div>
                  </span>Last Updated {new Date().toISOString().split('T')[0]}<span id="date3"></span></li>
                  <li className="list-group-item"><span className="badge">
                    <div id="l7" className="loadingSpinner"></div>
                    <div id="f7"></div>
                  </span><b>VERIFIED</b></li>
                </ul>
              </div>


            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Done
            </Button>
          </ModalFooter>
        </Modal>
        <div className="master-button1">
          <img className="document-iconstext-style2" alt="" src="/document-iconstextstyle1.svg" />
          <div className="label-text1" onClick={toggle}>Check certificate</div>
          <img className="document-iconstext-style2" alt="" src="/document-iconstextstyle2.svg" />
        </div>
      </div>
    </div>
  );
};

export default VerifierAnonimoDetail1;
