import { useState, useEffect } from 'react';

import axios from 'axios';
import './App.css';
import { Countries } from './components/countries/Countries';
import { Country } from './components/countries/countriesTypes';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      console.log('response', response);
      if (response?.data?.length > 0) {
        const data = response.data.map((eachCountry: Country) => ({
          name: eachCountry?.name,
          independet: eachCountry?.independent,
          currencies: eachCountry?.currencies,
          capital: eachCountry?.capital,
          latlng: eachCountry?.latlng,
          region: eachCountry?.region,
          landlocked: eachCountry?.landlocked,
          area: eachCountry?.area,
          flags: eachCountry?.flags,
          maps: eachCountry?.maps,
          population: eachCountry?.population,
          car: eachCountry?.car,
          continent: eachCountry?.continent,
        }));
        setCountries(data);
      }
    };
    fetchCountries();
  }, []);
  return (
    <>
      <div>
        <h1>Country Explorer</h1>
        <Countries countries={countries} />
      </div>
    </>
  );
};

export default App;
