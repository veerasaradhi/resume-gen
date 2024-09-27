import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Data = createContext(); //1) Creating Context as global variable and export

function Context({ children }) { //compulsory children as a props
  useEffect(() => {
    getUserData(), [];
  });

  // creation of state

  const [user, setUser] = useState({  //user={firstName:"e.target.value",  lastName:"e.target.value" Jobtilte: city: country: number: email:}
    experience: [],
    education: [],
    skills: [],
  });
  const[previewTemp,setPreviewTemp] = useState(false)
  const [showDiv, setShowDiv] = useState("Login");
  const [eduObj, setEduObj] = useState({});
  const [expObj, setExpObj] = useState({});
  const [show, setShow] = useState(false);
  const [eduNumber, setEduNumber] = useState([null]);
  const [skillObj, setSkillObj] = useState({});

  const postUserData = (item) => {
    axios
      .post("http://localhost:5000/api/userDetail", item)
      .then((res) => alert("User Data Posted!"));
  };
  const [allUserData, setAllUserData] = useState([]);
  const getUserData = () => {
    axios
      .get("http://localhost:5000/api/userDetail")
      .then((res) => setAllUserData(res.data));
  };
  return (
    <Data.Provider //Provider to sharing available for globally
      value={{ //value
        showDiv,
        setShowDiv,
        postUserData,
        user,
        setUser,
        eduObj,
        setEduObj,
        expObj,
        setExpObj,
        show,
        setShow,
        eduNumber,
        setEduNumber,
        skillObj,
        setSkillObj,
        allUserData,
        setAllUserData,
        previewTemp,
        setPreviewTemp
      }}
    >
      {children} //children
    </Data.Provider>
  );
}

export default Context;
