import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Layout/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Data } from "./Context";

function DashBoard() {
  const {allUserData, setAllUserData} = useContext(Data)
  const myLoginData = JSON.parse(localStorage.getItem('user'))
  const [userName, setUserName] = useState("");
  useEffect(()=>{
    let myData = allUserData.find((i)=> i.email.toLowerCase() == myLoginData.email.toLowerCase())
    setUserName(myData?.name)
  },[])

  

  const navigate = useNavigate();
  return (
    
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex justify-center items-center w-full py-10">
        <div className="flex flex-col items-start w-4/5 p-6 gap-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800">My Dashboard</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome back! {userName}
          </h2>
          <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
            <div className="flex gap-4 items-center">
              <label className="text-2xl font-semibold text-gray-800">
                Resumes
              </label>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <button
                onClick={() => navigate("/choose-resume")}
                className="flex items-center gap-4 border-2 border-blue-600 text-blue-600 rounded-lg px-6 py-3 hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <span className="text-lg font-medium">+ Create New Resume</span>
                <img
                  src="https://app.resumebuilder.com/assets/images/callout_banner_icon.png"
                  alt="Create New Resume"
                  className="w-8 h-8"
                />
              </button>
              <img
                src="https://app.resumebuilder.com/assets/images/callout_banner_icon.png"
                alt="Resume Icon"
                className="hidden md:block w-16 h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
