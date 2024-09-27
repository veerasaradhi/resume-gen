import { useState, useEffect, useContext } from "react";
import { Data } from "../pages/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userRegObj, setUserRegObj] = useState({});
  const [allUserData, setAllUserData] = useState([]);
  const { showDiv, setShowDiv } = useContext(Data);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const navigate = useNavigate();

  const getUserData = () => {
    axios
      .get("http://localhost:5000/api/userDetail")
      .then((res) => setAllUserData(res.data))
      .catch((err) => console.error("Error fetching user data:", err));
  };

  const postNewUserData = () => {
    axios
      .post("http://localhost:5000/api/userDetail", userRegObj)
      .then(() => {
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userRegObj));
        } else {
          sessionStorage.setItem("user", JSON.stringify(userRegObj));
        }
      })
      .catch((err) => console.error("Error posting user data:", err));
  };

  const isUserRegistered = () => {
    const checkRegisteredUser = allUserData.filter(
      (i) => i.number === userRegObj.number || i.email === userRegObj.email
    );

    if (checkRegisteredUser.length > 0) {
      alert("User Already Registered");
    } else {
      postNewUserData();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isUserRegistered();
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 my-6 bg-green-100 rounded-lg shadow-md h-[50%]">
      <div className="flex flex-col items-center py-4">
      <h1 className="text-xl font-semibold mb-4">
          Welcome to{" "}
          <span className="font-bold text-blue-500">Resume Builder</span>
        </h1>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setShowDiv("SignUp")}
            className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
          >
            Sign Up
          </button>
          <button
            onClick={() => setShowDiv("Login")}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full text-sm"
          >
            Login
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
            required
            onChange={(e) =>
              setUserRegObj({ ...userRegObj, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md"
            required
            onChange={(e) =>
              setUserRegObj({ ...userRegObj, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            required
            onChange={(e) =>
              setUserRegObj({ ...userRegObj, password: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Number"
            className="w-full px-4 py-2 border rounded-md"
            required
            onChange={(e) =>
              setUserRegObj({ ...userRegObj, number: e.target.value })
            }
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              id="remember"
              name="remember"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
      {showDiv === "Login" && <LoginSide />}
    </div>
  );
}
