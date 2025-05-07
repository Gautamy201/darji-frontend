import React, { useEffect, useState } from "react";
import Label from "../../components/Label";
import { IoAddOutline } from "react-icons/io5";
import { IoReaderOutline } from "react-icons/io5";
import EntryTemplate from "../../components/EntryTemplate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const DashboardPage = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_SERVER_URL;

  const navigate = useNavigate();
  const [recentEntries, setRecentEntries] = useState([]);
  const getRecentEntries = async () => {
    try {
      const res = await axios.get(`${apiUrl}/recent-entrys`);

      if (res.data.success) {
        console.log(res.data.entries);
        setRecentEntries(res.data.entries);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecentEntries();
  }, []);
  return (
    <div className="w-full ">
      <h2 className="text-center text-2xl font-medium  py-5 bg-gray-300 border-b border-gray-400">
        DARJI ENTERPRISES
      </h2>
      <div className=" w-full ">
        <div
          className=" mt-10
       flex flex-wrap justify-center gap-5 w-full"
        >
          <Label
            icon={<IoAddOutline />}
            title={"Add New Entry"}
            handleBtn={() => {
              navigate("/new-entry");
            }}
          />
          <Label
            icon={<IoReaderOutline />}
            title={"Show All Entry"}
            handleBtn={() => {
              navigate("/show-all-entry");
            }}
          />
        </div>
        <div className="p-5 lg:p-12   ">
          <h2 className="text-xl font-medium opacity-[0.7] lg:py-10 py-5 lg:text-3xl  text-center">
            Recent Entry
          </h2>
          <div className="flex gap-5 flex-col lg:flex-row lg:justify-center lg:gap-10">
            {recentEntries.map((entry, index) => (
              <EntryTemplate data={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
