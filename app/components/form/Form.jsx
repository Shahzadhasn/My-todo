"use client"
import {motion} from 'framer-motion'
import React from 'react'
import { useState } from 'react'


const Form = () => {
    const deletehandler = (i) =>{
        let copytask=[...main]
        copytask.splice(i,1)
        setmain(copytask)
    }
    const [title, settitle] = useState('')
    const [description, setDescription] = useState('')
    const [main, setmain] = useState([])
    const handelsubmit = (e) =>{
        e.preventDefault()
        setmain([...main, {id: Date.now(), title, description}])
        settitle('')
        setDescription('')
    }
   
     let tasks="No Task Added"

    const TaskCard = ({ title, description, onDelete }) => {
  return (
    <motion.div 
    drag  
    dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
    whileDrag={{ scale: 1.1 }}
    initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    className=" border-4 border-black rounded-3xl p-4 w-64 shadow-md">
      
      {/* Title */}
      <div className="border-2 border-black rounded-xl p-2 mb-3 ">
        <h2 className="text-lg font-semibold text-center">
          {title}
        </h2>
      </div>

      {/* Description */}
      <div className="border-2 border-black rounded-2xl p-4 mb-4  h-32 flex items-start">
        <p className="">
          {description}
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={onDelete}
        className="w-full border-2 border-red-500 text-red-500 rounded-xl py-2 font-medium hover:bg-red-500 hover:text-white transition"
      >
        Delete
      </button>

    </motion.div>
  );
};


    if(main.length>0){
            tasks=main.map((item, i)=>{
                return(
                     <TaskCard
      key={item.id}
      title={item.title}
      description={item.description}
      onDelete={() => deletehandler(i)}
    />
                );
            });



    };
    


  



   
  return (
    <div>
        <form action="" className='m-5 ' onSubmit={handelsubmit}>
            <input className='border-2 border-zinc-900 rounded-md text-md p-3 m-3'
             type="text"
              placeholder='Enter Title' 
              value={title}
              onChange={(e)=>{
                settitle(e.target.value)
              }}
              /> 
            <input className='border-2 border-zinc-900 rounded-md text-md p-3 m-3' type="text" placeholder='Enter Description'
             value={description}
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
            />
            <button className='bg-zinc-800 text-white p-3 rounded-md m-3 cursor-pointer' type='submit'>Add Task</button>
        </form>
        <hr />
        <div className='p-10 flex flex-wrap gap-10 justify-center'>
            {tasks}
        </div>
    </div>
  )
}

export default Form