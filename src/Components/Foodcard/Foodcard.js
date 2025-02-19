import React from 'react'
import './foodcard.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Foodcard({ name, price, id, description }) {
  const navigate = useNavigate()
  const delBtn = async (id) => {
    const res = await axios.delete(`http://localhost:5001/food/${id}`)
    window.location.reload()
    console.log(res.data.data)
  }
  return (
    <div className='foodmenu' onClick={() => { navigate(`/details/${id}`) }}>
      < span className="srno">Sr no {id}</span>
      <h1 className='card-title'>{name}</h1>
      <h3>{description}</h3>
      <h3>{price}</h3>
      <div className='btn-container'>
        <button className='addbtn del' type='button' onClick={
          (e) => {
            e.stopPropagation()
            delBtn(id)
          }
        }>Delete</button>
        <button className='addbtn' type='button' onClick={
          (e) => {
            e.stopPropagation()
            navigate(`/update/${id}`)
          }
        }>Update</button>
      </div>
    </div>
  )
}

export default Foodcard