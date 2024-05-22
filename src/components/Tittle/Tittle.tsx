import React from "react";
import Division from "../Division/Division";

const Tittle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className=" text-3xl font-bold text-center">{children}</h2>
      <Division />
    </div>
  );
};

export default Tittle;
