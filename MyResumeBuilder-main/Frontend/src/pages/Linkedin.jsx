import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useNavigate } from "react-router-dom";

function Linkedin() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center py-10 text-center bg-gray-100">
        <div className="mb-10 px-4">
          <h1 className="text-4xl font-bold text-gray-800">
            How do you want to start?
          </h1>
          <p className="text-lg font-semibold text-gray-600 mt-4">
            Start from scratch or upload your LinkedIn profile.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 px-4 w-full max-w-4xl">
          <div 
            onClick={() => navigate("/editdetails")}
            className="cursor-pointer border border-blue-600 rounded-lg p-6 bg-white shadow-md transition-transform transform hover:scale-105 flex-1"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Create a New Resume
            </h3>
            <p className="text-base font-medium text-gray-600 mt-2 mb-4">
              Start with a blank piece of paper, and we'll guide you step by step.
            </p>
            <img
              src="https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916161.jpg?w=740&t=st=1721655833~exp=1721656433~hmac=912dcd19acb31175ec18af16a401c05bfebc21a86e67212d102c9b11d1532d49"
              alt="Resume Thumbnail"
              className="w-full h-auto rounded"
            />
          </div>
          <div 
            onClick={() => navigate("/editdetails")}
            className="cursor-pointer border border-blue-600 rounded-lg p-6 bg-white shadow-md transition-transform transform hover:scale-105 flex-1"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Upload LinkedIn Profile
            </h3>
            <p className="text-base font-medium text-gray-600 mt-2 mb-4">
              Upload your LinkedIn profile to get started quickly.
            </p>
            <img
              src="https://img.freepik.com/free-vector/flat-design-linkedin-mockup_23-2149217511.jpg?w=1060&t=st=1721655675~exp=1721656275~hmac=ea28d2626bc271291fde142cf656775d2105e202fa09f8c16f814b130a63da1a"
              alt="LinkedIn Thumbnail"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Linkedin;
