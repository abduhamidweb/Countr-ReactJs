import React, { useContext,useState } from "react";
import context from "../../context";
const Card = () => {
  // let [dats, setDatas] = useState([])
  let data = useContext(context);
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
  data=data.item
  return (
    <>
      <div className="card"  id="card" data-aos="fade-in" data-aos-duration="10000">
        <img src={data.flags.png} alt="img" />
        <div className="card-body ">
          <h5 className="card-title">{data.name.common
          }</h5>
          <h5 className="mt-4">
            <strong className="stron">Population:</strong>
            <span className="span">{data.population}</span>
          </h5>
          <h5>
            <strong className="stron">Region:</strong>
            <span className="span">{data.region}</span>
          </h5>
          <h5>
            <strong className="stron">Capital:</strong>
            <span className="span">{data.capital}</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Card;