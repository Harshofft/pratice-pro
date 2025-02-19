import React ,{useState , useEffect} from 'react'
import "./App.css"
import axios from 'axios'
import {Link} from 'react-router-dom'
import Foodcard from '../../Components/Foodcard/Foodcard'
function App() {
  const [food , setFood] = useState([])
  const loadfood = async()=>{
    const res = await axios.get("https://projectback1-arab.onrender.com/food")
    setFood(res.data.data)
  }
  useEffect(() => {
    loadfood()
  }, [])
  
  return (
    <div className='menu'>
      <h1 className='title'>Food Menu</h1>
      <Link to={"/add"}>
      <button type="button" className='addbtn' >Add Food item</button>
      </Link>
      <div className='main-menu'>
      {
        food.map((food,i)=>{
          const {name,price,description,id }= food;
          return(
            <Foodcard key={i} id={id} name={name} price={price} description={description}/>
            // <div className='foodcard'>
              
            //   <h1>{name}</h1>
            //   <h3>{description}</h3>
            //   <h2>{price}</h2>
            // </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default App