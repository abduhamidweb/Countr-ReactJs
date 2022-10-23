import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.jsx";
import DoorDashFavorite from "./components/Loading/DoorDashFavorite";
import context from "./context";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('')
  async function getAllPost() {
    const Response = await fetch("https://restcountries.com/v3.1/all");
    const result = await Response.json();
    setData(result);
  }
  const searchData = async (title) => {
    const Response = await fetch(`https://restcountries.com/v3.1/name/${title}`);
    const result = await Response.json();
    if (result.status === 404) {
      searchData(data)
    } else {
      setData(result);
    }
  }
  const categoryData = async (region) => {
    console.log(region)
    const Response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const result = await Response.json();
    setData(result);
    // console.log(result)
  }
  data.forEach((e) => {
    if (!category.includes(e.region)) {
      setCategory(category.push(e.region))
    }
  })
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="hero bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 p-4">
                <input
                  type="text"
                  placeholder="Search for a country…"
                  className="form-control border-1 py-2 w-75"
                  id="search-country"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    if (search.trim().length > 0) {
                      searchData(search)
                    }
                  }}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-4">
                <select className="form-select w-50 float-end select-category" onChange={(e) => {
                  categoryData(e.target.value)
                }}>
                  <option disabled selected>
                    Filter by Region
                  </option>

                  {
                    category.map(e => {
                      return <option>{e}</option>
                    })
                  }


                </select>
              </div>
            </div>
          </div>
        </section>
        <section className="cards">
          <div className="container">
            <div className="row ">
              {
                data.length > 0 ? data.map(item => {
                  return (
                    <>
                      <context.Provider value={{ item }}>
                        <Card />
                      </context.Provider>

                    </>
                  )

                }) : <DoorDashFavorite />
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
