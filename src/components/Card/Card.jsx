import React, { useContext } from "react";
import context from "../../context";
const Card = () => {
  let  data = useContext(context)
  data=data.item
  return (
    <>
      <div className="card" id="card">
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