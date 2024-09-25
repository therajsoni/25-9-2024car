import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import axios from "axios"
import { useState, useEffect } from 'react'
import FilterBox from './FilterBox.jsx'
import { useContext } from 'react';
import { BioContext } from '../context';
import { CgSelectO } from "react-icons/cg";
import { FaFilter, FaRupeeSign } from "react-icons/fa";
import {Link} from "react-router-dom"
import TwoPointerInput from './TwoPointerInput';
import {useNavigate} from "react-router-dom"



const FilterResponsePage = ({theme}) => {

    const [cars, setCars] = useState([]);
    const {filters,setFilters,carDeatils} = useContext(BioContext);

    const navigate = useNavigate()

    const [state,setState] = useState(false)
    useEffect(()=>{
        if(theme==="dark"){
            setState(true)
        }
        else{
            setState(false)
        }
    },[theme])

    const[value,setValue] = useState([])
    const handlePriceChange = (minPrice, maxPrice) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          minPrice,
          maxPrice,
        }));
      };
      

    // useEffect(() => {
    //     const fetchCars = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3000/getAllData', {
    //                 params: filters,
    //             });
    //             setCars(response.data.data);
    //         } catch (error) {
    //             console.error("Error fetching cars:", error);
    //         }
    //     };

    //     fetchCars();
    // }, [filters]);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    
    const handleChange = (e) => {
        navigate("/list")
        window.scrollTo(0,0)
      }
     




  return (
    <div>








   


   <div className={` ${state ? 'bg-customRed' : 'bg-gray-300 mb-12'}`}>
    <div class="flex justify-center mb-8">
        <button onClick={handleChange}  className="bg-yellow-400 text-black  py-2 px-16 rounded mt-5 hover:bg-yellow-500 hover:yellow">
           <span style={{display:"flex", flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
           Filter
           <FaFilter />
           </span>          
        </button>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
        
 
        <select onChange={handleFilterChange} class={`font-sans font-bolder  w-[100%] border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-400' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Price</option>
            <option>50T-1L</option>
            <option>1L-5L</option>
            <option>5L-10L</option>
            <option>10L-13L</option>
            <option>none</option>
        </select>
     
  <select  onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-x-3.5 hover:border-y-3.5 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }  hover:bg-opacity-900`}>
    <option selected disabled class="font-bold text-dark">Brand </option>
    <option>Mahindra</option>
    <option>TATA</option>
    <option>ROYAL</option>
    <option>YAMASAKI</option>
    <option>none</option>
  </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Type-Owner</option>
            <option>Seller</option>
            <option>LocalSeller</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Year</option>
            <option>2Y-4L</option>
            <option>4L-7L</option>
            <option>7L-10L</option>
            <option>10</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Performance</option>
            <option>100c-500c</option>
            <option>500c-1500c</option>
            <option>1500c-5000c</option>
            <option>5000c-9000c</option>
            <option>9000c-13000c</option>
            <option>13000c</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Owner</option>
            <option>FirstOwner</option>
            <option>ScondOwner</option>
            <option>ThirdOwner</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">MilLeag</option>
            <option>50c-1lc</option>
            <option>1lc-5lc</option>
            <option>5lc-10lc</option>
            <option>10lc-13lc</option>
            <option>none</option>
        </select>
        <select   onChange={handleFilterChange} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Servicing</option>
            <option>No SERVICE</option>
            <option>1T</option>
            <option>2T-5T</option>
            <option>10T</option>
            <option>none</option>
        </select>
        <span  class={`font-sans font-bolder  w-full   border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
        Min-Price:<span className='flex items-center justify-center'><FaRupeeSign className='inline text-sm'/>{value[0]}</span>
        </span>
               <div class={`font-sans font-bolder   w-full border border-yellow-400 border-x-2 border-y-2 col-span-2  hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
    {/* <input type="range" className="w-[96%] " min={0} max={1000000}  />
    <span className='ml-2 flex justify-center items-center'></span> */}
    <TwoPointerInput handlePriceChange={handlePriceChange} value={value} setValue={setValue} />
    </div>
    <span  class={`font-sans font-bolder sm:w-full  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
    Max-Price:<span className='flex items-center justify-center'><FaRupeeSign className='inline text-sm'/>{value[1]}</span>
    </span>
    </div>
</div>


<div class='flex justify-center mb-8'>
<h1 className="bg-yellow-400 text-black  py-2 px-16 rounded mt-5 hover:bg-yellow-500 hover:yellow">Car List</h1>
</div>
 
 
                {cars.length > 0 ? (
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
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



            </div>

    
  )
}

export default FilterResponsePage
