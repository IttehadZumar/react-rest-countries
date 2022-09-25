import React from 'react';
import './Country.css'

function Country(props) {
    const {name, population, region,flags} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
        </div>
    )
};

export default Country;