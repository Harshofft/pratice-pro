import React, {useState , useEffect } from 'react'
import  './update.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';
function Update() {
const {id} = useParams()
const [food , setFood] = useState({
    id:"",
    name:"",
    price:"",
    description:""
})
const loadfood = async()=>{
    const res = await axios.get(`https://projectback1-arab.onrender.com/food/${id}`)
    setFood(res.data.data)
}
useEffect(()=>{
    loadfood(id);
},[id])
async function updatefood() {
  try{
  const res = await axios.put(`https://projectback1-arab.onrender.com/food/${id}`,{
  name:food.name,
  price:food.price,
  description:food.description

})
// toast.success("Updated Successfully")
alert(res.data.msg)
  }catch(error){
    console.log(error)
  }
}

  return (
    <div className='update-food'>
        <h1>Update Food item </h1>
        <form className='ipbox'>
            <input type="text" className='ipfood' placeholder='Enter Food Id' value={food.id} 
            onChange={(e)=>{
              setFood({...food, id:e.target.value})
            }}
            disabled 
             />
            <input type="text" className='ipfood' placeholder='Enter Food Name' value={food.name}
            onChange={(e)=>{
              setFood({...food, name:e.target.value})
            }} />
            <input type='number' className='ipfood' placeholder='Enter Food price'  value={food.price} 
            onChange={(e)=>{
              setFood({...food, price:e.target.value})
            }}
            />
            <input type="text" className='ipfood' placeholder='Enter Food Description' value={food.description} 
            onChange={
              (e)=>{
                setFood({...food, description:e.target.value})
              }
            }
            />
        </form>
        <button type='button' className='addbtn' onClick={updatefood}>Update</button>
        {/* <Toaster /> */}
    </div>
  )
}

export default Update