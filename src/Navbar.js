import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between px-3 content-center py-5 shadow-sm mb-10">
      <ul>
        <li className="text-xl font-semibold text-red-500">Mubin Blog</li>
      </ul>
      <ul className="flex space-x-5">
        <Link to="/">
          <li className="text-lg">Home</li>
        </Link>
        <Link to="/create">
          <li className="text-lg">New Blog</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
