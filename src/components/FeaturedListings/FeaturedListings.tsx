import React from "react";
import Tittle from "../Tittle/Tittle";
import Button from "../Button/Button";

const LISTINGOPTIONS = [
  "All Items(5125)",
  "Residencial Spaces(64)",
  "Sports Venues",
  "Meeting Spaces",
  "Vans & Buses",
  "Cars & SUVs",
  "Lorries & Industrial Vehicles",
  " > ",
];

const FeaturedListings = () => {
  return (
    <div className="mt-16">
      <Tittle>Featured Listings</Tittle>
      <div className="flex flex-row justify-center gap-8">
        {LISTINGOPTIONS.map((option, index) => (
          <button
            key={index}
            className="p-2  bg-[#E8E8E8] rounded-full text-xs"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
