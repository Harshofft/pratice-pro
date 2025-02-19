import React ,{useState , useEffect} from 'react'
import './detail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Detail() {
    const [food,setFood] = useState({})
    const {id} = useParams()
    const loadfood = async()=>{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/food/${id}`)
        setFood(res.data.data)
    }
    useEffect(() => {
        loadfood()
    }, [])
  return (
    <div className='detail-student center'>
        <h1>Food details</h1>
        <h1>{food.id}</h1>
        <h1>Name: {food?.name}</h1>
        <h1> {food?.description}</h1>
        {/* ? (quetion mark)is used  for safe navigation */}
    </div>
  )
}

export default Detail