import React, { useState } from "react";
import CustomeInput from "../../components/CustomeInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewEntryPage = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    date: today,
    partyName: "",
    vechicleNumber: "",
    driverContactNumber: "",
    poNumber: "",
    invoiceNumber: "",
    driverName: "",
    cameraForTSL: "TSL",
    plant: "TWP-1",
    ecgName: "Akash",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}/add-entry`, formData);
      if (res.data.success) {
        alert(res.data.message);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-center py-4 bg-gray-300 text-2xl border-b border-gray-400">
        Add New Data
      </h2>
      <div className="px-5 lg:hidden">
        <form
          className="flex flex-col gap-5 lg:w-[650px] lg:text-2xl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Date
            </label>
            <input
              type="date"
              placeholder="Enter Party Name"
              className="border px-5 py-2 rounded"
              value={formData.date}
              name="date"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Party Name
            </label>
            <input
              type="text"
              placeholder="Enter Party Name"
              className="border px-5 py-2 rounded"
              onChange={(e) => handleChange(e)}
              name="partyName"
              value={formData.partyName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Vehicle Number
            </label>
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              className="border px-5 py-2 rounded"
              onChange={(e) => handleChange(e)}
              name="vechicleNumber"
              value={formData.vechicleNumber}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Driver Contact Number
            </label>
            <input
              type="text"
              placeholder="Enter Driver Contact Number"
              className="border px-5 py-2 rounded"
              onChange={(e) => handleChange(e)}
              name="driverContactNumber"
              value={formData.driverContactNumber}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              PO Number
            </label>
            <input
              type="text"
              placeholder="Enter PO Number"
              className="border px-5 py-2 rounded"
              onChange={(e) => handleChange(e)}
              name="poNumber"
              value={formData.poNumber}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Invoice Number
            </label>
            <input
              type="text"
              placeholder="Enter Invoice Number"
              className="border px-5 py-2 rounded"
              onChange={(e) => handleChange(e)}
              name="invoiceNumber"
              value={formData.invoiceNumber}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Driver Name
            </label>
            <input
              type="text"
              placeholder="Enter Driver Name"
              className="border px-5 py-2 rounded"
              onChange={(e) => handleChange(e)}
              name="driverName"
              value={formData.driverName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Camera For TSL
            </label>
            <select
              name="cameraForTSL"
              id=""
              className="border px-5 py-3"
              onChange={(e) => handleChange(e)}
              value={formData.cameraForTSL}
            >
              <option value="TSL">TSL</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              Plant
            </label>
            <select
              name="plant"
              id="plant"
              className="border px-5 py-3"
              onChange={(e) => handleChange(e)}
              value={formData.plant}
            >
              <option value="TWP-1">TWP-1</option>
              <option value="TWP-2">TWP-2</option>
              <option value="SSPW">SSP</option>
              <option value="Possil">WRM</option>
              <option value="Possil">Possil</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg font-medium lg:text-2xl">
              ECG Name
            </label>
            <select
              name="ecgName"
              id=""
              className="border px-5 py-3"
              onChange={(e) => handleChange(e)}
              value={formData.ecgName}
            >
              <option value="Akash">Akash</option>
              <option value="Om Prakash">Om Prakash</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <input
            className="bg-black text-white py-4 rounded-lg text-lg font-medium lg:text-2xl"
            type="submit"
            value={"Submit"}
          />
        </form>
      </div>

      <div className="flex justify-center py-15 sm:hidden">
        <form action="" className="w-[900px] flex flex-col gap-5">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Date
              </label>
              <input
                type="date"
                placeholder="Enter Party Name"
                className="border px-5 py-2 rounded text-2xl"
                value={formData.date}
                name="date"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Party Name
              </label>
              <input
                type="text"
                placeholder="Enter Party Name"
                className="border px-5 py-2 rounded text-2xl"
                onChange={(e) => handleChange(e)}
                name="partyName"
                value={formData.partyName}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Vehicle Number
              </label>
              <input
                type="text"
                placeholder="Enter Vehicle Number"
                className="border px-5 py-2 rounded text-2xl"
                onChange={(e) => handleChange(e)}
                name="vechicleNumber"
                value={formData.vechicleNumber}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Driver Contact Number
              </label>
              <input
                type="text"
                placeholder="Enter Driver Contact Number"
                className="border px-5 py-2 rounded text-2xl"
                onChange={(e) => handleChange(e)}
                name="driverContactNumber"
                value={formData.driverContactNumber}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                PO Number
              </label>
              <input
                type="text"
                placeholder="Enter PO Number"
                className="border px-5 py-2 rounded text-2xl"
                onChange={(e) => handleChange(e)}
                name="poNumber"
                value={formData.poNumber}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Invoice Number
              </label>
              <input
                type="text"
                placeholder="Enter Invoice Number"
                className="border px-5 py-2 rounded text-2xl"
                onChange={(e) => handleChange(e)}
                name="invoiceNumber"
                value={formData.invoiceNumber}
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Driver Name
              </label>
              <input
                type="text"
                placeholder="Enter Driver Name"
                className="border px-5 py-2 rounded text-2xl"
                onChange={(e) => handleChange(e)}
                name="driverName"
                value={formData.driverName}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Camera For TSL
              </label>
              <select
                name="cameraForTSL"
                id=""
                className="border px-5 py-3 text-2xl"
                onChange={(e) => handleChange(e)}
                value={formData.cameraForTSL}
              >
                <option value="TSL">TSL</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl">
                Plant
              </label>
              <select
                name="plant"
                id="plant"
                className="border px-5 py-3 text-2xl"
                onChange={(e) => handleChange(e)}
                value={formData.plant}
              >
                <option value="TWP-1">TWP-1</option>
                <option value="TWP-2">TWP-2</option>
                <option value="SSPW">SSP</option>
                <option value="Possil">WRM</option>
                <option value="Possil">Possil</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="text-lg font-medium lg:text-2xl ">
                ECG Name
              </label>
              <select
                name="ecgName"
                id=""
                className="border px-5 py-3 text-2xl"
                onChange={(e) => handleChange(e)}
                value={formData.ecgName}
              >
                <option value="Akash">Akash</option>
                <option value="Om Prakash">Om Prakash</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <input
              className="bg-black text-white py-4 rounded-lg text-lg font-medium lg:text-2xl w-full"
              type="submit"
              value={"Submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEntryPage;
