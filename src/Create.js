import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("Mubin");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, desc, name };
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="p-10 max-w-[400px] mx-auto">
      <h1 className="text-red-500 text-xl font-semibold text-center mb-7">
        Create New Blog
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="block text-lg">Blog title :</label>
        <input
          className="border-[1px] border-[#333] rounded-md mt-2 p-2 w-full"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label className="block text-lg mt-5">Blog Article :</label>
        <article>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            required
            className="border-[1px] border-[#333] rounded-md mt-2 p-2 w-full"
          ></textarea>
        </article>
        <label className="block text-lg">Author :</label>
        <select
          onChange={(e) => setName(e.target.value)}
          className="border-[1px] border-[#333] rounded-md mt-2 p-2 w-full"
        >
          <option value="Mubin">Mubin</option>
          <option value="Arif">Arif</option>
          <option value="Rizal">Rizal</option>
        </select>
        {!isPending && (
          <button className="rounded-md bg-red-500 text-white py-1 px-2 block mx-auto mt-5">
            Add Blog
          </button>
        )}
        {isPending && (
          <button
            disabled
            className="rounded-md bg-red-500 text-white py-1 px-2 block mx-auto mt-5"
          >
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
}

export default Create;
