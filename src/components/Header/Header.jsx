import React from 'react';
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
              <div className="darkmod">
                <h4>
                  <img src={DarkMode} className="darkMode" alt="img" /> Dark
                  Mode
                </h4>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
};

export default Header;