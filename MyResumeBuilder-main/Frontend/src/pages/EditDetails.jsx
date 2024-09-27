import React, { useContext } from "react";
import Header from "../components/Layout/Header";
import Template1 from "../templates/Template1";
import Form from "../components/Form";
import { Data } from "./Context";
import Preview from "../components/Layout/Preview";
function EditDetails() {
  const { previewTemp, setPreviewTemp } = useContext(Data);
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-50 min-h-screen">
        <div className="md:w-2/5 w-full p-4  bg-white shadow-lg rounded-lg overflow-y-auto">
          <Form />
        </div>

        <div className="md:w-3/5 w-full p-4 bg-white shadow-lg rounded-lg  border border-black ">
          <Template1 />
          <div>{previewTemp == true && <Preview />}</div>

          <div className="absolute right-14 top-[150vh] flex justify-center items-center ">
            <button
              onClick={() => setPreviewTemp(true)}
              className="flex  items-center gap-4 px-3 py-1 rounded-xl text-blue-500 transition duration-300 font-semibold  bg-white border border-blue-500 hover:text-white hover:bg-blue-500  "
            >
              {" "}
              <i class="fa fa-eye-slash  " aria-hidden="true"></i>
              Preview
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditDetails;
