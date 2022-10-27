import React, { useContext } from 'react'
import context from '../../context'
import DarkMode from '../../assets/images/Path.svg'
import languages from '../Lang/Lang'
const Header = () => {
  const {Lang,setLang,lang}=useContext(context)
  const t = Lang[lang];
  const { toggleThem } = useContext(context)
  const { theme } = useContext(context)
  const { toggleColor } = useContext(context)
  return (
    <>
      <header>
        <nav className='navbar' id={theme}>
          <div className='container'>
            <div className='nav-logo'>
              <h3>{ t.logo}</h3>
            </div>
            <div className='darkmod d-flex align-items-center'>
              <nav
                className='navbar navbar-expand-lg navbar-light bg-light mx-4 dsfsdfv'
                id={theme}
              >
                <div className='container-fluid'>
                  <select id={theme} onChange={(e) => {
                    let val = e.target.value.toLowerCase();
                    setLang(val)
                  }
                  }>
                    <option selected disabled>
                      {t.lang}
                    </option>
                    <option>Eng</option>
                    <option>Uzb</option>
                    <option>Rus</option>
                  </select>
                </div>
              </nav>
              <h4
                onClick={() => {
                  toggleThem()
                  toggleColor()
                }}
              >
                <img src={DarkMode} className='darkMode' alt='img' />{t.darkMode}
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
