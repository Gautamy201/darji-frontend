import React, { useRef, useState } from "react";
import user_icon from "../../assets/programmer-removebg-preview.png";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { adminData } from "../../data/loginData";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = ({ setIsLogedIn }) => {
  const apiUrl = import.meta.env.VITE_BACKEND_SERVER_URL;

  const navigate = useNavigate();
  const [inputActive, setInputActive] = useState(false);

  const [inputData, setInputData] = useState({
    userId: "DARJI ENTERPRISES",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${apiUrl}/admin`, {
        id: inputData.userId,
        password: inputData.password,
      });
      if (res.data.success) {
        setIsLogedIn(true);
        navigate("/");
        alert(res.data.message);
        setInputData({
          ...inputData,
          password: "",
        });
      }
    } catch (err) {
      alert(err.response.data.message);
      setInputData({
        ...inputData,
        password: "",
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className={` flex  flex-col lg:items-center lg:h-screen lg:w-[800px]  ${
          inputActive ? "justify-start lg:justify-center" : "justify-center"
        }`}
      >
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full p-[20px] bg-secondary">
              <img
                className="w-[110px] h-[110px] lg:w-[210px] lg:h-[210px]"
                src={user_icon}
                alt=""
              />
            </div>
            <div className="text-center mt-10 flex flex-col gap-3">
              <p className="font-bold text-xl text-slate-600 lg:text-4xl">
                Wellcome To
              </p>
              <p className="font-bold text-2xl text-slate-600 lg:text-4xl">
                DARJI ENTERPRISES
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 lg:gap-7 text-2xl"
          >
            <div className="relative">
              <input
                type="text"
                className="border px-10 py-3 rounded-3xl w-full placeholder:text-lg outline-none "
                placeholder="User-ID"
                value={inputData.userId}
                readOnly
              />
              <FaUserAlt className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative">
              <input
                type="password"
                className="border px-10 py-3 rounded-3xl w-full placeholder:text-lg "
                placeholder="Password"
                onFocus={() => setInputActive(true)}
                onBlur={() => setInputActive(false)}
                value={inputData.password}
                onChange={(e) => {
                  setInputData({
                    ...inputData,
                    password: e.target.value,
                  });
                }}
              />
              <FaLock className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500" />
            </div>
            <input
              type="submit"
              value={"Login"}
              className="bg-black py-3 rounded-4xl text-xl text-secondary font-medium active:scale-[0.9] transition-all duration-200 lg:text-2xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
