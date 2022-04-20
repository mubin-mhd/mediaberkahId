import React from "react";
import BlogList from "./BlogList";
import useFetch from "../../useFetch";

function BlogHome() {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto flex flex-col items-end">
      <div className="lg:w-10/12 w-11/12 mx-auto lg:m-0 lg:-mt-40">
        <h2 className="lg:text-3xl md:text-2xl text-xl leading-10 lg:text-right text-justify text-[#4BA931] font-thin arabic mb-2">
          وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آَمَنُوا
          وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا
          بِالصَّبْرِ
        </h2>
        <p className="lg:text-right text-left text-lg">
          "Demi masa. Sesungguhnya manusia itu benar-benar dalam kerugian,
          kecuali orang-orang yang beriman dan mengerjakan amal shalih dan
          nasehat menasehati supaya menaati kebenaran dan nasehat menasehati
          supaya menetapi kesabaran." (QS. Al 'Ashr, 1-3)
        </p>
      </div>
      {error && (
        <div className="font-semibold text-lg w-screen h-screen">{error}</div>
      )}
      {isPending && "..."}
      {data && (
        <BlogList Blogs={data} title="Beberapa Nasehat Dari Saudaramu" />
      )}
    </div>
  );
}

export default BlogHome;
