import React from "react";
import DarkMode from "../../assets/images/Path.svg";
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="nav-logo">
              <h3>Where in the world?</h3>
            </div>
            <div className="darkmod d-flex align-items-center">
              <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4">
                <div className="container-fluid">
                  <ul className="navbar-nav  ">
                    {/* <!-- Icon dropdown --> */}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="flag-united-kingdom flag m-0"></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="flag-united-kingdom flag"></i>English
                            <i className="fa fa-check text-success ms-2"></i>
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="flag-uzbekistan flag"></i>O'zbekiston
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="flag-russia flag"></i>Русский
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              <h4>
                <img src={DarkMode} className="darkMode" alt="img" /> Dark Mode
              </h4>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
