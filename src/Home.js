import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="p-10">
      {error && (
        <div className="font-semibold text-lg w-screen h-screen">{error}</div>
      )}
      {isPending && (
        <div class="flex items-center justify-center space-x-2 animate-bounce w-full h-screen">
          <div class="w-6 h-6 bg-red-500 rounded-full"></div>
          <div class="w-6 h-6 bg-red-500 rounded-full"></div>
          <div class="w-6 h-6 bg-red-500 rounded-full"></div>
        </div>
      )}
      {data && <BlogList Blogs={data} title="All Blogs!!" />}
    </div>
  );
}

export default Home;
