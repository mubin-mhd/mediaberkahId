import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import mediaberkah from "../../img/mediaberkah.png";
import Create from "./Create";
import { useNavigate } from "react-router-dom";

function BlogList({ Blogs, title }) {
  const navigasi = useNavigate();
  const handleDelete = (id) => {
    if (window.confirm("apakah yakin ingin hapus ?")) {
      fetch("http://localhost:8000/blogs/" + id, {
        method: "DELETE",
      }).then(() => {
        window.location.reload(false);
      });
    }
  };

  const LeftChat = ({ res }) => (
    <li class="flex justify-start">
      <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow-md">
        <p className="font-semibold flex">
          <img
            className="w-6 h-6 rounded-full"
            src={`https://i.pravatar.cc/150?img=${res.id}`}
          />
          <span className="ml-2"> {res.desc}</span>{" "}
          <span>
            <button className="text-white" onClick={() => handleDelete(res.id)}>
              d
            </button>
          </span>
        </p>
        <p class="block pl-8">{res.title}</p>
        <div className="flex justify-end items-center">
          <i class="bi bi-check-all text-3xl text-pink-500 mr-2"></i>
          <i class="bi bi-chat-heart text-2xl text-pink-500"></i>
        </div>
      </div>
    </li>
  );

  const RightChat = ({ res }) => (
    <li class="flex justify-end">
      <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow-md">
        <p className="font-semibold flex">
          <img
            className="w-6 h-6 rounded-full"
            src={`https://i.pravatar.cc/150?img=${res.id}`}
          />
          <span className="ml-2"> {res.desc}</span>
          <span>
            <button className="text-white" onClick={() => handleDelete(res.id)}>
              d
            </button>
          </span>
        </p>
        <p class="block pl-8">{res.title}</p>
        <div className="flex justify-end items-center">
          <i class="bi bi-check-all text-3xl text-pink-500 mr-2"></i>
          <i class="bi bi-chat-heart text-2xl text-pink-500"></i>
        </div>
      </div>
    </li>
  );

  return (
    <Fragment>
      <div className="mt-10">
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div class="container mx-auto">
        <div class="w-full overflow-y-hidden border rounded">
          <div>
            <div class="w-full">
              <div class="relative flex items-center p-3 border-b border-gray-300">
                <img
                  class="object-cover w-10 h-10 rounded-full"
                  src={mediaberkah}
                  alt="username"
                />
                <span class="block ml-2 font-bold text-gray-600">
                  Kamu bisa menulis juga dibawah
                </span>
                <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
              </div>
              <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
                <ul class="space-y-2">
                  {Blogs.map((res, index) => {
                    if (index % 2 != 0) {
                      return <LeftChat res={res} />;
                    } else {
                      return <RightChat res={res} />;
                    }
                  })}
                </ul>
              </div>
              <Create />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BlogList;
