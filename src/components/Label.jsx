import React from "react";
import { IoAddOutline } from "react-icons/io5";
const Label = ({ icon, title, handleBtn }) => {
  return (
    <div
      className="w-[130px] h-[130px] lg:w-[230px] lg:h-[230px] bg-black rounded-xl flex flex-col justify-center items-center gap-2.5 p-5 text-secondary border-2 active:scale-[0.9] transition-all duration-200 cursor-pointer lg:hover:scale-[1.1]"
      onClick={handleBtn}
    >
      <span className="text-[25px] lg:text-5xl">{icon}</span>
      <p className="text-center text-sm font-medium lg:text-2xl">{title}</p>
    </div>
  );
};

export default Label;
