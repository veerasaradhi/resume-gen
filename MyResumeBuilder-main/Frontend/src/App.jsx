import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import Template4 from "./templates/Template4";
import SignUpSide from "./pages/SignUp";
import SignInSide from "./components/SingIn.jsx";
import Context from "./pages/Context.jsx";
import Templates from "./pages/Templates.jsx";
import Linkedin from "./pages/Linkedin.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import EditDetails from "./pages/EditDetails.jsx";
import ProfessionalEx from "./pages/ProfessionalEx.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Certification from "./pages/Certification.jsx";
import Summary from "./pages/Summary.jsx";
function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates/template1" element={<Template1 />} />
        <Route path="/templates/template2" element={<Template2 />} />
        <Route path="/templates/template3" element={<Template3 />} />
        <Route path="/templates/template4" element={<Template4 />} />
        <Route path="/sign-inside" element={<SignInSide />} />
        <Route path="/sign-in" element={<SignUpSide />} />
        <Route path="/template" element={<Templates />} />
        <Route path="/choose-resume" element={<Linkedin />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/editdetails" element={<EditDetails />} />
        <Route path="/professionalex" element={<ProfessionalEx />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/summary" element={<Summary />} />
        {/* <Route path="/summary" element={<Summary />} /> */}
      </Routes>
    </Context>
  );
}

export default App;
