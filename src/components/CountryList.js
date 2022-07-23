import React, { useState } from "react";
import Country from "./Country";

const CountryList = ({ country }) => {
  const [showCountry, setShowCountry] = useState(false);

  return (
    <>
      <p>
        {country.name.common}
        <button onClick={() => setShowCountry(!showCountry)}>
          {showCountry ? "hide" : "show"}
        </button>
      </p>
      {showCountry && <Country country={country} />}
    </>
  );
};

export default CountryList;
