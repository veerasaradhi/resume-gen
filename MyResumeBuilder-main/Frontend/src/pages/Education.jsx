import React, { useContext, useState } from "react";
import Header from "../components/Layout/Header";
import Template1 from "../templates/Template1";
import { Navigate, useNavigate } from "react-router-dom";
import { Data } from "./Context";
function Education() {
  const { user, setUser, eduObj, setEduObj } = useContext(Data);
  const [show, setShow] = useState(0);
  const [eduNumber, setEduNumber] = useState([null]);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-50 min-h-screen">
        <div className="md:w-2/5 w-full p-4 bg-white shadow-lg rounded-lg overflow-y-auto">
          <div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Templates
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate("/professionalex")}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
                    Skip
                  </button>
                  <button
                    onClick={() => navigate("/skills")}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Next
                  </button>
                </div>
              </div>
              <h2 className=" text-3xl  font-semibold  mb-4">Education </h2>
              <p className="text-gray-700 mb-4">
                Add your most relevant education, including programs you're
                currently enrolled in.{" "}
              </p>
              <div className="border-t  border-gray-200 mt-2 mb-6"></div>

              <div className="flex flex-col gap-4">
                {eduNumber.map((i, index) => (
                  <div
                    onClick={() => setShow(index)}
                    className={`overflow-hidden  transition-all ${
                      index == show ? "h-auto" : "h-[6vh]"
                    }`}
                  >
                    <div className="flex p-4 h-[6vh] w-full border-2 rounded-lg cursor-pointer justify-between">
                      <i class="fa fa-th" aria-hidden="true"></i>
                      <div className="flex jus gap-4">
                        <i class="fa fa-caret-down" aria-hidden="true"></i>
                        <i
                          onClick={() =>
                            setEduNumber(
                              eduNumber.filter((j, jindex) => jindex != index)
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
                          School Name
                        </label>
                        <input
                          onChange={(e) =>
                            setEduObj({ ...eduObj, schoolName: e.target.value })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="School Name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          School Location
                        </label>
                        <input
                          onChange={(e) =>
                            setEduObj({
                              ...eduObj,
                              schoolLocation: e.target.value,
                            })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="School Location"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">Degree</label>
                        <input
                          onChange={(e) =>
                            setEduObj({ ...eduObj, degree: e.target.value })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Degree"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          Field of Study
                        </label>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Field of Study"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          Start Date
                        </label>
                        <input
                          type="date"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">End Date</label>
                        <input
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
                      <label className="block text-gray-700">Description</label>
                      <textarea
                        className="mt-1 p-2 w-full h-24 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="..."
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
              {/* -------------------------button-------------------------------------------------------------------------- */}
              {}
              <button
                onClick={() => {
                  setEduNumber([...eduNumber, null]);
                  setShow(show + 1);
                  setUser({
                    ...user,
                    education: [...user.education, eduObj],
                  });
                }}
                className="text-red-500 hover:underline mb-4"
              >
                + Add more Education
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
            <Template1 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
