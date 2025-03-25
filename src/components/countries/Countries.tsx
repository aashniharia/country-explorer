import { useState } from "react";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {countries
          .slice(0, visibleCards)
          .map((eachCountry: Country, index: number) => (
            <Card
              name={eachCountry?.name?.common}
              flags={eachCountry?.flags}
              region={eachCountry?.region}
              country={eachCountry}
              key={index}
            />
          ))}
      </div>
      {countries.length > visibleCards && (
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
      )}
    </>
  );
};
