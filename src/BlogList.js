import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function BlogList({ Blogs, title }) {
  return (
    <Fragment>
      <div className="mt-5">
        <h1 className="text-xl font-semibold">{title}</h1>
        {Blogs.map((res, index) => (
          <Link key={index} to={`/blogdetail/${res.id}`}>
            <div className="p-2">
              <h1 className="text-xl text-red-500">{res.title}</h1>
              <p className="text-md font-light">{res.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default BlogList;
