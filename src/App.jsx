import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        theme="light"
        transition={Slide}
        closeOnClick
        pauseOnHover
        limit={1}
        className={"text-sm font-semibold"}
      />
      <div className="max-w-[65rem] mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
