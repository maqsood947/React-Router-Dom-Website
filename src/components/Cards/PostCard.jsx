import React from 'react'

function PostCard({postData,handleDelete}) {
  return (
    <div className=" w-54 h-52 transition-all duration-300 text-center bg-gray-300 from-indigo-900 to-blue-700 rounded-xl justify-center items-center gap-1 my-2 py-5">
<h2 className="font-black">{postData.title}</h2>
<p className=''>{postData.body}</p>
<div className="gap-5 px-4">
<button className='rounded bg-green-400 w-20 '>
Add
</button>
<button className='rounded bg-red-400 w-20' onClick={handleDelete}>
Delete
</button>
</div>
    </div>
  )
}

export default PostCard