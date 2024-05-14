import React from "react";

const CalcForm = () => {
  return (
    <div
      className="w-full bg-slate-100 mx-w[942px] mx-auto rounded-2xl text-gray-600 p-12 shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      <form className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:justify-between lg: items-center">
        <input
          className="input placeholder:text-gray-600"
          type="text"
          placeholder="Enter your hash rate"
        />
        <select className="select px-2">
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>
        {/* btn */}

        <button className="btn text-white px-8 flex self-start bg-blue-600 hover:bg-blue-700">
          Calculate
        </button>
      </form>
      {/* text */}
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">
          ESTIMATED 24 HOUR REVENUE:
        </div>
        <div className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </div>
        <div className="text-gray-500 tracking-[1%]">
          Revenue will change based on mining difficulty and Ethereum price.
        </div>
      </div>
    </div>
  );
};

export default CalcForm;
