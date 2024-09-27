import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Temp1 from "../../src/assets/Images/temp1.png";
import Temp2 from "../../src/assets/Images/temp2.png";
import Temp3 from "../../src/assets/Images/temp3.png";
import Temp4 from "../../src/assets/Images/temp4.png";
import { useNavigate } from "react-router-dom";

const ChooseTemplate = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 p-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Choose Your Template
          </h1>
          <p className="text-center text-[1.2rem] mb-12">
            Select a resume template that best showcases your skills and
            experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[Temp1, Temp2, Temp3, Temp4].map((temp, index) => (
              <div
                key={index}
                onClick={() => navigate("/choose-resume")}
                className="cursor-pointer transform transition duration-300 hover:scale-110 "
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                  <img
                    src={temp}
                    alt={`img${index + 1}`}
                    className="w-full h-[40vh]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                      Select Template
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChooseTemplate;
