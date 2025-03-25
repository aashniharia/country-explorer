import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import { Countries } from "./components/countries/Countries";
import { Country } from "./components/countries/countriesTypes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((eachCountry: Country) =>
    eachCountry?.name?.common?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <Router>
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
            <h1 className="text-4xl font-extrabold text-white tracking-wide">
              Country Explorer
            </h1>
          </div>
          <div className="flex justify-center items-center p-4">
            <input
              type="text"
              placeholder="Search for a country"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded-md hover:border-blue-500 transition"
            />
          </div>
          <Routes>
            <Route path="/map/:lat/:lng" element={<MapPage />} />
            <Route
              path="/"
              element={<Countries countries={filteredCountries} />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
