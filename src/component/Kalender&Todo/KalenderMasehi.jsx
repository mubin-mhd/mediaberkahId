import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./kalender.css";
function KalenderMasehi() {
  const [selectDate, setSelectDate] = useState(new Date());

  const changeDate = (e) => {
    setSelectDate(e);
  };

  return (
    <div className="w-full">
      <Calendar
        className={["bg-red-400", "w-full"]}
        value={selectDate}
        onChange={changeDate}
      />
      <div className="px-3 py-2 rounded-md bg-white shadow-md mt-2 w-1/2 border-x-8 border-[#4BA931]">
        <p className="text-lg">
          <span className="text-[#4BA931] font-semibold">Today : </span>
          {moment(selectDate).format("MM DD YYYY")}
        </p>
      </div>
    </div>
  );
}

export default KalenderMasehi;
