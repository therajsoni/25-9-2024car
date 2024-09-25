import React, { useState, useEffect } from 'react';
import axios from 'axios';
import wrongIcon from '../assets/wrong.png'
import { Link, useParams } from 'react-router-dom';
import { BioContext } from '../context';
import { useContext } from 'react';

const FilterDetailsBox = ({ theme }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [details, setDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
 const {loginConfirmState} = useContext(BioContext)


  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${id}`);
        setDetails(response.data.carDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);








  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  if (!details) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className={`p-6 max-w-7xl mx-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} rounded-lg mt-8`}>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-shrink-0">
          <img 
            src={details.photo} 
            alt={details.name} 
            className="w-full h-full object-cover rounded-lg shadow-md md:w-96 md:h-96"
          />
        </div>

        <div className={`flex-1 p-4 space-y-6 rounded-lg ${isDarkMode ? 'bg-gray-900 text-gold' : 'bg-gray-50 text-black'} rounded-lg `}>
          <h2 className={`text-3xl font-bold border-b-2 pb-2 ${isDarkMode ? 'bg-gray-900 text-gold' : 'bg-gray-50 text-black'}`}>{details.name}</h2>

          <div className={`grid grid-cols-2 gap-6 ${isDarkMode ? 'bg-gray-900 text-gold' : 'bg-gray-50 text-black'} rounded-lg `}>
            <DetailRow label="Brand" value={details.brand} />
            <DetailRow label="Model" value={details.model} />
            <DetailRow label="Price" value={`$${details.price}`} />
            <DetailRow label="Seller" value={details.seller} />
            <DetailRow label="Performance" value={details.performance} />
            <DetailRow label="Owner" value={details.owner} />
            <DetailRow label="Mileage" value={`${details.miLeg} km`} />
            <DetailRow label="Servicing" value={details.serviving} />
          </div>

           

          <div className="">
            <button
              onClick={openDialog}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900"
            >
              Contact
            </button>

            {isOpen && (

             loginConfirmState ?   (

              <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center" onClick={closeDialog}>
              <div className={`relative  px-12 py-16 rounded-lg  max-w-sm w-full ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'} onClick={(e) => e.stopPropagation()`}>
                <button
                  onClick={closeDialog}
                  className={`absolute top-2 right-2 ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}
                >
                  <img src={wrongIcon} height={40} width={40}/>
                </button>
                <h2 className="text-xl font-bold">
                <div className="mb-4">
      <label className={`mr-6  text-md font-semibold mb-2  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>Seller</label>
      <p  className={` px-10 rounded py-3 bg-gray-700  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`} placeholder='Name' >{"name"}
        {/* {details.seller} */}
        </p>
    </div>

    {/* Phone Input */}
    <div className="mb-4">
      <label className={`mr-6  text-md font-semibold mb-2  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>Phone</label>
      <p  className={` px-10 rounded py-3 bg-gray-700  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>{"sellerPhone"}
        {/* {details.sellerPhone} */}
        </p>
    </div>

    {/* Email Input */}
    <div className="mb-4">
      <label className={`mr-6  text-md font-semibold mb-2  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`}>Address</label>
      <p  className={` px-10 rounded py-3 bg-gray-700  ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`} placeholder='Name' >{"address"}
        {/* {seller.sellerAddress} */}
        </p>
    </div>
                </h2>
              </div>
            </div>

             )  
             :
             (
              <>
              


 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeDialog}>
 <div className={`relative  px-12 py-16 rounded-lg  max-w-sm w-full ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`} onClick={(e) => e.stopPropagation()}>
   <button
     onClick={closeDialog}
     className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
   >
     <img src={wrongIcon} height={40} width={40}/>
   </button>
   <h2 className="text-xl font-bold">
     <p className='font-light text-lg' >Login for see details and contact seller</p>
     <p className='top-2 right-2 text-dark font-sens font-bold text-opacity-200'>
       Click&login :  
      <Link to={"/login"} className='underline font-bolder text-xl ml-3' >Login</Link>
     </p>
   </h2>
 </div>
</div>              
              </>
             )

             
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div>
    <p className="text-xl font-bolder ">{label}</p>
    <p className="text-lg font-medium">{value}</p>
  </div>
);

export default FilterDetailsBox;
