import Image from "next/image";
import React from "react";

const CardHotel = () => {
  return (
    <div className="border-[1px] border-gray-200 w-80 h-96  mb-10 p-0 relative rounded-lg">
      <Image
        src="/hotel1.svg"
        width={0}
        height={0}
        alt=""
        className="w-full h-52 rounded-t-lg rounded-r-lg rounded-b-none rounded-bl-none relative"
      />
      <span className="bg-[#77B747] rounded-full text-white text-xs px-4 py-1 absolute top-3 right-3">
        For Rent
      </span>

      <div className="w-[90%] mx-auto mt-2 flex flex-col gap-3">
        <p className="text-xs ">
          <span className="text-[#E93740] text-sm">85,000 LKR</span> /Month
        </p>

        <h3 className="font-bold">Luxury villa in Rego Park</h3>

        <section className="flex gap-2">
          <span className="text-xs">3 Bedrooms</span>
          <span className="text-xs border-r-[1px] border-l-[1px] border-gray-500  px-3">
            2 Bathrooms
          </span>
          <span className="text-xs">2500 Square FT</span>
        </section>
      </div>

      <div className="mt-3 border-t-2 border-gray-200 flex pt-2 justify-between items-center max-w-[90%] mx-auto">
        <Image src="/perfil.svg" width={45} height={45} alt="" />
        <section className="flex-1 pl-2">
          <p className="text-sm">Anne Liza</p>
          <span className="text-xs  font-light">Property Seller</span>
        </section>
        <Image
          src="/heart.svg"
          width={25}
          height={25}
          alt=""
          className="bg-gray-100 h-7 w-7 p-1 rounded-sm"
        />
      </div>
    </div>
  );
};

export default CardHotel;
