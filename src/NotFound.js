import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Sorry!!</h1>
      <p className="text-md mt-2">Page Not Found.</p>
      <Link className="underline" to="/">
        Back to home page...
      </Link>
    </div>
  );
}

export default NotFound;
