import React, { useState , useEffect } from 'react';
import { useContext } from 'react';
import { BioContext } from '../../context';
import { useNavigate,Link } from 'react-router-dom';


const Login = ({theme}) => {
  const [otpSent, setOtpSent] = useState(false);  // State to track if OTP is sent
  const [otp, setOtp] = useState("");  // State to store entered OTP

    


  const [state,setState] = useState(false)
  useEffect(()=>{
      if(theme==="dark"){
          setState(true)
      }
      else{
          setState(false)
      }
  },[theme])


  const navigate = useNavigate()

  // Function to handle login and send OTP
  const handleLogin = () => {
    setOtpSent(true);
  };

  // Function to handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Function to resend OTP
  const handleResendOtp = () => {
    console.log("Resending OTP...");
  };

  const handlelogOut = () => {
    navigate("/logout")
  }

  const {loginConfirmState,loginName,loginEmail,loginPhone} = useContext(BioContext);

  return (
    <div>
   
   {!loginConfirmState ?

      <div className={`min-h-screen flex items-center justify-center p-4 ${state ? 'bg-blck' : 'bg-transparent'}`}>
        <div className={`bg-white p-6 rounded-lg shadow-md max-w-sm w-full`}>
          <h1 className="text-xl font-bold text-gray-900 mb-4">Create Your Profile</h1>

          {/* Move Login Button to the top */}
       

          {/* Conditionally render Resend OTP button if OTP is sent */}
          
          {/* Name Input */}
          <div className="mb-4">
            <label className="mr-6 text-gray-700 text-md font-semibold mb-2">Name</label>
            <input className="text-gray-800 px-10 py-5 bg-buttonColor" placeholder='Name' />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label className="mr-6 text-gray-700 text-md font-semibold mb-2">Phone</label>
            <input className="text-gray-800 px-10 py-5 bg-buttonColor" placeholder='Phone' />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="mr-8 text-gray-700 text-md font-semibold mb-2">Email</label>
            <input className="text-gray-800 px-10 py-5 bg-buttonColor" placeholder='Email' />
          </div>

          {/* Conditionally render OTP input if OTP is sent */}
          {otpSent && (
            <div className="mb-4">
              <label className="mr-10 text-gray-700 text-md font-semibold mb-2">OTP</label>
              <input
                className="text-gray-800 px-10 py-3 bg-buttonColor"
                placeholder='Enter OTP'
                value={otp}
                onChange={handleOtpChange}  // Handle OTP input change
              />
            </div>
          )}

{otpSent && (
            <div className='mb-4'>
              <button 
                onClick={handleResendOtp} 
                className='my-4 py-4 px-9 bg-buttonColor rounded text-black font-bold'>
                Resend OTP
              </button>
            </div>
          )}


<div className='mb-4'>
            <button 
              onClick={handleLogin} 
              className='my-4 py-4 px-9 bg-buttonColor rounded text-black font-bold'>
              LOGIN
            </button>
          </div>

        </div>
      </div>

:

  <div className={`min-h-screen flex items-center justify-center p-4  ${state ? 'bg-blck' : 'bg-transparent'}`}>
  <div className={`bg-white p-6 rounded-lg shadow-md max-w-sm w-full  ${state ? 'bg-blck' : 'bg-transparent'} `}>
    <h1 className="text-xl font-bold text-gray-900 mb-4">Your Profile</h1>

    {/* Move Login Button to the top */}
 

    {/* Conditionally render Resend OTP button if OTP is sent */}
    
    

    {/* Name Input */}
    <div className="mb-4 ">
      <label className="mr-6 text-gray-700 text-md font-semibold mb-2">Profile Name : </label>
      <p  className="text-gray-800 px-10 py-5 bg-buttonColor" placeholder='Name' >{loginName}</p>
    </div>

    {/* Phone Input */}
    <div className="mb-4">
      <label className="mr-6 text-gray-700 text-md font-semibold mb-2">Phone : </label>
      <p  className="text-gray-800 px-10 py-5 bg-buttonColor" placeholder='Name' >{loginEmail}</p>
    </div>

    {/* Email Input */}
    <div className="mb-4">
      <label className="mr-8 text-gray-700 text-md font-semibold mb-2">Email : </label>
      <p  className="text-gray-800 px-10 py-5 bg-buttonColor" placeholder='Name' >{loginPhone}</p>
    </div>
    <div className='mb-6 mt-12'>
      <Link 
        to={"/add-cars"} 
        disabled={loginConfirmState}
        className='my-4 ml-1 py-5 px-[35px] bg-buttonColor rounded text-black font-bold hover:bg-gray-300'>
        ADD CARS FOR SELL OR BOOKING
      </Link>
    </div>
    {/* Conditionally render OTP input if OTP is sent */}
    


<div className='mb-4'>
      <button 
        onClick={handlelogOut} 
        
        className={`my-4 py-4 px-9 bg-buttonColor rounded text-black font-bold hover:bg-gray-300`}>
        LOGOUT
      </button>
    </div>

  </div>
</div>
  


}

</div>
  );       
};

export default Login;
