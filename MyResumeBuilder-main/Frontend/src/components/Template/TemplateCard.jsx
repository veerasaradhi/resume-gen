import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Assuming you have a Header component

function TemplateCard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <section className="my-8 text-center">
          <h2 className="text-2xl mb-4">Welcome to the Resume Builder</h2>
          <p>
            Create your professional resume with ease using our customizable
            templates.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-xl mb-4">Choose a Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["template1", "template2", "template3", "template4"].map(
              (template, index) => (
                <Link
                  key={index}
                  to={`/templates/${template}`}
                  className="border p-4 hover:bg-gray-100 text-center"
                >
                  {`Template ${index + 1}`}
                </Link>
              )
            )}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default TemplateCard;
