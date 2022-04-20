import React, { useState } from "react";
import Carousel from "../../component/Hero/Carousel";
import Kalender from "../../component/Kalender&Todo/Kalender";
import BlogHome from "../../component/Tulisan/BlogHome";

function Dashboard() {
  return (
    <div>
      <div className="bg-yellow-200 bg-opacity-20">
        <Carousel />
        <Kalender />
      </div>
      <BlogHome />
    </div>
  );
}

export default Dashboard;
