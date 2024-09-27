import React, { useContext, useState } from "react";
import Header from "../components/Layout/Header";
import Template1 from "../templates/Template1";
import { Navigate, useNavigate } from "react-router-dom";
import { Data } from "./Context";
function Education() {
  const { user, setUser, eduObj, setEduObj, skillObj, setSkillObj } =
    useContext(Data);
  // const [skillObj, setSkillObj] = useState({});
  const [skillNumber, setSkillNumber] = useState([null]);
  const [show, setShow] = useState(0);
  const [showRedStar, setShowRedStar] = useState("");
  const [progress, setShowProgress] = useState();

  const navigate = useNavigate();
  return (
    <>
      <Header />
      {/* {JSON.stringify(user)} */}
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
                    onClick={() => navigate("/education")}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
                    Skip
                  </button>
                  <button
                  onClick={()=>navigate("/certification")} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                    Next
                  </button>
                </div>
              </div>
              <h2 className=" text-3xl  font-semibold  mb-4">Skills </h2>
              <p className="text-gray-700 mb-4">
                Add your most relevant education, including programs you're
                currently enrolled in.{" "}
              </p>
              {skillNumber.map((i, index) => (
                <div className="flex justify-between p-4 items-center  border">
                  <div className="flex ">
                    <div className="flex justify-center items-center gap-4">
                      <label className="font-semibold">Skills</label>
                      <input
                        onChange={(e) =>
                          setSkillObj({ ...skillObj, skill: e.target.value })
                        }
                        className="border"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {/* <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i> */}
                      <i
                        style={{ color: showRedStar > 0 ? "red" : "black" }}
                        onClick={() => {
                          setShowRedStar(1);
                          setSkillObj({ ...skillObj, progress: 20 });
                        }}
                        className={`fa ${
                          showRedStar >= 1 ? "fa-star" : "fa-star-o"
                        }`}
                        aria-hidden="true"
                      ></i>

                      <i
                        style={{ color: showRedStar > 1 ? "red" : "black" }}
                        onClick={() => {
                          setShowRedStar(2);
                          setSkillObj({ ...skillObj, progress: 40 });
                        }}
                        className={`fa ${
                          showRedStar >= 2 ? "fa-star" : "fa-star-o"
                        }`}
                        aria-hidden="true"
                      ></i>
                      <i
                        style={{ color: showRedStar > 2 ? "red" : "black" }}
                        onClick={() => {
                          setShowRedStar(3);
                          setSkillObj({ ...skillObj, progress: 60 });
                        }}
                        className={`fa ${
                          showRedStar >= 3 ? "fa-star" : "fa-star-o"
                        }`}
                        aria-hidden="true"
                      ></i>
                      <i
                        style={{ color: showRedStar > 3 ? "red" : "black" }}
                        onClick={() => {
                          setShowRedStar(4);
                          setSkillObj({ ...skillObj, progress: 80 });
                        }}
                        className={`fa ${
                          showRedStar >= 4 ? "fa-star" : "fa-star-o"
                        }`}
                        aria-hidden="true"
                      ></i>
                      <i
                        style={{ color: showRedStar > 4 ? "red" : "black" }}
                        onClick={() => {
                          setShowRedStar(5);
                          setSkillObj({ ...skillObj, progress: 100 });
                        }}
                        className={`fa ${
                          showRedStar >= 5 ? "fa-star" : "fa-star-o"
                        }`}
                        aria-hidden="true"
                      ></i>
                    </div>
                    <i
                      onClick={() =>
                        setSkillNumber(
                          skillNumber.filter((j, jindex) => jindex != index)
                        )
                      }
                      class="fa fa-trash cursor-pointer"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              ))}

              {/* --------------------------Button-------------------------------------- */}
              <button
                onClick={() => {
                  setSkillNumber([...skillNumber, null]);
                  setUser({ ...user, skills: [...user.skills, skillObj] }),
                    setSkillObj({});
                }}
                className="text-red-500 hover:underline mb-4"
              >
                + Add more Skills
              </button>
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
