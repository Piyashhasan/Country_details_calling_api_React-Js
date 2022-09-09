import React, { useEffect, useState } from "react";
import Countrys from "../Countrys/Countrys";
import FilterCountry from "../FilterCountry/FilterCountry";
import SearchInput from "../Search/SearchInput";


const Home = () => {
  //-------- declare state  --------
  const [countrys, setCountrys] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  //-------- call the api --------
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  //-------- search by user input --------
  const getCountryByName = (countryName) => {
    let url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
        setIsLoading(false);
      });
  };

  //-------- search by using region --------
  const getCountryByRegion = (region) => {
    let url = `https://restcountries.com/v3.1/region/${region}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountrys(data);
        setIsLoading(false);
      });
  };

  return (
    <div className="home-container container">
      <div className="row container my-4 search_field">
        <div className="col-md-8">
          <SearchInput onSearch={getCountryByName}></SearchInput>
        </div>
        <div className="col-md-4">
          <FilterCountry onSelect={getCountryByRegion}></FilterCountry>
        </div>
      </div>
      <div className="row container">
        {isloading && !error && (
          <h4 className="text-danger">Loading .......</h4>
        )}
        {error && !isloading && <h4 className="text-danger">{error}</h4>}
      </div>

      <div className="row">
        {countrys.map((countrys) => (
          <Countrys key={countrys.name.common} countrys={countrys}></Countrys>
        ))}
      </div>
    </div>
  );
};

export default Home;
