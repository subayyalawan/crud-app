import React from "react";

const Blog = (props) => {
  return (
    <>
      <div className="shadow-xl min-h-[300px] w-[31%] py-6 px-10 rounded-lg">
        <h3 className="text-2xl uppercase my-2 min-h-[70px]">
          {props.title}
        </h3>
        <p className="mt-4 my-8 min-h-[100px]">
          {props.body}
        </p>

        <button
          type="button"
          className="transition duration-200 py-2 px-4 bg-red-600 hover:bg-red-500 rounded-md border border-red-600 hover:border-red-500 text-white mr-2"
        >
          Delete
        </button>
        <button
          type="button"
          className="transition duration-200 py-2 px-4 bg-transparent rounded-md border hover:bg-transparent-white border-white text-white"
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default Blog;
