import React, { useState } from "react";
import { GetPost, DeletePost } from "../../Api/PostApi";
import { useEffect } from "react";
import PostCard from "../../components/Cards/PostCard";
import Form from "../../components/Form";

function GitHub() {
  const [postData, setPostData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [updateDataApi, setUpdateDataApi] = useState({});
  const [openDialogue, setOpenDialogue] = useState(false);

  const getData = async () => {
    try {
      const res = await GetPost();
      setPostData(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deletePost = async (id) => {
    try {
      const res = await DeletePost(id);

      if (res.status === 200) {
        const updatedData = postData.filter((item) => item.id !== id);
        setPostData(updatedData);
      }
    } catch (error) {
      console.log("Error deleting post:", error);
    }
  };

  const handleEdit = (item) => setUpdateDataApi(item);

  return (
    <>
      {/* <section className="flex justify-center items-center m-5">
    
      </section> */}
      <section className="flex justify-center items-center m-5">
        {loader ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6">
            {postData?.map((item) => (
              <div key={item?.id}>
                <PostCard
                  postData={item}
                  handleDelete={() => deletePost(item.id)}
                  handleEdit={() => handleEdit(item)}
                />
              </div>
            ))}
          </div>
        )}
      </section>
      <div className="flex items-center lg:order-2 justify-center">
        <button
          onClick={() => setOpenDialogue(true)}
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
          Add Post{" "}
        </button>
      </div>
      <dialog
        open={openDialogue}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-red-600 rounded-lg p-4 backdrop:bg-black/50">
        <button
          className="absolute top-2 right-2 text-white"
          onClick={() => setOpenDialogue(false)}>
          ✕
        </button>
        <Form
          data={postData}
          setData={setPostData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </dialog>
    </>
  );
}
export default GitHub;
