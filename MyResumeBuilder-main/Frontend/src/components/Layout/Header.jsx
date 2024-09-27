import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white text-black p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-4">
        <img
          onClick={() => navigate("/")}
          className="h-14 cursor-pointer"
          src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/2023/rb-new-logo-color.svg"
          alt="logo"
        />
      </div>
      <nav className="flex gap-6 items-center text-lg">
        <label
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
        >
          Home
        </label>
        <label
          onClick={() => navigate("/template")}
          className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
        >
          Resume Templates
        </label>
        <label
          onClick={() => navigate("/sign-in")}
          className="cursor-pointer hover:text-yellow-500 transition-colors duration-300"
        >
          My Account
        </label>
        <button
          onClick={() => navigate("/template")}
          type="button"
          className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all duration-300"
        >
          Build My Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
