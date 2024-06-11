import React from 'react';

const page=()=>{
  return(
    <>
      <h1 className='bg-black text-white p-5  text-5xl font-bold text-center '> Zaid Todo List</h1>
      <form >
       <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter task here'/>
     
       <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' placeholder='Enter description here here'/>
       <button className='bg-black text-white px-4 py-2 text-2xl font-bold m-5' > Add Task</button>
         
      </form>
    
    
    </>
  )
} 
export default page