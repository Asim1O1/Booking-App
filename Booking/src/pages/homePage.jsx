import React from "react";
import NavBar from "../components/navbar";
import Button from "../components/button";


const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-36 ml-16">
        <h1 className="text-5xl font-bold text-gray-800">
          A Lifetime of Discounts
        </h1>
        <p className="pt-6 text-lg text-gray-600 max-w-2xl">
          Get rewarded for your travels—unlock instant savings of 10% or more
          with a free BookMe account.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default HomePage;
