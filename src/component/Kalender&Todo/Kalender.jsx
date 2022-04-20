import React, { useState } from "react";
import mediaberkah2 from "../../img/mediaberkah2.svg";
import KalenderMasehi from "./KalenderMasehi";
import Todo from "./Todo";

function Kalender() {
  const [info, setInfo] = useState(<KalenderMasehi />);
  const buttonCalender = document.getElementById("buttonCalender");

  const handleMasehi = () => {
    setInfo(<KalenderMasehi />);
    buttonCalender.classList.add("text-[#4BA931]");
  };

  const handleTodo = () => {
    setInfo(<Todo />);
    buttonCalender.classList.remove("border-[#4BA931]");
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden -mt-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FACC15"
          fillOpacity="1"
          d="M0,96L21.8,90.7C43.6,85,87,75,131,74.7C174.5,75,218,85,262,101.3C305.5,117,349,139,393,160C436.4,181,480,203,524,186.7C567.3,171,611,117,655,90.7C698.2,64,742,64,785,96C829.1,128,873,192,916,197.3C960,203,1004,149,1047,154.7C1090.9,160,1135,224,1178,250.7C1221.8,277,1265,267,1309,256C1352.7,245,1396,235,1418,229.3L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
      <div className="w-full px-5  mx-auto bg-yellow-400">
        <div className="w-full md:w-11/12 lg:w-10/12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:-mt-32 lg:mb-0">
            <div className="flex mb-4">
              <button
                id="buttonCalender"
                onClick={handleMasehi}
                className="text-left flex-grow focused text-[#4BA931] border-b-2  focus:border-b-4 focus:border-[#4BA931] border-[#4BA931] py-2 text-lg font-semibold text-white px-1"
              >
                Kalender
              </button>

              <button
                id="buttonTodo"
                onClick={handleTodo}
                className="text-left flex-grow border-b-2  focus:border-[#4BA931] focus:border-b-4 border-white py-2 text-lg font-semibold text-white px-1"
              >
                Todo
              </button>
            </div>
            <div className="leading-relaxed mb-4" id="kolom">
              {info}
            </div>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 -mb-4 z-20 w-11/12 h-auto object-cover object-center rounded"
            src={mediaberkah2}
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-white"
      >
        <path
          fill="#FACC15"
          fillOpacity="1"
          d="M0,288L40,266.7C80,245,160,203,240,170.7C320,139,400,117,480,101.3C560,85,640,75,720,58.7C800,43,880,21,960,16C1040,11,1120,21,1200,32C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
}

export default Kalender;
