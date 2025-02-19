import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './add.css'
function Add() {
    const navigate = useNavigate()
    const [food,setFood] = useState({
        id:'',
        name:'',
        price:'',
        description:''
    })
    async function addFood() {
        try{
        const res = await axios.post('https://projectback1-arab.onrender.com/food',{
            id:food.id,
            name:food.name,
            price:food.price,
            description:food.description
        })
        console.log(res.data);
        setFood ({
            id:'',
            name:'',
            price:'',
            description:''
        })
        alert(res.data.msg)
        navigate('/')
} catch(error){
    console.log(error)
}
    }
  return (
    <div className='add-food'>
        <h1>Add New Food here</h1>
        <form className='ipbox'>
            <input type="text" className='ipfood' placeholder='Enter Food Id' value={food.id} onChange={
                (e)=>{
                    setFood({...food, id:e.target.value})
                }
            } />
            <input type="text" className='ipfood' placeholder='Enter Food Name' value={food.name} onChange={
                (e)=>{
                    setFood({...food, name:e.target.value})
                }
            } />
            <input type="text" className='ipfood' placeholder='Enter Food price'  value={food.price} onChange={
                (e)=>{
                    setFood({...food, price:e.target.value})
                }
            }/>
            <input type="text" className='ipfood' placeholder='Enter Food Description' />
        </form>
        <button type='submit' className='addbtn' onClick={addFood}> Add Food</button>
    </div>
  )
}

export default Add