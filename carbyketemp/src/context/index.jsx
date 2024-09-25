import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const BioContext = createContext();

export const BioProvider = ({ children }) => {



  const [loginConfirmState,setLoginConfirmState] = useState(true);
  const [loginName,setLoginName] = useState('')
  const [loginPhone,setLoginPhone] = useState('')
  const [loginEmail,setLoginEmail] = useState('') 

const loginConfirm = async() => {
const user =   await axios.get("/loginConfirm");
if(user.data.message==="success"){
setLoginConfirmState(true)
setLoginName(user.data.name);
setLoginPhone(userdata.phone)
setLoginEmail(user.data.email);
}
}  
useEffect(()=>{
  loginConfirm()
},[])

  const [val,setVal] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    brand: '',
    booking: '',
    sell: '',
    age: '',
    run: '',
    model: '',
    city: '',
    price: '',
    minPrice: 0,   // Add these
    maxPrice: 10000,
  });
  
  

   const [login,setLogin] = useState(true);

const value = {filters,setFilters,login,setLogin,val,setVal,loginConfirmState,setLoginConfirmState,loginName,loginEmail,loginPhone};

  return <BioContext.Provider value={value}>{children}</BioContext.Provider>;
};
