import React, { useContext } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Register from "../components/Register";
import LoginSide from "../components/SingIn";
import { Data } from "./Context";

function SignUp() {
  const { showDiv ,setShowDiv} = useContext(Data);

  return (
<div className="flex flex-col">
  <Header></Header>
<div className="flex items-center justify-center h-[70vh]">
      <div className="flex item-center justify-center w-[60%]">
        <div className="flex flex-col gap-8 items-start mt-20">
          <img
            onClick={() => navigate("/")}
            className="h-8 cursor-pointer"
            src="https://www.resumebuilder.com/wp-content/themes/resumebuilder/assets/images/2023/rb-new-logo-color.svg"
            alt="logo"
          />
          <h1 className="text-[3rem] font-bold">
            The Best Free Online Resume
          </h1>
          <label className="text-[1.2rem] w-[80%]">
            A Quick and Easy Way to Create Your Professional Resume.
          </label>
        </div>
        <div className="h-[50%] w-[50%]">
          {showDiv === "SignUp" && <Register />}
          {showDiv === "Login" && <LoginSide />}
        </div>
      </div>
    </div>
    <Footer />

</div>
   
  );
}

export default SignUp;
