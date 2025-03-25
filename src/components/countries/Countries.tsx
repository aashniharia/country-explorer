import React, { useState } from "react";
import { Country } from "./countriesTypes";
import { Card } from "../card/Card";
interface CountryProptypes {
  countries: Country[];
}
const NUMBEROFCARDS = 16;
export const Countries = ({ countries }: CountryProptypes) => {
  const [visibleCards, setVisibleCards] = useState(NUMBEROFCARDS);
  return (
    <>
      <div className="grid grid-cols-4 md:gap-6 gap-4">
        {countries.slice(0, visibleCards).map((eachCountry: Country) => (
          <Card
            name={eachCountry?.name?.common}
            flags={eachCountry?.flags}
            region={eachCountry?.region}
            country={eachCountry}
          />
        ))}
      </div>
      <div className="flex items-center justify-center m-4">
        <button
          type="button"
          className="btn-primary"
          onClick={() => {
            setVisibleCards((prev) => prev + NUMBEROFCARDS);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
};
