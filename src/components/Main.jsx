import React, { useState, useEffect } from "react";
import { get, put, del } from "./Api";
import Create from "./Create";
import Read from "./Read";

const Main = () => {
  const [myData, setMyData] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const getApiData = async () => {
    try {
      // const resp = await get("/posts");
      const resp = await get("/Crud");
      setMyData(resp.data);
    } catch (error) {
      setErrMsg(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  const AddItem = (data) => {
    setMyData((prevData) => [...prevData, data]);
    // console.log(myData)
  };

  const HandleEdit = (cardIndex, newBody, newTitle) => {
    // put(`/posts/${cardIndex}`, {title:newTitle, body:newBody})
    put(`/Crud/${cardIndex}`, { title: newTitle, body: newBody });
  };

  const handleDelete = (cardIndex) => {
    const prevData = [...myData]
    const updatedCards = myData.filter((item) => item.id !== cardIndex);
    setMyData(updatedCards);

    try {
      // del(`/posts/${cardIndex}`)
      del(`/Crud/${cardIndex}`);
      getApiData();
    } catch (error) {
      setMyData(prevData);
      setErrMsg(error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto text-center">
        <h2 className="md:text-5xl text-3xl md:my-12 my-8 text-center">Crud Operation</h2>
        {errMsg !== "" && <h2 className="text-gray-400">{errMsg}</h2>}
        <div className="flex items-stretch flex-wrap 2xl:gap-12 lg:gap-8 md:gap-6 md:flex-row flex-col" >
          <Create onAddItem={AddItem} setErrMsg={setErrMsg} />
          {myData.map((data, index) => {
            return (
              <Read
                key={data.id}
                title={data.title.slice(0, 50)}
                body={data.body.slice(0, 150)}
                onEdit={(newTitle, newBody) =>
                  HandleEdit(data.id, newTitle, newBody)
                }
                onDelete={() => {
                  handleDelete(data.id);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
