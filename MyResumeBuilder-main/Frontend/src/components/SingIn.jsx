import React, { useState, useContext, useEffect } from "react";
import { Data } from "../pages/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginSide() {
  useEffect(() => {
    getUserData();
  }, []);
  const navigate = useNavigate();
  const { showDiv, setShowDiv } = useContext(Data);
  const [allUserData, setAllUserData] = useState([]);
  const [userLoginObj, setUserLoginObj] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    CheckLogin();
    // navigate("/dashboard");
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(userLoginObj));
    } else {
      sessionStorage.setItem("user", JSON.stringify(userLoginObj));
    }
  };

  const getUserData = () => {
    axios
      .get("http://localhost:5000/api/userDetail")
      .then((res) => setAllUserData(res.data));
  };

  function CheckLogin() {
    const user = allUserData.filter(
      (i) => i.email.toLowerCase() == userLoginObj.email.toLowerCase()
    );
    // alert(JSON.stringify(allUserData))
    // alert(JSON.stringify(user))
    if (user.length > 0) {
      if (user[0].password == userLoginObj.password) {
        navigate("/dashboard");
      } else {
        alert("Invalid password");
      }
    } else {
      alert("User not found");
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 my-6 bg-green-100 rounded-lg shadow-md">
      <div className="flex flex-col items-center py-4">
        <h1 className="text-xl font-semibold mb-4">
          Welcome to{" "}
          <span className="font-bold text-blue-500">Resume Builder</span>
        </h1>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setShowDiv("SignUp")}
            className={`px-4 py-2 rounded-full text-sm ${
              showDiv === "SignUp" ? "bg-blue-500 text-white" : "border"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setShowDiv("Login")}
            className={`px-4 py-2 rounded-full text-sm ${
              showDiv === "Login" ? "bg-blue-500 text-white" : "border"
            }`}
          >
            Login
          </button>
        </div>
        <div className="flex gap-2 mb-4"></div>
        <form onSubmit={handleSubmit} className="w-full mt-4">
          <div className="mb-4">
            {/* <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label> */}
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md"
              required
              onChange={(e) =>
                setUserLoginObj({ ...userLoginObj, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            {/* <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label> */}
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              className="w-full p-2 border rounded"
              required
              onChange={(e) =>
                setUserLoginObj({ ...userLoginObj, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe" className="text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
          <div className="flex justify-between mt-4">
            <a href="#" className="text-sm text-blue-500">
              Forgot password?
            </a>
            <div onClick={() => navigate("/register")}>
              <a href="#" className="text-sm text-blue-500">
                Don't have an account? Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
