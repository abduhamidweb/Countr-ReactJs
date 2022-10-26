import React, { useContext } from 'react'
import context from '../../context'
import DarkMode from '../../assets/images/Path.svg'
const Header = () => {
  const { toggleThem }
    = useContext(context);
  const { theme } = useContext(context)
  const {toggleColor}=useContext(context)
  return (
    <>
      <header>
        <nav className='navbar' id={theme}>
          <div className='container'>
            <div className='nav-logo'>
              <h3 >Where in the world?</h3>
            </div>
            <div className='darkmod d-flex align-items-center'>
              <nav className='navbar navbar-expand-lg navbar-light bg-light mx-4 dsfsdfv' id={theme}>
                <div className='container-fluid'>
                  <ul className='navbar-nav  ' id={theme}>
                    {/* <!-- Icon dropdown --> */}
                    <li className='nav-item dropdown'>
                      <a
                        className='nav-link dropdown-toggle'
                        href='#'
                        id='navbarDropdown'
                        role='button'
                        data-mdb-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <i className='flag-united-kingdom flag m-0'></i>
                      </a>
                      <ul
                        className='dropdown-menu'
                        aria-labelledby='navbarDropdown'
                        id={theme}
                      >
                        <li>
                          <a className='dropdown-item' href='#'>
                            <i className='flag-united-kingdom flag'></i>English
                            <i className='fa fa-check text-success ms-2'></i>
                          </a>
                        </li>
                        <li>
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          <a className='dropdown-item' href='#'>
                            <i className='flag-uzbekistan flag'></i>O'zbekiston
                          </a>
                        </li>

                        <li>
                          <a className='dropdown-item' href='#'>
                            <i className='flag-russia flag'></i>Русский
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              <h4
                onClick={() => {
                  toggleThem()
                  toggleColor()

                }}
              >
                <img src={DarkMode} className='darkMode' alt='img' /> Dark Mode
              </h4>
            </div>
          </div>
        </nav>
        <span className='block-line'></span>
      </header>
    </>
  )
}

export default Header
