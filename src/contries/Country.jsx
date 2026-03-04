import React, { use, useState } from 'react';

const Country = ({country}) => {
    // console.log(country);
    const [visited, setVisited] =useState(false);
  const handelVisited = () => {
        // console.log('object');
        setVisited(!visited)
    }
    return (
        <div className={`myStyle ${visited && 'county-visit'}`}>
            <h3>Name: {country.name.common}</h3>
            <img  src={country.flags.flags.png} alt="" />
            <p>Total Populations: {country.population.population}</p>
            <p>Total area: {country.area.area}</p>
           <p>Capital : {country.capital.capital}</p>
           <p>Region : {country.region.region}</p>
            <button onClick={handelVisited}>
                {visited?'visited':'not visited'}
            </button>
        </div>
    );
};

export default Country;