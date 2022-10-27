import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import context from '../../context'
const Card = ({ data, id }) => {
  console.log(id)
  let { theme } = useContext(context)
  let { color } = useContext(context)
  const { Lang, setLang, lang } = useContext(context)
  const t = Lang[lang]
  return (
    <>
      <div className='card' data-aos='fade-in' data-aos-duration='10000'>
    
                <img src={data.flags.png} alt='img' />
        <span className='block-line'></span>
    
        <div className='card-body  ' id={theme}>
          <Link to={`/info/${id}`}>
          <h5 className='card-title' id={color}>
            {data.name.common}
          </h5>
          <h5 className='mt-4'>
            <strong className='stron' id={color}>
              {t.population}
            </strong>
            <span className='span' id={color}>
              {data.population}
            </span>
          </h5>
          <h5>
            <strong className='stron' id={color}>
              {t.region}
            </strong>
            <span className='span' id={color}>
              {data.region}
            </span>
          </h5>
          <h5>
            <strong className='stron' id={color}>
              {t.capital}
            </strong>
            <span className='span' id={color}>
              {data.capital}
            </span>
            </h5>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Card
