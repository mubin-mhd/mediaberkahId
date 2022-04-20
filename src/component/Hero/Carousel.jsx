import React from "react";
import hero from "../../img/mosque.png";

function Carousel() {
  return (
    <section className="text-gray-600 body-font w-full py-10 md:w-11/12 lg:w-10/12 mx-auto ">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-semibold lg:text-3xl md:text-2xl text-xl mb-2 text-gray-900">
              Media Ibadah,,,
              <br /> Yaa Media Berkah'<span className="text-[#4BA931]">Id</span>
            </h1>
            <div className="leading-relaxed pr-12 md:pr-0">
              Bijak dalam bermedia, memberikan nilai manfaat tidak hanya untuk
              dunia
            </div>
          </div>
          <div className="lg:flex justify-between">
            <div className="py-1 px-4 w-full items-center lg:block flex">
              <h2 className="title-font font-medium text-2xl lg:text-3xl ">
                <i className="bi bi-youtube text-gray-800"></i>
              </h2>
              <p className="leading-relaxed ml-2 lg:ml-0 text-sm">
                Media Berkah Id
              </p>
            </div>
            <div className="py-1 px-4 w-full items-center lg:block flex">
              <h2 className="title-font font-medium text-2xl lg:text-3xl ">
                <i className="bi bi-facebook text-gray-800"></i>
              </h2>
              <p className="leading-relaxed ml-2 lg:ml-0 text-sm">
                Media Berkah Id
              </p>
            </div>
            <div className="py-1 px-4 w-full items-center lg:block flex">
              <h2 className="title-font font-medium text-2xl lg:text-3xl ">
                <i className="bi bi-instagram text-gray-800"></i>
              </h2>
              <p className="leading-relaxed ml-2 lg:ml-0 text-sm">
                @media_berkah_id
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src={hero}
            alt="hero media berkah"
          />
        </div>
      </div>
    </section>
  );
}

export default Carousel;
