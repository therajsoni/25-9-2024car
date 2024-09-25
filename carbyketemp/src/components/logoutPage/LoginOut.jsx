import React , {useEffect, useState} from 'react'
import { BioContext } from '../../context';
import { useContext } from 'react';

const LogOut = ({theme}) => {
 
  const {loginConfirmState,setLoginConfirmState} = useContext(BioContext)

  // States for form inputs
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');


 const handleToLogout = () => {
  setLoginConfirmState(true)
 }

 useEffect(()=>{
  handleToLogout()
 },[loginConfirmState])


 const [state,setState] = useState(false)
 useEffect(()=>{
     if(theme==="dark"){
         setState(true)
     }
     else{
         setState(false)
     }
 },[theme])
 

 return (
  <div>


  <div className={`min-h-screen flex items-center justify-center p-4 ${state ? 'bg-black' : 'bg-transparent'}`}>
 <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
   <h1 className="text-xl font-bold text-gray-900 mb-4">Logout</h1>
  
<div  className="mb-4 text-gray-700 text-md font-semibold">Submit Your Details for Logout</div>
   <div className="mb-4">
     <label className="mr-3 text-gray-700 text-md font-semibold mb-2">Phone</label>
     <input className="text-gray-800 px-12 py-5 bg-buttonColor border-none" placeholder='Phone'/>
   </div>
   <div className="mb-4">
     <label className="mr-5 text-gray-700 text-md font-semibold mb-2">Email</label>
     <input className="text-gray-800 px-[47px] py-5 bg-buttonColor border-none" placeholder='Email'/>
   </div>
   <div className='mb-4'>
   <button className='my-4 py-4 px-9 bg-buttonColor rounded text-black text-bolder' onClick={handleToLogout} >LOGOUT</button>   
   </div>
 </div>
</div>
</div> 
  )
}

export default LogOut
