import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import { CardDetails } from "../card-details/CardDetails";
import { Country } from "../countries/countriesTypes";
import { Link } from "react-router-dom";

interface CardProps {
  flags: { [key: string]: string };
  name: string;
  region: string;
  country: Country;
}
export const Card = ({ flags, name, region, country }: CardProps) => {
  const isImagePresent = flags.png;
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="flex flex-col w-full shadow-2xl rounded-lg p-4 ">
        <div className="flex w-full h-40 items-center justify-center padding ">
          {isImagePresent ? (
            <img
              src={flags?.png}
              alt={flags?.alt}
              width="200px"
              height="100px"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          ) : (
            <span>No Image Present</span>
          )}
        </div>
        <div className="p-2 h-30">
          <h2 className="text-xl font-semibold">
            Country: {name.toUpperCase()}
          </h2>
          <p className="mt-2">Region: {region.toUpperCase()}</p>
        </div>
        <div className="flex gap-2 flex-col md:flex-row justify-between p-2 mt-2">
          <button
            className="flex-1 bg-blue-500 !important hover:bg-blue-600 transition"
            onClick={() => {
              setShowModal(true);
            }}
          >
            View Details
          </button>
          <Link to={`/map/${country.latlng[0]}/${country.latlng[1]}`}>
            <button className="flex-1 hover:bg-blue-600 transition">
              Locate on Map
            </button>
          </Link>
        </div>
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={handleModalClose}
          children={<CardDetails country={country} />}
          title={
            <div className="flex flex-row justify-between gap-4">
              {isImagePresent && (
                <img
                  src={flags?.png}
                  alt={flags?.alt}
                  width="50px"
                  height="25px"
                  className="object-fit"
                />
              )}
              <span>Country Details</span>{" "}
            </div>
          }
          size="lg"
        />
      )}
    </>
  );
};
