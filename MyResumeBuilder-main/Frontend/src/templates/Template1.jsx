import React, { useContext } from "react";
import { Data } from "../pages/Context";

const Template1 = ({ expObjProps }) => {
  const { user, eduObj, skillObj, certObj } = useContext(Data);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div id="pdf-content" className="flex flex-col min-h-screen w-full">
      <main className="flex-grow flex flex-col items-center px-4">
        {/* Name and Job Title */}
        <div className="w-full max-w-4xl my-6 bg-[#98C64D] p-4 text-center rounded-md shadow-md">
          <h1 className="text-3xl font-bold text-white">
            {user.firstName || "Chris"} {user.lastName || "Candidate"}
          </h1>
          <h2 className="text-xl font-bold mt-1">
            {user.jobtitle || "Human Resource Manager"}
          </h2>
          <div className="flex justify-center gap-2 mt-1">
            <h3 className="text-lg font-bold text-white">
              {user.city || "New York"}
            </h3>
            <h3 className="text-lg font-bold text-white">
              {user.country || "USA"}
            </h3>
          </div>
          <div className="flex flex-col items-center mt-2">
            <label className="block text-md font-bold text-white">
              {user.number || "+91987456321"}
            </label>
            <label className="block text-md font-bold text-white">
              {user.email || "email@youremail.com"}
            </label>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full max-w-4xl mb-6">
          <h2 className="text-xl font-bold mb-2 text-center">Summary</h2>
          <div className="border-b-2 border-[#98C64D] mb-4"></div>
          <p className="text-md">
            {user.summary ||
              "Software developer with 5 years of experience in full-stack development, specializing in JavaScript frameworks and RESTful API design. Passionate about building scalable and maintainable web applications."}
          </p>
        </div>

        {/* Professional Experience */}
        <div className="w-full max-w-4xl mb-6">
          <h2 className="text-xl font-bold mb-2 text-center">
            Professional Experience
          </h2>
          <div className="border-b-2 border-[#98C64D] mb-4"></div>
          <div className="space-y-4">
            {user?.experience?.map((experience, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded-md shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <label className="font-bold block text-sm">
                      {experience?.position || "HR Manager"}
                    </label>
                    <label className="text-sm">
                      {experience?.companyName ||
                        "Jim's Widget Factory, Plano, TX"}
                    </label>
                  </div>
                  <label className="text-sm">
                    {experience?.startDate || "January 2016 - Present"}
                  </label>
                </div>
                <ul className="list-disc ml-4 mt-2 text-sm">
                  {experience?.summary?.split(". ").map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {expObjProps?.position ? (
              <div className="p-2 bg-gray-100 rounded-md shadow-sm">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <label className="font-bold block text-sm">
                      {expObjProps.position}
                    </label>
                    <div className="flex gap-1">
                      <label className="text-sm">
                        {expObjProps.companyName}
                      </label>
                      <label className="text-sm">{expObjProps.city}</label>
                      <label className="text-sm">{expObjProps.state}</label>
                    </div>
                  </div>
                  <label className="text-sm">
                    {expObjProps.startDate &&
                      `${
                        months[+expObjProps.startDate.slice(6, 7) - 1]
                      } ${expObjProps.startDate.slice(0, 4)}`}
                  </label>
                  <label className="text-sm">
                    {expObjProps.endDate &&
                      `${
                        months[+expObjProps.endDate.slice(6, 7) - 1]
                      } ${expObjProps.endDate.slice(0, 4)}`}
                  </label>
                </div>
                <ul className="list-disc ml-4 mt-2 text-sm">
                  {expObjProps?.summary?.split(". ").map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="p-2 bg-gray-100 rounded-md shadow-sm">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <label className="font-bold block text-sm">
                      {"Human Resources Manager"}
                    </label>
                    <div className="flex gap-1">
                      <label className="text-sm">
                        {"Jim's Widget Factory"}
                      </label>
                      <label className="text-sm">{"Plano"}</label>
                      <label className="text-sm">{"TX"}</label>
                    </div>
                  </div>
                  <label className="text-sm">{"January 2016 - Present"}</label>
                </div>
                <ul className="list-disc ml-4 mt-2 text-sm">
                  <li>
                    Developed and maintained web applications using React,
                    Node.js, and MongoDB.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to define, design,
                    and ship new features.
                  </li>
                  <li>
                    Optimized application performance and improved user
                    experience.
                  </li>
                  <li>
                    Participated in code reviews and provided constructive
                    feedback to team members.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Education */}
        <div className="w-full max-w-4xl mb-6">
          <h2 className="text-xl font-bold mb-2 text-center">Education</h2>
          <div className="border-b-2 border-[#98C64D] mb-4"></div>
          <div className="space-y-2">
            <div className="p-2 bg-gray-100 rounded-md shadow-sm">
              <label className="font-bold block text-sm">
                {eduObj.schoolName || "The University of Texas at Dallas"}
              </label>
              <label className="text-sm">
                {eduObj.schoolLocation || "School Location"}
              </label>
              <div className="flex gap-1">
                <label className="text-sm">
                  {eduObj.degree || "Bachelor of Engineering"}
                </label>
                <label className="text-sm">{eduObj.major || "Civil"}</label>
              </div>
            </div>
          </div>
        </div>

        {/* Key Skills */}
        <div className="w-full max-w-4xl p-4 bg-gray-100 rounded-md shadow-md mb-6">
          <h2 className="text-xl font-bold mb-2 text-center">Key Skills</h2>
          <div className="border-b-2 border-[#98C64D] mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {user.skills.map((skill, index) => (
              <div key={index} className="flex gap-2 items-center">
                <label className="font-bold block text-sm">{skill.skill}</label>
                <div className="h-3 w-full max-w-xs border border-green-500">
                  <div
                    style={{
                      width: skill.progress ? `${skill.progress}%` : 0,
                    }}
                    className="bg-green-500 h-3"
                  ></div>
                </div>
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <label className="font-bold block text-sm">
                {skillObj.skill || "Detail oriented"}
              </label>
              <div className="h-3 w-full max-w-xs border border-green-500">
                <div
                  style={{
                    width: skillObj.progress ? `${skillObj.progress}%` : 0,
                  }}
                  className="bg-green-500 h-3"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="w-full max-w-4xl mb-6">
          <h2 className="text-xl font-bold mb-2 text-center">Certifications</h2>
          <div className="border-b-2 border-[#98C64D] mb-4"></div>
          <div className="space-y-2">
            <div className="p-2 bg-gray-100 rounded-md shadow-sm">
              <div className="flex justify-between">
                <div>
                  <label className="font-bold block text-sm">
                    Full-Stack Web Development Certification
                  </label>
                  <label className="text-sm">
                    Coursera - University of Michigan
                  </label>
                </div>
                <label className="text-sm">August 2021</label>
              </div>
              <label className="text-sm">
                Completed a comprehensive course on full-stack web development,
                covering front-end and back-end technologies.
              </label>
            </div>
            {user.certifications?.map((certification, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded-md shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <label className="font-bold block text-sm">
                      {certification.certName || "Certification Name"}
                    </label>
                    <label className="text-sm">
                      {certification.issuedBy || "Issuing Organization"}
                    </label>
                  </div>
                  <label className="text-sm">
                    {certification.issueDate || "Issue Date"}
                  </label>
                </div>
                <label className="text-sm">
                  {certification.description || "Description"}
                </label>
              </div>
            ))}
            <div className="p-2 bg-gray-100 rounded-md shadow-sm">
              <div className="flex justify-between">
                <div>
                  <label className="font-bold block text-sm">
                    {certObj?.certName || "Professional in Human Resources"}
                  </label>
                  <label className="text-sm">
                    {certObj?.issuedBy ||
                      "Human Resource Certification Institute (HRCI)"}
                  </label>
                </div>
                <label className="text-sm">
                  {certObj?.issueDate || "September 2020"}
                </label>
              </div>
              <label className="text-sm">
                {certObj?.description ||
                  "I earned the Professional in Human Resources certificate from the Human Resource Certification Institute (HRCI)."}
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Template1;
