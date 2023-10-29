import React, { useState } from "react";
import { post } from "./Api";

const Create = ({ onAddItem, setErrMsg}) => {
  const[newItem, setNewItem] = useState({title:"", body:""})
  const[error, setError] = useState("");

  const HandleCreate = () => {
    if (newItem.body && newItem.title) {
      console.log(newItem)
      // post("/posts", newItem)
      post("/Crud", newItem)
      .then((resp) => {

        setNewItem({title:"", body:""})
        setError("");
        onAddItem(resp.data);
      })
      .catch((error)=>{
        setErrMsg(error.message);
      })
    } else {
      setError("please enter Both values in their fields");
    }
  };

  return (
    <>
      <div className="shadow-xl bg-slate-800 md:min-h-[300px] min-h-0 md:w-[31%] w-11/12 mx-auto md:mx-0 md:py-6 md:px-10 p-4 rounded-lg">
        <input
          className="block w-full mt-4 p-3 focus:outline-none border border-opacity-20 border-gray-200 bg-slate-800 rounded-lg"
          name="title"
          type="text"
          placeholder="Enter Your Blog Title"
          value={newItem.title}
          onChange={(e) => setNewItem({...newItem, title:e.target.value})}
        />

        <textarea
          className="block w-full md:mt-7 mt-4 p-3 focus:outline-none h-20 resize-none border border-opacity-20 border-gray-200 bg-slate-800 rounded-lg"
          type="text"
          name="body"
          placeholder="Enter Your Blog Body"
          value={newItem.body}
          onChange={(e) => setNewItem({...newItem, body:e.target.value})}
        ></textarea>
        <p className="text-red-600 md:my-[7.2px] my-1 md:text-base text-xs capitalize md:h-6 h-4">
          {error}
        </p>
        <button
          onClick={HandleCreate}
          className="md:mt-3 mt-1 transition duration-200 py-2 px-4 bg-green-700 hover:bg-green-600 rounded-md border border-green-700 hover:border-green-600 text-white"
        >
          Add Item
        </button>
      </div>
    </>
  );
};

export default Create;
