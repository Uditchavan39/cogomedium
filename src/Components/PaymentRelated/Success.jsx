import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success=()=>{
   const navigate=useNavigate();
    const handlechange=()=>{
    const queryParameters = new URLSearchParams(window.location.search)
    const currentplan=parseInt(queryParameters.get('currentplan'));
    if(currentplan===3){
        localStorage.setItem('current_plan',3);
    }
   else if(currentplan===5)
   {
    localStorage.setItem('current_plan',5);
    
   }else if (currentplan===10){
    localStorage.setItem('current_plan',10);
   }
   navigate('/',{replace:true});
};
   useEffect(()=>{
    handlechange();
   },[]);
    return(
        <>
            Payment Success 
        </>
    );
}
export default Success;