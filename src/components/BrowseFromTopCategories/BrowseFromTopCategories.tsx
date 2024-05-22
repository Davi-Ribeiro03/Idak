import React from "react";
import Categories from "../Categories/Categories";
import Division from "../Division/Division";
import Tittle from "../Tittle/Tittle";

const BrowseFromTopCategories = () => {
  return (
    <div className="mt-2 flex flex-col items-center">
      <Tittle>BrowseFromTopCategories</Tittle>
      <Categories />
    </div>
  );
};

export default BrowseFromTopCategories;
