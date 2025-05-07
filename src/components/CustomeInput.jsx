import React from "react";

const CustomeInput = () => {
  return (
    <div className=" relative pt-4">
      <label
        htmlFor=""
        className="absolute bg-white top-0 left-4 text-xl font-medium px-3 capitalize"
      >
        Input Label
      </label>
      <input type="text" className="w-full px-5 py-3 border-2 rounded-lg" />
    </div>
  );
};

export default CustomeInput;
