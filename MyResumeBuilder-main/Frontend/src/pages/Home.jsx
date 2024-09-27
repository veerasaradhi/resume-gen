import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <div className="flex flex-grow items-center justify-center p-5">
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="flex-1 p-5 md:p-10">
            <img
              className="w-[70%] h-full object-cover"
              src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/2023/landing-banner-bg-light.svg"
              alt="Hero"
            />
          </div>
          <div className="flex-1 p-5 md:p-10 flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              The Best Online <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
                Resume Builder
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-6">
              Easily create the perfect resume for any job using our best-in-class
              resume builder platform.
            </p>
            <button
              onClick={() => navigate("/template")}
              type="button"
              className="w-full max-w-xs mx-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-lg px-5 py-3.5 text-center transition duration-300"
            >
              Create my resume
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
