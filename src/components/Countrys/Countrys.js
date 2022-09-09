import React from "react";
import { useNavigate } from "react-router-dom";
import "./Countrys.css";

const Countrys = (props) => {
  const { name, flags, population, region, capital } = props.countrys;
  
  //-------- handler & navigate the path --------
  const navigator = useNavigate();
  const handleDetailsButton = () => {
    let searchName = name.common;
    const path = `/country_details/${searchName}`;
    navigator(path);
  };

  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
      <div className="m-2 p-2 box">
        <img className="img-fluid mb-3 w-100 flag-img" src={flags.png} alt="" />
        <h5>{name.common}</h5>
        <small>Population : {population}</small> <br />
        <small>Region : {region}</small> <br />
        <small>Capital : {capital}</small> <br />
        <button onClick={handleDetailsButton} className="btn button">
          Details
        </button>
      </div>
    </div>
  );
};

export default Countrys;
