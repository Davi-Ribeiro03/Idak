import React from "react";
import Image from "next/image";

import Button from "../Button/Button";
import Search from "../Images/Search";

import search2 from "../../../public/search2.svg";
import location from "../../../public/location.svg";

//bg-[url(/familyMobile.svg)] md:bg-[url(/family.svg)]
const IntroHome = () => {
  return (
    <div className="h-screen bg-contain bg-no-repeat pt-8 relative">
      <Image
        src="/family.svg"
        width={100}
        height={100}
        alt="Imagem de uma familia e um carro"
        className="h-auto w-auto absolute top-0 left-0 object-contain -z-10 "
        priority
      />
      <h1 className="font-extrabold text-4xl mb-5 text-center leading-normal md:mt-14 md:text-5xl">
        Discover Your <br className="md:hidden " />
        <strong className="text-primary-500">Perfect Rental</strong>
      </h1>

      <h3 className="text-lg text-center">
        Rent Cars, Houses, and Items in Just a <br className="md:hidden" /> Few
        Clicks
      </h3>

      <section className="mt-12 flex flex-row gap-4 justify-center">
        <Button focus>Places</Button>
        <Button>Rides</Button>
        <Button>Things</Button>
      </section>

      <div className="md:flex md:justify-center md:mt-6">
        <section className="mt-6 mx-4 h-14 relative md:inline-block md:m-0">
          <input
            className="py-4 pl-16 rounded-full w-full h-full focus:outline-none md:rounded-tr-none md:rounded-br-none md:border-r-2 md:placeholder:text-xs md:pb-5 md:w-80 "
            type="text"
            placeholder="Search for cars, houses, and more.."
          />
          <Search className="absolute w-5 top-1/2 -translate-y-1/2 left-8 md:w-4" />
        </section>

        <section className="mt-6 mx-4 h-14 relative md:inline-block md:m-0">
          <input
            className="py-4 pl-16 rounded-full  w-full h-full focus:outline-none md:rounded-tl-none md:rounded-bl-none md:placeholder:text-xs md:w-60 md:pb-5"
            type="text"
            placeholder="Select Location"
            autoComplete="country"
          />
          <Image
            src={location}
            alt="Imagem de uma lupa"
            className="absolute w-5 top-1/2 -translate-y-1/2 left-8 md:w-4"
          />
          <Image
            src={search2}
            alt="imagem de lupa"
            className="hidden md:block absolute top-1/2 -translate-y-1/2 right-2"
          />
        </section>
      </div>

      <section className="mt-6 mx-4 relative md:hidden">
        <button className="w-full h-full bg-primary-500 font-bold text-sm text-white rounded-full py-5">
          Search Now
        </button>

        <Search
          color="white"
          className="absolute top-1/2 -translate-y-1/2 left-28"
        />
      </section>
    </div>
  );
};

export default IntroHome;
