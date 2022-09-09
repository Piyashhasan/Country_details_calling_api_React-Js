import React from "react";

const FilterCountry = (props) => {
  const { onSelect } = props;

  //-------- handler  --------
  const selectHandler = (event) => {
    const regionName = event.target.value;
    onSelect(regionName);
  };
  return (
    <div>
      <select
        className="mt-2 py-1 px-2 bg-dark text-white border-none"
        onChange={selectHandler}
      >
        <option>Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterCountry;
