import React from "react";
import Checkout from "./Checkout";

function Hero() {
  return (
    <div className="m-5 my-10 mt-24 lg:mt-10">
      <div className="hero-banner bg-indigo-200 py-3 px-5 rounded shadow-md border border-indigo-500/50">
        <div className="hero-banner-content space-y-2 md:space-y-0 sm:flex items-center justify-between">
          <p className="md:text-xl font-bold text-slate-800">
            Call us for a free quote & 10% discount!
          </p>
          <button className="bg-white text-sm md:text-base py-2 px-3 shadow drop-shadow-sm rounded-md">
            <span className="text-indigo-800 font-bold ">
              Call (778) - 751 - 7595
            </span>
          </button>
        </div>
      </div>
      <div className="hero-headline my-10">
        <h3 className="text-center font-melodrama text-4xl font-bold">
          Get a free quote & book In 30 Seconds
        </h3>
        <p className="text-[15px] text-slate-800 text-center my-3 max-w-xl mx-auto">
          Super simple! Pick the cleaning type you want to book for. Select or
          fill the values in the fields, find the date and time you want to book
          for and wait for an email confirmation!
        </p>
      </div>
      <div className="hero-form w-full my-10">
        <Checkout />
      </div>
    </div>
  );
}

export default Hero;
