import React, { useState } from "react";

const Read = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [err, setErr] = useState("");

  const [editedItem, setEditedItem] = useState({
    title: props.title,
    body: props.body,
  });

  const handleSaving = () => {
    if (editedItem.title && editedItem.body) {
      props.onEdit(editedItem.title, editedItem.body);
      setIsEditing(false);
      setErr("");
    } else {
      setErr("Please Enter Both Values in Their Fields");
    }
  };

  const handleEditBtn = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  return (
    <>
      <div className="shadow-xl bg-slate-800 md:min-h-[300px] min-h-0 md:w-[31%] w-11/12 md:py-6 md:px-10 p-4 rounded-lg mx-auto md:mx-0">
        {isEditing ? (
          <input
            className="block w-full mt-4 p-3 focus:outline-none border border-opacity-20 border-gray-200 bg-slate-800 rounded-lg"
            name="title"
            type="text"
            placeholder="Enter Your Blog Title"
            value={editedItem.title}
            onChange={(e) =>
              setEditedItem({ ...editedItem, title: e.target.value })
            }
          />
        ) : (
          <h3 className="md:text-2xl text-xl uppercase my-2 min-h-[50px] md:min-h-[70px] text-gray-200">
            {editedItem.title}
          </h3>
        )}

        {isEditing ? (
          <textarea
            className="block w-full md:mt-7 mt-4 p-3 focus:outline-none border resize-none h-20 border-opacity-20 border-gray-200 bg-slate-800 rounded-lg"
            name="title"
            type="text"
            placeholder="Enter Your Blog Title"
            value={editedItem.body}
            onChange={(e) =>
              setEditedItem({ ...editedItem, body: e.target.value })
            }
          ></textarea>
        ) : (
          <p className="my-3 min-h-[40px] md:min-h-[80px] text-gray-200">{editedItem.body}</p>
        )}
        <p className="text-red-600 md:my-[7.2px] text-xs md:text-base capitalize md:h-6 h-4">
          {err}
        </p>
        <button
          type="button"
          onClick={props.onDelete}
          className="transition duration-200 py-2 px-4 bg-red-800 hover:bg-red-700 rounded-md border border-red-800 hover:border-red-700 text-gray-200 mr-2 md:mt-3 mt-1"
        >
          Delete
        </button>

        {isEditing ? (
          <button
            type="button"
            onClick={handleSaving}
            className="md:mt-3 mt-1 transition duration-200 py-2 px-4 bg-green-700 rounded-md border hover:bg-green-600 border-green-700 hover:border-green-600 text-gray-200"
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            onClick={handleEditBtn}
            className="md:mt-3 mt-1 transition duration-200 py-2 px-4 bg-transparent rounded-md border hover:bg-transparent-white border-grey-200 text-gray-200"
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
};

export default Read;
