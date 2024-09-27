import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Template2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <Header /> */}
      <main className="flex-grow flex flex-col items-center">
        <div className="w-11/12 my-10 bg-blue-600 p-4 rounded">
          <h1 className="text-4xl font-bold text-white">Alex Applicant</h1>
        </div>
        <div className="w-11/12 flex flex-col items-center">
          <h2 className="text-2xl font-bold">Software Developer</h2>
          <h3 className="text-xl font-bold text-blue-600">
            1234 Maple Street, Springfield, IL 62701
          </h3>
          <div className="my-4">
            <label className="block text-lg font-bold text-blue-600">
              (555) 123-4567
            </label>
            <label className="block text-lg font-bold text-blue-600">
              alex@example.com
            </label>
          </div>
          <div className="w-full border-b-2 border-blue-600 mb-6"></div>
          <p className="text-center mb-6">
            Software developer with 5 years of experience in full-stack
            development, specializing in JavaScript frameworks and RESTful API
            design. Passionate about building scalable and maintainable web
            applications.
          </p>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <div className="w-full border-b-2 border-blue-600 mb-6"></div>
            <div className="mb-6">
              <div className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <label className="font-bold block">
                      Software Developer
                    </label>
                    <label className="block">
                      Tech Solutions Inc., Springfield, IL
                    </label>
                  </div>
                  <label className="block">June 2018 - Present</label>
                </div>
                <ul className="list-disc ml-6 mt-2">
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
              <div>
                <div className="flex justify-between">
                  <div>
                    <label className="font-bold block">
                      Junior Developer
                    </label>
                    <label className="block">
                      Web Innovators, Chicago, IL
                    </label>
                  </div>
                  <label className="block">January 2015 - May 2018</label>
                </div>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Assisted in the development of web applications using
                    HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Worked closely with senior developers to enhance coding
                    skills and best practices.
                  </li>
                  <li>
                    Conducted testing and debugging of web applications to
                    ensure optimal performance.
                  </li>
                  <li>
                    Created and maintained technical documentation for
                    projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="w-full border-b-2 border-blue-600 mb-6"></div>
            <div className="mb-6">
              <label className="font-bold block">
                University of Illinois at Urbana-Champaign
              </label>
              <label className="block">
                Bachelor of Science in Computer Science, September 2011 - May
                2015
              </label>
              <label className="block">Dean's List, Fall 2013</label>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Key Skills</h2>
            <div className="w-full border-b-2 border-blue-600 mb-6"></div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="font-bold block">JavaScript</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-9/12"></div>
                </div>
              </div>
              <div>
                <label className="font-bold block">React</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-8/12"></div>
                </div>
              </div>
              <div>
                <label className="font-bold block">Node.js</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-7/12"></div>
                </div>
              </div>
              <div>
                <label className="font-bold block">MongoDB</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-6/12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="w-full border-b-2 border-blue-600 mb-6"></div>
            <div className="mb-4">
              <div className="flex justify-between">
                <div>
                  <label className="font-bold block">
                    Full-Stack Web Development Certification
                  </label>
                  <label className="block">
                    Coursera - University of Michigan
                  </label>
                </div>
                <label className="block">August 2021</label>
              </div>
              <label className="block">
                Completed a comprehensive course on full-stack web development,
                covering front-end and back-end technologies.
              </label>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Template2;
