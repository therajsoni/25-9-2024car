import React , {useState,useEffect} from 'react'
import { Link , useNavigate ,useLocation  } from "react-router-dom";
import wrongIcon from '../assets/wrong.png'
import { BioContext } from "../context/index.jsx"
import { useContext } from "react"; 


const CarsAdd = ({theme}) => {

  const [state,setState] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(()=>{
      if(theme==="dark"){
          setState(true)
      }
      else{
          setState(false)
      }
  },[theme])

  

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);


  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false)

 
  const [files, setFiles] = useState([]);
  const {loginConfirmState} = useContext(BioContext)

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (files.length + selectedFiles.length > 4) {
      openDialog()
      return;
    }
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>

      {isOpen &&     <>
              


                      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={closeDialog}>
                      <div className={`relative  px-12 py-16 rounded-lg  max-w-sm w-full ${isDarkMode ? 'bg-gray-600 text-gold' : 'bg-gray-50 text-black'}`} onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={closeDialog}
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                          <img src={wrongIcon} height={40} width={40}/>
                        </button>
                        <h2 className="text-xl font-bold">
                          <p className='font-light text-lg' >only 4 photo with 4 direction set</p>
                          <p className='top-2 right-2 text-dark font-sens font-bold text-opacity-200'>
                           remove from bottom Image                 
                           <Link to={"/login"} className='underline font-bolder text-xl ml-3' >otherwise all Image remove auto</Link>
                          </p>
                        </h2>
                      </div>
                     </div>
                          </>
}
      
      {
        loginConfirmState ? (
<>
<form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="photo">
      Upload Photo(*only four photo with 4 direction)
    </label>
    <input
      type="file"
      id="photo"
      accept='image/*'
      multiple
      className={`w-full px-4 py-1  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-slate-900' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder='one photo can upload'
      onChange={handleFileChange}
    />
   <div className="mt-2 bg-slate-50">
        {files.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-700">Selected Files:</h3>
            <ul className="list-disc list-inside">
              {files.map((file, index) => (
                <li key={index} className="flex justify-between text-sm text-gray-600">
                  {file.name}
                  <button
                    className="ml-2 text-green-500 hover:text-red-700"
                    onClick={() => removeFile(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
 </div>
 
  </div>

  {/* Field 1 */}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field1">
      Name of Car : 
    </label>
    <input
      type="text"
      id="field1"
      className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter Name of Car"
    />
  </div>

  {/* Field 2 */}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field2">
      Brand
    </label>
    <input
      type="text"
      id="field2"
     className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter Brand Name"
    />
  </div>

  {/* Field 3 */}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field3">
      Booking Sell & BookingSell
    </label>
    <select
      style={{  webkitAppearance: "none",
        mozAppearance: "none",
        appearance: "none",}}
      type="text"
      id="field3"
     className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter value for Field 3"
    >
     <option disabled className='text-opacity-50 text-blue-500 leading-tight'>type</option>
<option>Sell & Booking</option>     
<option>Sell</option>
<option>Booking</option>      
      </select>

  </div>

  {/* Field 4 */}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field4">
     Sell Price
    </label>
    <input
      type="text"
      id="field4"
      className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter Sell for"
    />
  </div>

  {/* Field 5 */}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field5">
      Age 
    </label>
    <input
      type="text"
      id="field5"
     className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter Sell Price"
    />
  </div>

  {/* Field 6 */}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field6">
      Run
    </label>
    <input
      type="text"
      id="field6"
     className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter Running Car"
    />
  </div>

  {/* Field 7 */}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field7">
     Model
    </label>
    <input
      type="text"
      id="field7"
     className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter   Servicing Time"
    />
  </div>

  
  {/* Field 8*/}
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="field8">
      Address City
    </label>
    <input
      type="text"
      id="field8"
     className={`w-full px-4 py-2  border border-gray-300 focus:ring-primary focus:border-primary ${state ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
      placeholder="Enter  Address City"
    />
  </div>


  {/* Submit Button */}
  <button
    type="submit"
    className={`w-full px-4 py-2 ${state ? 'bg-black' : 'bg-orange-600'} rounded-lg hover:bg-primary-dark transition-colors duration-300`}
  >
    Submit
  </button>
</form>
</>
        )
        :
        (
<>

<div className={`min-h-screen flex items-center justify-center p-4 ${state ? 'bg-black' : 'bg-transparent'}`}>
 <div className="bg-white p-12 rounded-lg shadow-md max-w-sm w-full">
   <h1 className="text-xl font-bold text-gray-900 mb-4">Login For Add Your Cars for sell and booking</h1>
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
      }

    </div>
  )
}

export default CarsAdd
