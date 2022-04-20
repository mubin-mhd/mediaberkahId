import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import useFetch from "../../useFetch";

function BlogDetail() {
  const { id } = useParams();
  const [notif, setNotif] = useState(false);
  const { data, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const navigasi = useNavigate();

  const handleDelete = () => {
    if (window.confirm("apakah yakin ingin hapus ?")) {
      fetch("http://localhost:8000/blogs/" + data.id, {
        method: "DELETE",
      }).then(() => {
        navigasi("/");
        setNotif(true);
      });
    }
  };

  return (
    <div className="p-10 w-full h-full">
      {isPending && (
        <div className="flex items-center justify-center space-x-2 animate-bounce w-full h-screen">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        </div>
      )}
      {error && <div>{error}</div>}
      {notif && (
        <div className="bg-red-500 text-white p-2 mb-3">deleting data...</div>
      )}
      {data && (
        <div key={data.id}>
          <h1 className="font-semibold text-red-500 text-xl mb-5">
            {data.title}
          </h1>
          <p className="font-normal text-md mb-5">{data.desc}</p>
          <p className="text-[#333] font-normal text-md">
            written by :{data.name}
          </p>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white rounded-md py-1 px-2 mt-4"
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
