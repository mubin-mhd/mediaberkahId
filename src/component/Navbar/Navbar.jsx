import React, { useEffect, useState } from "react";
import mediaberkahid from "../../img/mediaberkah.png";
import Aos from "aos";
import quran from "../../img/quran.png";
import newspaper from "../../img/newspaper.png";
import JadwalSholat from "../JadwalSholat/JadwalSholat";
import axios from "axios";
import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showJadwal, setShowJadwal] = useState(false);
  const [jadwalSholat, setJadwalSholat] = useState([]);

  const transition = useTransition(showJadwal, {
    from: { x: 0, y: -10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: 0, opacity: 0 },
    delay: 100,
  });

  const mobile = useTransition(mobileMenu, {
    from: { x: 3, y: -10, opacity: 0 },
    enter: { x: 3, y: 0, opacity: 1 },
    leave: { x: 3, y: -10, opacity: 0 },
    delay: 0,
  });

  const tombolMenu = () => {
    const toggle = document.getElementById("toggleMenu");
    toggle.classList.toggle("rotate-45");
    setMobileMenu(!mobileMenu);
  };

  const ItemMenu = () => {
    const dropMenu = [
      {
        title: "Al Quran",
        image: quran,
        alt: "logo Al Quran",
      },
      {
        title: "Artikel",
        image: newspaper,
        alt: "logo Artikel",
      },
    ];
    return (
      <div className=" md:hidden">
        {dropMenu.map(({ image, alt }) => (
          <div className="text-center">
            <img
              src={image}
              className="rounded-full w-12 mb-3 mx-auto"
              alt={alt}
            />
          </div>
        ))}
      </div>
    );
  };

  const getJadwalSholat = async () => {
    axios
      .get("https://api.pray.zone/v2/times/today.json?city=jakarta")
      .then((response) => {
        const dataJadwal = response.data.results.datetime;
        setJadwalSholat(dataJadwal);
      });
  };

  useEffect(() => {
    getJadwalSholat();
    Aos.init({
      duration: 300,
    });
  });

  return (
    <div>
      <nav className="shadow-sm bg-[#FACC15] shadow-[#FACC15]">
        <div className="flex relative  justify-between px-2 lg:px-4 py-2.5 w-full md:w-11/12 lg:w-10/12 mx-auto">
          <div>
            <Link to="/" className="flex items-center w-min">
              <img
                src={mediaberkahid}
                className="mr-1 lg:mr-3 h-10 lg:h-12 bg-black rounded-full shadow-lg"
                alt="Media berkah logo"
              />
              <span className="self-center text-slate-900 text-xl lg:text-2xl font-extrabold underline decoration-[#4BAA32] decoration-2 lg:decoration-4 whitespace-nowrap">
                MediaBerkah<span className="text-[#4BAA32]">Id</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center mr-5">
            <a href="#" className="md:flex items-center w-min hidden mr-4">
              <span className="self-center text-slate-900 text-base lg:text-lg font-semibold whitespace-nowrap">
                <span className="text-[#4BAA32] text-2xl">A</span>rtikel
              </span>
            </a>

            <button
              onClick={() => setShowJadwal(!showJadwal)}
              href="#"
              className="md:flex items-center w-min hidden"
            >
              <span className="self-center text-slate-900 text-base lg:text-lg font-semibold whitespace-nowrap">
                <span className="text-[#4BAA32] text-2xl">J</span>adwal Sholat
              </span>
            </button>
            <a>
              <div class="flex justify-center">
                <div>
                  <div class="dropdown relative">
                    <button
                      class="dropdown-toggle px-3 py-2 font-semibold ml-3 bg-[#4BAA32] text-white text-md leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-book text-lg font-semibold flex items-center text-white mr-2"></i>{" "}
                      Al Qur'an
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      class="dropdown-menu min-w-max absolute bg-white text-base  z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <Link to="/quran">
                        <li>
                          <a
                            class="dropdown-item text-sm py-2 px-4  block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 font-base"
                            href="#"
                          >
                            Surah & Terjemahan
                          </a>
                        </li>
                      </Link>
                      <Link to="/tafsir">
                        <li>
                          <a
                            class="dropdown-item text-sm py-2 px-4  block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 font-base"
                            href="#"
                          >
                            Tafsir
                          </a>
                        </li>
                      </Link>
                      <li>
                        <a
                          class="dropdown-item text-sm py-2 px-4  block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 font-base"
                          href="#"
                        >
                          Murottal
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
            <button
              id="toggleMenu"
              onClick={tombolMenu}
              href="#"
              className="flex items-center w-min md:hidden duration-500"
            >
              <i className="bi bi-microsoft text-[#4BAA32] text-2xl"></i>
            </button>
          </div>

          <div className="absolute right-4 top-16">
            {mobile((style, item) =>
              item ? (
                <animated.div style={style}>
                  <ItemMenu />
                </animated.div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </nav>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <JadwalSholat jadwalSholat={jadwalSholat} />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Navbar;
