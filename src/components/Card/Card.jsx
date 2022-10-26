import React, { useContext,useState } from "react";
import context from "../../context";
const Card = ({ data }) => {
  // let [dats, setDatas] = useState([])
  let { theme } = useContext(context);
  let { color } = useContext(context)
//   let { lastData } = useContext(context);
//   let { totolPage } = useContext(context);
// lastData.forEach((item) => {
//   setDatas.push([item])
// })
//   console.log(dats)

  // console.log(lastData)
  // let pageNumber = []
  // for (let i = 1; i <= Math.ceil(data.length / totolPage); i++){
  //   pageNumber.push(i)
  // }
  // data=data.item
  return (
    <>
      <div className="card"   data-aos="fade-in" data-aos-duration="10000">
        <img src={data.flags.png} alt="img" />
        <span className='block-line'></span>

        <div className="card-body  "id = { theme }
>
          <h5 className="card-title" id={color}>{data.name.common
          }</h5>
          <h5 className="mt-4">
            <strong className="stron" id={color}>Population:</strong>
            <span className="span"id = { color }>{data.population}</span>
          </h5>
          <h5>
            <strong className="stron" id = { color }>Region:</strong>
            <span className="span" id = { color }>{data.region}</span>
          </h5>
          <h5>
            <strong className="stron"id = { color } >Capital:</strong>
            <span className="span" id = { color }>{data.capital}</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Card;