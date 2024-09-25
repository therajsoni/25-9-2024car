import React, { useEffect ,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Booking = ({theme}) => {

    const [cars,setCars]  =  useState([])

    
    const [state,setState] = useState(false)
    useEffect(()=>{
        if(theme==="dark"){
            setState(true)
        }
        else{
            setState(false)
        }
    },[theme])


    useEffect(()=>{
    
    const carsList = async() => { 
      
     await  axios.get("http://localhost:3000/getAllData").then((data)=>{
      setCars(data.data.data)
    }).catch((e)=>{
      alert(e.message);
    })   
  }
  carsList() 
    
    },[cars])

    const handleToBottom = () => {
      window.scrollTo( {top: document.documentElement.scrollHeight*10/cars.length, // Scroll to the bottom
        behavior: 'smooth', // Optional: for smooth scrolling)
    })}

    const handleToTop = () => {
      window.scrollTo( {top: document.documentElement.scrollHeight*0, // Scroll to the bottom
        behavior: 'smooth', // Optional: for smooth scrolling)
    })}

  return (
    <div>
 
<div class='flex justify-center mb-8'>
<h1 onClick={handleToBottom} className="bg-yellow-400 w-full text-black  text-center py-4 space-x-3 space-y-3 text-lg rounded font-extrabold hover:bg-yellow-500 hover:yellow">BOOKING for Car List</h1>
</div>
 
 
                {cars.length > 0 ? (
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-5 p-4 max-w-4xl mx-auto">
                        {cars.map(car => (
                            <Link to={`/list/${car._id}`} key={car._id} className={`font-sans font-bolder  w-[100%] border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-400' } ${state ? 'bg-customRed' : 'bg-white' }`} >
                                <div>
                                <img src={car.photo}/>
                                 </div>
                               <p>
                                name :  {car.name}
                                </p>
                                 <p>
                                brand : {car.brand} 
                                 </p>
                                 <p>
                                price : {car.price} 
                                 </p>
                                
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p>No cars found.</p>
                )}

<h1 onClick={handleToTop} className="bg-yellow-400 w-full text-black  text-center py-4 space-x-3 space-y-3 text-lg rounded font-extrabold hover:bg-yellow-500 hover:yellow">Go Top</h1>
    </div>
  )
}

export default Booking
