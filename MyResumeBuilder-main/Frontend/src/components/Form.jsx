import React, { useContext } from "react";
import { Data } from "../pages/Context";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(Data);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate("/template")}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Templates
          </button>
          <button
            onClick={() => navigate("/professionalex")}
            className="bg-red-500 text-white px-5 py-2.5 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Next
          </button>
        </div>
        <h2 className="text-3xl font-semibold  mb-4">Personal Details</h2>
        <p className="text-gray-700 mb-8 text-lg">
          Get started with the basics: your name and contact information.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-2 text-gray-700 font-medium"
            >
              First Name
            </label>
            <input
              id="firstName"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-2 text-gray-700 font-medium"
            >
              Last Name
            </label>
            <input
              id="lastName"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="jobTitle"
              className="mb-2 text-gray-700 font-medium"
            >
              Job Title
            </label>
            <input
              id="jobTitle"
              onChange={(e) => setUser({ ...user, jobtitle: e.target.value })}
              type="text"
              placeholder="Job Title"
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="mb-2 text-gray-700 font-medium">
              City
            </label>
            <input
              id="city"
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              type="text"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="mb-2 text-gray-700 font-medium">
              Country
            </label>
            <input
              id="country"
              onChange={(e) => setUser({ ...user, country: e.target.value })}
              type="text"
              placeholder="Country"
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-gray-700 font-medium">
              Phone
            </label>
            <input
              id="phone"
              onChange={(e) => setUser({ ...user, number: e.target.value })}
              type="text"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-700 font-medium">
              Email Address
            </label>
            <input
              id="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="summary" className="mb-2 text-gray-700 font-medium">
            Summary
            </label>
            <textarea
              id="summary"
              onChange={(e) => setUser({ ...user, summary: e.target.value })}
              type="summary"
              placeholder="Provide a brief summary about yourself."
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-[100%]"
            />
          </div>
        </form>
        <button className="text-blue-500 mt-6 text-lg hover:underline">
          + Add Social Links
        </button>
        <p className="text-gray-600 mt-4 text-sm">
          By creating a resume, you agree to receive emails. Unsubscribe
          anytime.
        </p>
      </div>
    </div>
  );
};

export default Form;
