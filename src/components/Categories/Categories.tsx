import Image from "next/image";
import React from "react";

const CATEGORIES = [
  {
    img: "/like.svg",
    text: "Holiday Rentals",
  },
  {
    img: "/home.svg",
    text: "Residencial Spaces",
  },
  {
    img: "/EventSpaces.svg",
    text: "Event Spaces",
  },
  {
    img: "/dolar.svg",
    text: "Commercial Properties",
  },
  {
    img: "/more.svg",
    text: "More",
  },
];

const Categories = () => {
  return (
    <div className="flex justify-center mt-4 gap-6">
      {CATEGORIES.map((category, index) => (
        <div
          key={index}
          className="flex items-center gap-1 border-gray-200 border-2 rounded-full py-1 pl-1 pr-6"
        >
          <Image alt="" src={category.img} width={40} height={40} />
          <span className="text-sm">{category.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
