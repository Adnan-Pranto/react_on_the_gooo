import React, { use } from 'react';
import Country from './Country';
import "./New.css"
const Countries = ({ contriesPromise }) => {
    const countriesData = use(contriesPromise);
    const countries = countriesData.countries
    console.log(countries);
   
    return (
        <div>
            <h1 className='head'>New countries : {countries.length}</h1>

            <div className='myCountries' >

                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} ></Country>)
                }
    
            </div>

        </div>
    );
};
export default Countries;
