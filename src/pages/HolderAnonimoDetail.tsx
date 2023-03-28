import { FunctionComponent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./VerifierAnonimoDetail.css";

const HolderAnonimoDetail: FunctionComponent = () => {
  const navigate = useNavigate();
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



  const location = useLocation();

  return (
    <div className="verifier-anonimo-detail">

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



      <div className="layoutsection-title">
        <div className="title-section" onClick={() => window.history.go(-1)}>
          <div className="icon">
            <div className="icon-name">arrow_back</div>
          </div>
          <div className="title">{`Back `}</div>
        </div>

        {/* {location.state.item.carbon_footprint ? (
          <div className="tag">
            <div className="lorem-ipsum">Footprint neutralised</div>
          </div>
        ) : (
          <div className="tag" style={{ backgroundColor: "orange" }}>
          <div className="lorem-ipsum" style={{ backgroundColor: "orange" }}>Footprint neutralised</div>
        )} */}



        <div className="searchfield">
          <div className="button">
            <div className="label">Create offer</div>
          </div>
        </div>
      </div>

      <div className="verification-date-parent">
        <div className="verification-date">Verification date</div>
        <div className="title1">{location.state.item.productData[0].verification_date}</div>
        <div className="title2"><b>Carbon status</b></div>
        <div className="total-co2e-parent">
          <div className="total-co2e">Total CO2e</div>
          <div className="title3">{location.state.item.co2}</div>
        </div>
        <div className="certificates">Certificates</div>
        <div className="attachment">
          <div className="iconname">
            <div className="image1">
              <div className="icon2">
                <div className="icon-name1">image</div>
              </div>
            </div>
            <div className="image-123-abcjpg">Image_123_ABC.jpg</div>
          </div>
          <div className="button1">
            <div className="navigation-chevron-expand">
              <div className="icon-name1">more_horiz</div>
            </div>
          </div>
        </div>
        <div className="attachment1">
          <div className="icon-name3">
            <div className="image1">
              <div className="icon2">
                <div className="icon-name1">image</div>
              </div>
            </div>
            <div className="image-123-abc-final-megafinal5">Image_123_ABC_final_megaFinal5_2.jpg</div>
          </div>
          <div className="button1">
            <div className="navigation-chevron-expand">
              <div className="icon-name1">more_horiz</div>
            </div>
          </div>
        </div>
        <div className="attachment2">
          <div className="icon-name3">
            <div className="image1">
              <div className="icon2">
                <div className="icon-name1">image</div>
              </div>
            </div>
            <div className="image-123-abc-final-megafinal5">Img_123_final_final_megaFinal5_2.jpg</div>
          </div>
          <div className="button1">
            <div className="navigation-chevron-expand">
              <div className="icon-name1">more_horiz</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dtt-2390" style={{ left: 30 }}><b>{location.state.item.ddt_number}</b></div>
      <div className="at-vero-eos">{location.state.item.productData[0].prod_details[0].description}</div>
      <div className="label21">Read full description</div>
      <div className="title4">{location.state.item.productData[0].seller}</div>
      <div className="ddt-number">DDT number</div>
      <div className="seller">Seller</div>
      <div className="title5">Via Brendana 10, 16100 Genova</div>
      <div className="address">Address</div>
      <div className="title6">{location.state.item.productData[0].ddt_number}</div>
      <div className="dtt-date">DTT date</div>
      <div className="title7">{location.state.item.dtt_date}</div>
      <div className="delivered-data">Delivered data</div>
      <div className="title8">{location.state.item.delivered_date}</div>
      <div className="dispatched-to">Dispatched to</div>
      <div className="title9">{location.state.item.productData[0].dispatched_to}</div>
      <div className="title10" style={{ left: 30 }}><b>Delivery detail</b></div>
      <div className="verification-number-parent">
        <div className="verification-number">Verification number:</div>
        <div className="label22">{location.state.item.productData[0].verification_number}</div>
      </div>
      <div className="divider" />
      <div className="scrollbar">
        <img className="scrollbar-icon" alt="" src="/scrollbar.svg" />
      </div>
      <div className="product-detail" style={{ left: 30 }}><b>Product detail</b></div>
      <div className="layoutlistconsultant">
        <div className="client">
          <div className="client1">
            <img className="avatar-icon" alt="" src="/avatar.svg" />
            <div className="lorem-ipsum">Product ID L1049400001</div>
          </div>
        </div>
        <div className="divider1" />
        <div className="title11">Metal scheet</div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">Received from</p>
          <p className="still-mill-lorem">Still Mill Lorem</p>
        </div>
        <div className="divider3" />
        <div className="received-from-still-container">
          <p className="received-from">Delivered data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">CO2e</p>
          <p className="still-mill-lorem">30 kg co2e</p>
        </div>
        <div className="received-from-still-container">
          <p className="received-from">Verification data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="tag1">
          <div className="lorem-ipsum1">Footprint neutralised</div>
        </div>
        <div className="button4">
          <div className="navigation-chevron-expand">
            <div className="icon-name1">more_horiz</div>
          </div>
        </div>
      </div>
      <div className="layoutlistconsultant1">
        <div className="client">
          <div className="client1">
            <img className="avatar-icon" alt="" src="/avatar1.svg" />
            <div className="lorem-ipsum">Product ID L1049400000</div>
          </div>
        </div>
        <div className="divider1" />
        <div className="title11">Metal scheet</div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">Received from</p>
          <p className="still-mill-lorem">Still Mill Lorem</p>
        </div>
        <div className="divider3" />
        <div className="received-from-still-container">
          <p className="received-from">Delivered data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">CO2e</p>
          <p className="still-mill-lorem">30 kg co2e</p>
        </div>
        <div className="received-from-still-container">
          <p className="received-from">Verification data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="tag1">
          <div className="lorem-ipsum1">Footprint neutralised</div>
        </div>
        <div className="button4">
          <div className="navigation-chevron-expand">
            <div className="icon-name1">more_horiz</div>
          </div>
        </div>
      </div>
      <div className="layoutlistconsultant2">
        <div className="client">
          <div className="client1">
            <img className="avatar-icon" alt="" src="/avatar2.svg" />
            <div className="lorem-ipsum">Product ID L1049400000</div>
          </div>
        </div>
        <div className="divider1" />
        <div className="title11">Metal scheet</div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">Received from</p>
          <p className="still-mill-lorem">Still Mill Lorem</p>
        </div>
        <div className="divider3" />
        <div className="received-from-still-container">
          <p className="received-from">Delivered data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">CO2e</p>
          <p className="still-mill-lorem">30 kg co2e</p>
        </div>
        <div className="received-from-still-container">
          <p className="received-from">Verification data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="tag1">
          <div className="lorem-ipsum1">Footprint neutralised</div>
        </div>
        <div className="button4">
          <div className="navigation-chevron-expand">
            <div className="icon-name1">more_horiz</div>
          </div>
        </div>
      </div>
      <div className="layoutlistconsultant3">
        <div className="client">
          <div className="client1">
            <img className="avatar-icon" alt="" src="/avatar3.svg" />
            <div className="lorem-ipsum">Product ID L1049400000</div>
          </div>
        </div>
        <div className="divider1" />
        <div className="title11">Metal scheet</div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">Received from</p>
          <p className="still-mill-lorem">Still Mill Lorem</p>
        </div>
        <div className="divider3" />
        <div className="received-from-still-container">
          <p className="received-from">Delivered data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="divider1" />
        <div className="received-from-still-container">
          <p className="received-from">CO2e</p>
          <p className="still-mill-lorem">30 kg co2e</p>
        </div>
        <div className="received-from-still-container">
          <p className="received-from">Verification data</p>
          <p className="still-mill-lorem">00/00/0000</p>
        </div>
        <div className="tag1">
          <div className="lorem-ipsum1">Footprint neutralised</div>
        </div>
        <div className="button4">
          <div className="navigation-chevron-expand">
            <div className="icon-name1">more_horiz</div>
          </div>
        </div>
      </div>
      <div className="dropzone">
        <div className="content" style={{ width: "500px" }}>
          <div className="icon12">
            <div className="icon-name13">upload_file</div>
          </div>
          <div className="drop-files-here" style={{ width: "500px" }}>Check carbon neutrality certificate now</div>
        </div>
      </div>
      <div className="primary-filled-mini-text-o">
        <button className="master-button" onClick={toggle}>
          <img className="document-iconstext-style" alt="" src="/document-iconstextstyle.svg" />
          <div className="label-text">Check certificate</div>
          <img className="document-iconstext-style" alt="" src="/document-iconstextstyle.svg" />
        </button>
      </div>





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
    </div>
  );
};

export default HolderAnonimoDetail;
