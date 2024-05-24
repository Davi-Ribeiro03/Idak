import React from "react";
import CardHotel from "../CardHotel/CardHotel";
import Button from "../Button/Button";

const ContainerHoteis = () => {
  return (
    <div className="flex flex-col items-center">
      <section className=" flex flex-wrap gap-4 justify-center mt-8 max-w-6xl mx-auto">
        <CardHotel />
        <CardHotel />
        <CardHotel />
        <CardHotel />
        <CardHotel />
        <CardHotel />
      </section>
      <button className="bg-primary-500 text-white rounded-full px-4 py-2 text-xs">
        Load More
      </button>
    </div>
  );
};

export default ContainerHoteis;
