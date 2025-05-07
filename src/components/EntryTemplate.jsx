import React from "react";

const EntryTemplate = ({ data }) => {
  const {
    date,
    partyName,
    vechicleNumber,
    driverContactNumber,
    poNumber,
    invoiceNumber,
    driverName,
    cameraForTSL,
    plant,
    ecgName,
  } = data;
  if (data) {
    return (
      <div className="flex flex-col gap-2 border-[2px] border-gray-300 rounded lg:w-[550px] lg:hover:scale-[0.9] transition-all duration-200">
        <div className="flex border-b border-gray-300 py-2  font-bold px-5 bg-gray-300">
          <p className=" w-1/2 flex gap-5 items-center ">
            <span className="lg:text-2xl">Plant :</span>
            <span className="text-sm lg:text-2xl">{plant}</span>
          </p>
          <p className=" w-1/2 flex gap-5 items-center">
            <span className="lg:text-2xl">Date :</span>{" "}
            <span className="text-sm lg:text-2xl">{date}</span>
          </p>
        </div>
        <div className="px-5 pb-2">
          <div className="w-full flex flex-col gap-1 lg:text-2xl">
            <div className=" flex gap-2 lg:gap-7 ">
              <p className=" font-medium w-[121px] lg:w-[220px] flex justify-between">
                Party Name <span>:</span>
              </p>
              <p>{partyName}</p>
            </div>
            <div className=" flex gap-2 lg:gap-7">
              <p className=" font-medium w-[121px] lg:w-[220px] flex justify-between">
                Vehicle No. <span>:</span>
              </p>
              <p>{vechicleNumber}</p>
            </div>
            <div className=" flex gap-2 lg:gap-7">
              <p className=" font-medium w-[121px] lg:w-[220px] flex justify-between">
                Driver Name <span>:</span>
              </p>
              <p>{driverName} </p>
            </div>
            <div className=" flex gap-2 lg:gap-7">
              <p className=" font-medium w-[121px] lg:w-[220px] flex justify-between">
                Driver Cont. No. <span>:</span>
              </p>
              <p>{driverContactNumber} </p>
            </div>
            <div className=" flex gap-2 lg:gap-7">
              <p className=" font-medium w-[121px] lg:w-[220px] flex justify-between">
                Invoice No. <span>:</span>
              </p>
              <p>{invoiceNumber}</p>
            </div>
            <div className=" flex gap-2 lg:gap-7">
              <p className=" font-medium w-[121px] lg:w-[220px] flex justify-between">
                Camer for TSL <sp an>:</sp>
              </p>
              <p>{cameraForTSL}</p>
            </div>
            <div className=" flex gap-2 lg:gap-7">
              <p className=" font-medium w-[121px] lg:w-[220px] flex justify-between">
                EGC Name <span>:</span>
              </p>
              <p>{ecgName}</p>
            </div>
          </div>
        </div>
        <div className=" w-full  border-t-2 border-gray-300 px-5 py-2 flex gap-5 bg-gray-300">
          <button className="w-full bg-black text-white text-lg py-2 rounded-lg active:scale-[0.9] transition-all duration-200 lg:text-2xl lg:hover:scale-[1.1]">
            Edite
          </button>
          <button className="w-full bg-black text-white text-lg py-2 rounded-lg active:scale-[0.9] transition-all duration-200 lg:text-2xl lg:hover:scale-[1.1]">
            Deleate
          </button>
        </div>
      </div>
    );
  }
};

export default EntryTemplate;
