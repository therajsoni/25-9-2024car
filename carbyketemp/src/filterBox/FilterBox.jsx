import {Link} from "react-router-dom";
import { CgSelectO } from "react-icons/cg";
import { FaFilter } from "react-icons/fa";
import TwoPointerInput from './TwoPointerInput';
import { FaRupeeSign } from "react-icons/fa";
import { useContext } from 'react';
import { BioContext } from '../context';
import { useNavigate } from 'react-router-dom';


const FilterBox = ({theme}) => {
    
    const navigate = useNavigate();

    const {filters,setFilters} = useContext(BioContext);

    const [data,setData] = useState([]);

    const[value,setValue] = useState([])

    const handlePriceChange = (minPrice, maxPrice) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          minPrice,
          maxPrice,
        }));
      };
    // const handleFilterChange = (e,filterType) => {
    //     // const { name, value } = e.target;
    //     // setFilters((prevFilters) => ({
    //     //     ...prevFilters,
    //     //     [name]: value,
    //     // }));
    //     setFilters({
    //         ...filters,
    //         [filterType] : e.target.value, 
    //     });
    // };

    const handleFilterChange = (e, filterType) => {
        setFilters(prevFilters => ({
          ...prevFilters,
          [filterType]: e.target.value
        }));
      };
      

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://localhost:3000/getData', {
    //           params: filters, // Send filters as query parameters
    //         });
    //         setData(response.data); // Update the data state with the response
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
    
    //     fetchData();
    //   }, [filters]); // Effect runs whenever filters change

  


    const [state,setState] = useState(false)
    useEffect(()=>{
        if(theme==="dark"){
            setState(true)
        }
        else{
            setState(false)
        }
    },[theme])


    const handleChange = (e) => {
      navigate("/list")
      window.scrollTo(0,0)
    }
   
  return (
    <div className={` ${state ? 'bg-customRed' : 'bg-gray-300 mb-12'}`}>
    <div class="flex justify-center mb-8">
        <button onClick={handleChange} className="bg-yellow-400 text-black  py-2 px-16 rounded mt-5 hover:bg-yellow-500 hover:yellow">
           <span style={{display:"flex", flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
           Filter
           <FaFilter />
           </span>          
        </button>
    </div>

    {/* <TwoPointerInput handlePriceChange={handlePriceChange} />  */}


    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
        
 
        <select value={filters.name} onChange={(e)=>handleFilterChange(e,'name')} class={`font-sans font-bolder  w-[100%] border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-400' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Name of CAR</option>
            <option>50T-1L</option>
            <option>1L-5L</option>
            <option>5L-10L</option>
            <option>10L-13L</option>
            <option>none</option>
        </select>
     
  <select value={filters.brand} onChange={(e)=>handleFilterChange(e,'brand')} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-x-3.5 hover:border-y-3.5 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }  hover:bg-opacity-900`}>
    <option selected disabled class="font-bold text-dark">Brand </option>
    <option>Mahindra</option>
    <option>TATA</option>
    <option>ROYAL</option>
    <option>YAMASAKI</option>
    <option>none</option>
  </select>
        <select value={filters.booking} onChange={()=>handleFilterChange(e,'booking')} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Booking</option>
            <option>Seller</option>
            <option>LocalSeller</option>
            <option>none</option>
        </select>
        <select value={filters.sell}  onChange={(e)=>handleFilterChange(e,'sell')} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Sell</option>
            <option>2Y-4L</option>
            <option>4L-7L</option>
            <option>7L-10L</option>
            <option>10</option>
            <option>none</option>
        </select>
        <select value={filters.age}  onChange={(e)=>handleFilterChange(e,'age')} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Age</option>
            <option>100c-500c</option>
            <option>500c-1500c</option>
            <option>1500c-5000c</option>
            <option>5000c-9000c</option>
            <option>9000c-13000c</option>
            <option>13000c</option>
            <option>none</option>
        </select>
        <select value={filters.run}  onChange={(e)=>handleFilterChange(e,'run')} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Run</option>
            <option>FirstOwner</option>
            <option>ScondOwner</option>
            <option>ThirdOwner</option>
            <option>none</option>
        </select>
        <select value={filters.model}  onChange={(e)=>handleFilterChange(e,"model")} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">Model</option>
            <option>50c-1lc</option>
            <option>1lc-5lc</option>
            <option>5lc-10lc</option>
            <option>10lc-13lc</option>
            <option>none</option>
        </select>
        <select value={filters.city}  onChange={(e)=>handleFilterChange(e,'city')} class={`font-sans font-bolder  w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
            <option selected disabled class="font-bold text-dark">City</option>
            <option>No SERVICE</option>
            <option>1T</option>
            <option>2T-5T</option>
            <option>10T</option>
            <option>none</option>
        </select>
        <span  class={`font-sans font-bolder  w-full  border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
        Min-Price:<FaRupeeSign className='inline text-sm'/>{filters.minPrice}   
        </span>
               <div class={`font-sans font-bolder   w-full border border-yellow-400 border-x-2 border-y-2 col-span-2  hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
    {/* <input type="range" className="w-[96%] " min={0} max={1000000}  />
    <span className='ml-2 flex justify-center items-center'></span> */}
    <TwoPointerInput handlePriceChange={handlePriceChange} />
    </div>
    <span  class={`font-sans font-bolder   w-full border border-yellow-400 border-x-2 border-y-2 hover:border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center text-yellow-600 ${state ? 'text-white' : 'text-yellow-600' } ${state ? 'bg-customRed' : 'bg-white' }`}>
    Max-Price:<FaRupeeSign className='inline text-sm'/>{filters.minPrice}
    </span>
</div>
</div>

  )
}

export default FilterBox
