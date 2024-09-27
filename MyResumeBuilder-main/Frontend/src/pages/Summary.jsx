import React, { useContext, useState } from "react";
import Header from "../components/Layout/Header";
import Template1 from "../templates/Template1";
import { useNavigate } from "react-router-dom";
import { Data } from "./Context";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function Summary() {
  const { user, setUser } = useContext(Data);
  const [summary, setSummary] = useState(user.summary || "");

  const navigate = useNavigate();
  const exportPDF = async () => {
    const input = document.getElementById('pdf-content');
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('component.pdf');
  };
  
  return (
    <>
      <Header />
      <div >
        <h1>My PDF Content</h1>
        <p>This content will be exported to a PDF.</p>
      </div>
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
                    onClick={() => navigate("/certification")}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
                  >
                    Back
                  </button>
                  <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
                    Skip
                  </button>
                  <button
                    onClick={() => {
                      setUser({ ...user, summary });
                      navigate("");
                    }}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Next
                  </button>
                  <button
                   onClick={()=> exportPDF()}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Save
                  </button>
                </div>
              </div>
              <h2 className=" text-3xl  font-semibold  mb-4">Summary</h2>
              <p className="text-gray-700 mb-4">
                Provide a brief summary about yourself.
              </p>
              <div className="border-t  border-gray-200 mt-2 mb-6"></div>

              <div className="mb-4">
                <label className="block text-gray-700">Summary</label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="mt-1 p-2 w-full h-24 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write a brief summary about yourself..."
                ></textarea>
              </div>
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

export default Summary;
