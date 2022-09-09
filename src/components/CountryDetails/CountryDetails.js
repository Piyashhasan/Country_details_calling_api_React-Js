import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { searchName } = useParams();

  //-------- declare state  --------
  const [countryDetails, setCountryDetails] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  //-------- call the api --------
  useEffect(() => {
    let url = `https://restcountries.com/v3.1/name/${searchName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountryDetails(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [searchName]);

  const {
    flags,
    name,
    capital,
    area,
    population,
    region,
    subregion,
  } = countryDetails;

  return (
    <div className="countryDetails-container container py-5 text-white">
      <Link className="preview-btn m-2" to="/">
        Back
      </Link>
      {isloading && !error && <h4 className="loading">Loading .......</h4>}
      {error && !isloading && <h4 className="loading">{error}</h4>}
      <div className="row container py-5">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
          <img src={flags?.png} alt="flag" className="img-fluid h-75" />
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 country-details-text">
          <p>Name : {name?.common}</p>
          <p>Capital : {capital}</p>
          <p>Area : {area}</p>
          <p>Population : {population}</p>
          <p>Region : {region}</p>
          <p>Sub region : {subregion}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
