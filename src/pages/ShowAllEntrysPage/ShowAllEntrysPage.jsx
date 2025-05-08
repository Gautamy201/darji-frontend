import React, { useEffect, useState } from "react";
import EntryTemplate from "../../components/EntryTemplate";
import { MdSimCardDownload } from "react-icons/md";
import axios from "axios";
import * as XLSX from "xlsx";

const ShowAllEntrysPage = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
  const days = Array.from({ length: 32 }, (_, i) => i);
  const months = [
    "MON",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [entries, setEntries] = useState([]);

  const getAllEntries = async () => {
    try {
      console.log("check");
      const res = await axios.get(`${apiUrl}/entries`);

      if (res.data.success) {
        console.log(res.data.entries);
        setEntries(res.data.entries);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(entries);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "darjiCameraInstallData");
    XLSX.writeFile(workbook, "darji_Camera_Install_Data.xlsx");
  };

  useEffect(() => {
    getAllEntries();
  }, []);

  return (
    <div className=" w-full min-h-screen relative ">
      <h2 className="text-center text-2xl font-medium  py-5 bg-gray-300 border-b border-gray-400">
        DARJI ENTERPRISES
      </h2>
      <div className="flex flex-col gap-3  py-5 border-b  w-full px-5 font-medium lg:px-20 ">
        <div className="border rounded-xl">
          <select
            name=""
            id=""
            className=" outline-none  text text-center px-2 py-2 w-full lg:text-2xl"
          >
            <option value="">All Plant</option>
            <option value="">TWP-1</option>
            <option value="">TWP-2</option>
            <option value="">SSP</option>
            <option value="">WRM</option>
            <option value="">Poosil</option>
          </select>
        </div>
        <div className="flex gap-2 w-full lg:text-2xl">
          <div className="border w-[250px] rounded-xl p-1 text-center">
            <select name="" id="" className=" outline-none w-full">
              {days.map((day, index) => {
                return (
                  <option key={index} value="">
                    {day === 0 ? "Day" : day}
                  </option>
                );
              })}
            </select>
          </div>
          <span>-</span>
          <div className="border w-[250px] rounded-xl p-1 text-center">
            <select name="" id="" className=" outline-none w-full">
              {months.map((month, index) => {
                return (
                  <option key={index} value="">
                    {month}
                  </option>
                );
              })}
            </select>
          </div>
          <span>-</span>
          <div className="border w-[250px]   rounded-xl p-1 text-center">
            <input
              type="number"
              placeholder="Year"
              maxLength={4}
              className=" placeholder:content-center w-full  text-center px-2 placeholder:text-black placeholder:text-center outline-none"
            />
          </div>
        </div>
      </div>

      {/* show all entrys are heare */}
      <div className="mt-10 lg:px-20 lg:flex-row flex flex-col flex-wrap lg:gap-10  px-5 gap-5">
        {entries.map((entry, index) => (
          <EntryTemplate key={index} data={entry} />
        ))}
      </div>

      {/* --- create download button */}
      <div className="fixed right-[30px] bottom-[30px]">
        <button
          className="active:scale-[0.9] transition-all duration-200"
          onClick={downloadExcel}
        >
          <MdSimCardDownload size={50} />
        </button>
      </div>
    </div>
  );
};

export default ShowAllEntrysPage;
