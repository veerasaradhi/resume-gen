import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Template3 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Header /> */}
      <main className="flex-grow flex flex-col items-center">
        <div className="w-11/12 my-10 bg-purple-600 p-4 rounded">
          <h1 className="text-4xl font-bold text-white">Jamie Johnson</h1>
        </div>
        <div className="w-11/12 flex flex-col items-center">
          <h2 className="text-2xl font-bold">Marketing Specialist</h2>
          <h3 className="text-xl font-bold text-purple-600">
            5678 Elm Street, Austin, TX 73301
          </h3>
          <div className="my-4">
            <label className="block text-lg font-bold text-purple-600">
              (512) 987-6543
            </label>
            <label className="block text-lg font-bold text-purple-600">
              jamie@example.com
            </label>
          </div>
          <div className="w-full border-b-2 border-purple-600 mb-6"></div>
          <p className="text-center mb-6">
            Marketing specialist with over 6 years of experience in digital
            marketing, content creation, and social media management. Skilled in
            developing and implementing effective marketing strategies to
            enhance brand awareness and drive sales.
          </p>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <div className="w-full border-b-2 border-purple-600 mb-6"></div>
            <div className="mb-6">
              <div className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <label className="font-bold block">
                      Marketing Specialist
                    </label>
                    <label className="block">
                      Creative Solutions, Austin, TX
                    </label>
                  </div>
                  <label className="block">March 2017 - Present</label>
                </div>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Developed and executed marketing campaigns to promote
                    products and services.
                  </li>
                  <li>
                    Managed social media accounts, increasing follower
                    engagement by 40%.
                  </li>
                  <li>
                    Conducted market research to identify new opportunities and
                    trends.
                  </li>
                  <li>
                    Collaborated with design and content teams to produce
                    promotional materials.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between">
                  <div>
                    <label className="font-bold block">
                      Marketing Coordinator
                    </label>
                    <label className="block">
                      Brand Builders, Houston, TX
                    </label>
                  </div>
                  <label className="block">June 2014 - February 2017</label>
                </div>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Assisted in the development of marketing plans and
                    strategies.
                  </li>
                  <li>
                    Coordinated events and trade shows, increasing brand
                    visibility.
                  </li>
                  <li>
                    Maintained the marketing database and created reports.
                  </li>
                  <li>
                    Developed content for newsletters, brochures, and social
                    media.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="w-full border-b-2 border-purple-600 mb-6"></div>
            <div className="mb-6">
              <label className="font-bold block">
                University of Texas at Austin
              </label>
              <label className="block">
                Bachelor of Business Administration in Marketing, September
                2010 - May 2014
              </label>
              <label className="block">Graduated with Honors</label>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Key Skills</h2>
            <div className="w-full border-b-2 border-purple-600 mb-6"></div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="font-bold block">SEO</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full w-10/12"></div>
                </div>
              </div>
              <div>
                <label className="font-bold block">Content Creation</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full w-9/12"></div>
                </div>
              </div>
              <div>
                <label className="font-bold block">Social Media</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full w-8/12"></div>
                </div>
              </div>
              <div>
                <label className="font-bold block">Market Research</label>
                <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full w-7/12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="w-full border-b-2 border-purple-600 mb-6"></div>
            <div className="mb-4">
              <div className="flex justify-between">
                <div>
                  <label className="font-bold block">
                    Digital Marketing Certification
                  </label>
                  <label className="block">Google Digital Garage</label>
                </div>
                <label className="block">November 2020</label>
              </div>
              <label className="block">
                Completed a course on digital marketing strategies and best
                practices.
              </label>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Template3;
