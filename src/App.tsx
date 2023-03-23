import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import VerifierAnonimoDetail from "./pages/VerifierAnonimoDetail";
import VerifierLog from "./pages/VerifierLog";
import VerifierAnonimoDetail1 from "./pages/VerifierAnonimoDetail1";
import VerifierAnonimoDetail2 from "./pages/VerifierAnonimoDetail2";
import Holder from "./pages/Holder";
import Holder1 from "./pages/Holder1";
import VerifierLog1 from "./pages/VerifierLog1";
import VerifierAnonimo from "./pages/VerifierAnonimo";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/verifier-log":
        title = "";
        metaDescription = "";
        break;
      case "/verifier-anonimo-detail":
        title = "";
        metaDescription = "";
        break;
      case "/verifier-anonimo-detail1":
        title = "";
        metaDescription = "";
        break;
      case "/holder":
        title = "";
        metaDescription = "";
        break;
      case "/holder1":
        title = "";
        metaDescription = "";
        break;
      case "/verifier-log1":
        title = "";
        metaDescription = "";
        break;
      case "/verifier-anonimo":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<VerifierAnonimoDetail />} />
      <Route path="/verifier-log" element={<VerifierLog />} />
      <Route
        path="/verifier-anonimo-detail"
        element={<VerifierAnonimoDetail1 />}
      />
      <Route
        path="/verifier-anonimo-detail1"
        element={<VerifierAnonimoDetail2 />}
      />
      <Route path="/holder" element={<Holder />} />
      <Route path="/holder1" element={<Holder1 />} />
      <Route path="/verifier-log1" element={<VerifierLog1 />} />
      <Route path="/verifier-anonimo" element={<VerifierAnonimo />} />
    </Routes>
  );
}
export default App;
