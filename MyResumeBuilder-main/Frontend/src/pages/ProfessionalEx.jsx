import React, { useContext, useState } from "react";
import Header from "../components/Layout/Header";
import Template1 from "../templates/Template1"; //import child for 
import { useNavigate } from "react-router-dom";
import { Data } from "./Context";
function ProfessionalEx() {
  const { user, setUser } = useContext(Data);
  const navigate = useNavigate();
  const [expNumber, setExpNumber] = useState([null]); //to control the number of iteration in map function
  const [show, setShow] = useState(0);
  const [expObj, setExpObj] = useState({}); // To add data of this page in a object

  return (
    <>
      <Header />
      {/* {JSON.stringify(user)} */}
      <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-50 min-h-screen">
        <div className="md:w-2/5 w-full p-4 bg-white shadow-lg rounded-lg overflow-y-auto">
          <div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => navigate("/template")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Templates
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate("/editdetails")}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
                    Skip
                  </button>
                  <button
                    onClick={() => {
                      setUser({
                        ...user,
                        experience: [...user.experience, expObj],
                      });
                      setExpObj({});
                      navigate("/education");
                    }}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Next
                  </button>
                </div>
              </div>
              <h2 className=" text-3xl  font-semibold  mb-4">
                Professional Experience
              </h2>
              <p className="text-gray-700 mb-4">
                Tell us about your most recent job.
              </p>
              <div className="border-t border-gray-200 mt-2 mb-6"></div>

              <div className="flex flex-col gap-4 ">
                {expNumber.map((i, index) => (
                  <div
                    key={index}
                    onClick={() => setShow(index)}
                    className={`overflow-hidden  transition-all ${
                      index === show ? "h-auto" : "h-[6vh]"
                    }`}
                  >
                    <div className="h-[6vh] w-full border-2 rounded-lg cursor-pointer  flex justify-between p-4">
                      <i class="fa fa-th" aria-hidden="true"></i>
                      <div className="flex gap-4">
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                        <i
                          onClick={() =>
                            setExpNumber(
                              expNumber.filter((j, jindex) => jindex != index)
                            )
                          }
                          class="fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-gray-700">
                          Position Title
                        </label>
                        <input
                          onChange={(e) =>
                            setExpObj({ ...expObj, position: e.target.value })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Position Title"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          Company Name
                        </label>
                        <input
                          onChange={(e) =>
                            setExpObj({
                              ...expObj,
                              companyName: e.target.value,
                            })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">City</label>
                        <input
                          onChange={(e) =>
                            setExpObj({ ...expObj, city: e.target.value })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">State</label>
                        <input
                          onChange={(e) =>
                            setExpObj({ ...expObj, state: e.target.value })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          Start Date
                        </label>
                        <input
                          onChange={(e) =>
                            setExpObj({ ...expObj, startDate: e.target.value })
                          }
                          type="date"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">End Date</label>
                        <input
                          onChange={(e) =>
                            setExpObj({ ...expObj, endDate: e.target.value })
                          }
                          type="date"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex items-center mt-2 md:col-span-2">
                        <input
                          type="checkbox"
                          id="currentlyEmployed"
                          className="mr-2"
                        />
                        <label
                          htmlFor="currentlyEmployed"
                          className="text-gray-700"
                        >
                          Currently Employed
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">
                        Work Summary
                      </label>
                      <textarea
                        onChange={(e) =>
                          setExpObj({ ...expObj, summary: e.target.value })
                        }
                        className="mt-1 p-2 w-full h-24 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="..."
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
              {/* ---------------------Button-------------------------------- */}
              <button
                onClick={() => {
                  setExpNumber([...expNumber, null]);
                  setShow(show + 1);
                  setUser({
                    ...user,
                    experience: [...user.experience, expObj],
                  });
                  setExpObj({});
                }}
                className="text-red-500 hover:underline mb-4"
              >
                + Add more work experience
              </button>
              <div className="flex justify-end items-center gap-2">
                <button className="text-gray-500 hover:underline">
                  Quick Tips
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 w-full p-4 bg-white shadow-lg rounded-lg border border-black">
          <div>
            <Template1 expObjProps={expObj} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfessionalEx;
