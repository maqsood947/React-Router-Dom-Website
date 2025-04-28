import React, { useState, useEffect } from 'react';
import { postData, updateData } from '../Api/PostApi'; 

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (updateDataApi?.id) {  // Make sure id exists before filling
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    }
  }, [updateDataApi]);

  const addPostData = async () => {
    try {
      const res = await postData(addData);
      if (res.status === 201) {
        setData(prev => [res.data, ...prev]); // Add new post to top
        setAddData({ title: "", body: "" });  // Clear form
      }
    } catch (error) {
      console.log("Error adding post:", error);
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      if (res.status === 200) {
        const updatedPosts = data.map(post => 
          post.id === updateDataApi.id ? res.data : post
        );
        setData(updatedPosts);
        setAddData({ title: "", body: "" });  
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log("Error updating post:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <div className='h-20 bg-red-500 self-center'>
      <form onSubmit={handleFormSubmit} className='bg-red-400 flex flex-col p-3 gap-2'>
        <div>
          <input
            type="text"
            autoComplete="off"
            name="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
            className='border border-lg-black'
          />
        </div>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Add Post"
            id="body"
            name="body"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" value={updateDataApi.id ? "Edit" : "Add"} className='bg-green-400'>
          {updateDataApi.id ? "Edit Post" : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default Form;
