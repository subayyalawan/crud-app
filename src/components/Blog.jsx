import React, { useState } from "react";

const Blog = (props) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(props.title);
//   const [editedBody, setEditedBody] = useState(props.body);

//   const handleEdit = () => {
//     setIsEditing((isEditing) => !isEditing);
//   };

//   const handleSave = () => {
//     props.onSave(editedTitle, editedBody);
//     setIsEditing(false);
//   };

  return (
    <>
      <div className="shadow-xl min-h-[300px] w-[31%] py-6 px-10 rounded-lg">
        {/* {isEditing ? ( */}
        {/* <input
            className="block w-full mt-4 p-3 focus:outline-none"
            type="text"
            // value={editedTitle}
            value={props.title}
            onChange={(e) => setEditedTitle(e.target.value)}
          /> */}
        {/* ) : ( */}
        <h3 className="text-2xl uppercase my-2 min-h-[70px]">
          {/* {editedTitle} */}
          {props.title}
        </h3>
        {/* )} */}

        {/* {isEditing ? ( */}
        {/* <textarea
            className="block w-full mt-7 mb-[2.4rem] p-3 focus:outline-none h-24 resize-none"
            type="text"
            value={editedBody}
            // value={props.body}
            onChange={(e) => setEditedBody(e.target.value)}
          > </textarea> */}
        {/* ) : ( */}
        <p className="mt-4 my-8 min-h-[100px]">
          {/* {editedBody} */}
          {props.body}
        </p>
        {/* )} */}

        <button
          type="button"
          //   onClick={props.onDelete}
          className="transition duration-200 py-2 px-4 bg-red-600 hover:bg-red-500 rounded-md border border-red-600 hover:border-red-500 text-white mr-2"
        >
          Delete
        </button>

        {/* {isEditing?( */}
        {/* <button
          type="button"
            onClick={handleSave}
          className="transition duration-200 py-2 px-4 bg-green-700 hover:bg-green-600 rounded-md border border-white text-white"
        >
          Done
        </button> */}
        {/* ):( */}
        <button
          type="button"
        //   onClick={handleEdit}
          className="transition duration-200 py-2 px-4 bg-transparent rounded-md border hover:bg-transparent-white border-white text-white"
        >
          Edit
        </button>
        {/* )} */}
      </div>
    </>
  );
};

export default Blog;
