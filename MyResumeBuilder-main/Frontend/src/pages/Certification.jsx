import React, { useContext, useState } from "react";
import Header from "../components/Layout/Header";
import Template1 from "../templates/Template1";
import { useNavigate } from "react-router-dom";
import { Data } from "./Context";

function Certification() {
  const { user, setUser, certObj, setCertObj } = useContext(Data);
  const [show, setShow] = useState(0);
  const [certNumber, setCertNumber] = useState([null]);

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
                    onClick={() => navigate("/skills")}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
                    Skip
                  </button>
                  <button
                    onClick={() => navigate("/summary")}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Next
                  </button>
                </div>
              </div>
              <h2 className=" text-3xl  font-semibold  mb-4">Certifications</h2>
              <p className="text-gray-700 mb-4">
                Add your relevant certifications and achievements.
              </p>
              <div className="border-t  border-gray-200 mt-2 mb-6"></div>

              <div className="flex flex-col gap-4">
                {certNumber.map((i, index) => (
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
                            setCertNumber(
                              certNumber.filter((j, jindex) => jindex != index)
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
                          Certification Name
                        </label>
                        <input
                          onChange={(e) =>
                            setCertObj({
                              ...certObj,
                              certificationName: e.target.value,
                            })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Certification Name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          Issuing Organization
                        </label>
                        <input
                          onChange={(e) =>
                            setCertObj({
                              ...certObj,
                              issuingOrganization: e.target.value,
                            })
                          }
                          type="text"
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Issuing Organization"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          Issue Date
                        </label>
                        <input
                          type="date"
                          onChange={(e) =>
                            setCertObj({
                              ...certObj,
                              issueDate: e.target.value,
                            })
                          }
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">Expiry Date</label>
                        <input
                          type="date"
                          onChange={(e) =>
                            setCertObj({
                              ...certObj,
                              expiryDate: e.target.value,
                            })
                          }
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">Credential ID</label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setCertObj({
                              ...certObj,
                              credentialId: e.target.value,
                            })
                          }
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Credential ID"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          Credential URL
                        </label>
                        <input
                          type="url"
                          onChange={(e) =>
                            setCertObj({
                              ...certObj,
                              credentialUrl: e.target.value,
                            })
                          }
                          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Credential URL"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Description</label>
                      <textarea
                        onChange={(e) =>
                          setCertObj({
                            ...certObj,
                            description: e.target.value,
                          })
                        }
                        className="mt-1 p-2 w-full h-24 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="..."
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
              {/* ------------------------------button--------------------------------------------------------------- */}
              <button
                onClick={() => {
                  setCertNumber([...certNumber, null]);
                  setShow(show + 1);
                  setUser({
                    ...user,
                    certifications: [...user.certifications, certObj],
                  });
                }}
                className="text-red-500 hover:underline mb-4"
              >
                + Add more Certifications
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

export default Certification;
