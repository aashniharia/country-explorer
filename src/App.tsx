import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import { Countries } from "./components/countries/Countries";
import { Country } from "./components/countries/countriesTypes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
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
    <div className="w-full h-full">
      <Router>
        <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Country Explorer
          </h1>
        </div>
        <Routes>
          <Route path="/map/:lat/:lng" element={<MapPage />} />
          <Route path="/" element={<Countries countries={countries} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
