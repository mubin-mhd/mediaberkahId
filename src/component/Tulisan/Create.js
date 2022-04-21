import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigasi = useNavigate();

  const handleSubmit = (e) => {
    const blog = { title, desc };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      window.location.reload(true);
      navigasi("/");
    });
  };

  return (
    //start form new
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
        <div className="flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-full items-center mx-3">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Message"
            className="block w-8/12 py-2 pl-4 bg-gray-100 rounded-l-full outline-none focus:text-gray-700"
            name="message"
            required
          />
          <input
            onChange={(e) => setDesc(e.target.value)}
            required
            placeholder="Nama"
            className="block w-4/12 py-2 pl-4 border-l-2 bg-gray-100 rounded-r-full outline-none focus:text-gray-700"
            name="name"
          />
        </div>
        <div className="flex">
          <button className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>

          <button type="submit">
            <svg
              className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
    //end form new
  );
}

export default Create;
