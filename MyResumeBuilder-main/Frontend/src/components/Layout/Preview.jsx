import React, { useContext } from "react";
import Template1 from "../../templates/Template1";
import { Data } from "../../pages/Context";

function Preview() {
  const { previewTemp, setPreviewTemp } = useContext(Data);
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 flex justify-center items-center ">
      <div className=" bg-black opacity-60 h-full absolute w-full flex ">
      </div>
      <div className="h-[80vh] bg-white w-[70%] relative overflow-scroll  ">
        <i onClick={()=>setPreviewTemp(false)} class="fa fa-times  absolute top-2 right-3 bg-black rounded-full p-3 text-white " aria-hidden="true"></i>

          <Template1 />
      </div>
      
    </div>
  );
}

export default Preview;
