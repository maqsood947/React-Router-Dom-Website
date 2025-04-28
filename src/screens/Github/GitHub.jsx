import React, { useState } from 'react'
import { GetPost, DeletePost } from '../../Api/PostApi'
import { useEffect } from 'react'
import PostCard from '../../components/Cards/PostCard'
import Form from '../../components/Form'

function GitHub() {
const [postData, setPostData]= useState([])
  const[loader, setLoader] = useState(true)
  const [updateDataApi, setUpdateDataApi] = useState({});


const getData= async()=>{
  try{
  const res = await GetPost()
  setPostData(res.data)
  setLoader(false)
}
  catch(error){
    console.log(error);
  } 
}

useEffect(() => {
getData()
}, [])


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


  return (
    <>
    <section className='flex justify-center items-center m-5' >
    <Form
          data={postData}
          setData={setPostData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />    </section>
    <section className="flex justify-center items-center m-5">
    {loader ? (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-6">
          {postData?.map((item) => (
            <div key={item?.id}>
           <PostCard postData={item} handleDelete={()=> deletePost(item.id)}/>
            </div>
          ))}
            </div>
          )}
        </section>
     
        </>
  );
}
export default GitHub
