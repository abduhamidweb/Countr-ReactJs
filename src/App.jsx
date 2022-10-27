import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext
} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header.jsx'
import DoorDashFavorite from './components/Loading/DoorDashFavorite'
import context from './context'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Pagination from './components/Pagination/Pagination'
import Lang from './components/Lang/Lang'
import Info from './components/Info/Info'
export const ThemeContainer = createContext(null)
export const ColorContainer = createContext(null)

const App = () => {
  // dark mode
  const [theme, setThem] = useState('light')
  const [color, setColor] = useState('black')
  // console.log(color)
  const toggleThem = () => {
    setThem(curr => (curr === 'light' ? 'dark' : 'light'))
  }
  const toggleColor = () => {
    setColor(cur => (cur === 'white' ? 'black' : 'white'))
  }

  const [lang, setLang] = useState('rus')
  const t = Lang[lang]
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [search, setSearch] = useState('')
  const [currendPage, setCurrentPage] = useState(1)
  const [totolPage, setTotolPage] = useState(12)

  const fristPage = currendPage * totolPage
  const lastPage = fristPage - totolPage
  const lastData = data.slice(lastPage, fristPage)
  // const [pageNumber, setPageNumber] = useState([])
  let pageNumber = []

  for (let i = 1; i <= Math.ceil(data.length / totolPage); i++) {
    pageNumber.push(i)
    // console.log(i)
  }
  async function getAllPost () {
    const Response = await fetch('https://restcountries.com/v3.1/all')
    const result = await Response.json()
    setData(result)
  }
  const searchData = async title => {
    const Response = await fetch(`https://restcountries.com/v3.1/name/${title}`)
    const result = await Response.json()
    if (result.status === 404) {
      searchData(data)
    } else {
      setData(result)
    }
  }
  const categoryData = async region => {
    const Response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    )
    const result = await Response.json()
    setData(result)
  }
  data.forEach(e => {
    if (!category.includes(e.region)) {
      setCategory(category.push(e.region))
    }
  })
  useEffect(() => {
    getAllPost()
  }, [])
  return (
    <>
      <context.Provider
        value={{
          theme,
          toggleThem,
          setThem,
          toggleColor,
          color,
          Lang,
          setLang,
          lang
        }}
      >
        <Header />
        <main id={theme}>
          <section className='hero bg-light' id={theme}>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6 p-4'>
                  <input
                    type='text'
                    placeholder={t.searchText}
                    className='form-control border-1 py-2 w-75'
                    id={theme}
                    value={search}
                    onChange={e => {
                      setSearch(e.target.value)
                      if (search.trim().length > 0) {
                        searchData(search)
                      }
                    }}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 p-4'>
                  <select
                    className='form-select w-50 float-end select-category '
                    id={theme}
                    onChange={e => {
                      categoryData(e.target.value)
                    }}
                  >
                    <option disabled selected>
                      {t.select}
                    </option>

                    {category.map(e => {
                      return <option id={toggleColor}>{e}</option>
                    })}
                  </select>
                </div>
              </div>
            </div>
          </section>
          <section className='cards' id={theme}>
            <div className='container'>
              <div className='row '>
                {lastData.length > 0 ? (
                  lastData.map((item, index) => {
                    return (
                      <>
                    <Card data={item} id={index} />

                          {/* <Route path='/' element={<Card data={item} id={index} />}/>
                          <Route path='/:id' element={<Info />}/>
                      */}
                        
                      </>
                    )
                  })
                ) : (
                  <DoorDashFavorite />
                )}
                <div className='row'>
                  <div className='col-12'>
                    <context.Provider value={{ pageNumber, setCurrentPage }}>
                      <Routes>
                        <Route path='/' element={<Pagination themeColor={color} theme={theme} />} />
                      </Routes>
                    </context.Provider>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />

        <ToastContainer />
      </context.Provider>
    </>
  )
}
export default App
