import "./about.css";
import { FiHome } from "react-icons/fi";
import NavBars from "../Sections/navbar";
import Admin from "../Sections/dashboard";
import Footer from "../Sections/footer";
import ToTop from "../Sections/totop";
import { Link } from "react-router-dom";

function Dash() {
  return (
    <div>
      <NavBars />
      <div className="banner-wraper">
        <div className="page-banner">
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>Dashboard</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Admin Page
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Admin />
      <Footer />
      <ToTop />
    </div>
  );
}

export default Dash;
