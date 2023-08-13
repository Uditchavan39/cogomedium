import { useState } from "react";
import Imageinput from "../Components/Imageinput";
import styles from '../styles/signup.module.css';
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp=()=>{
    const [imageUrl,setImageUrl]=useState([]);
    const [userobj,setUserobj]=useState({
        email:'',
        password:'',
    });
    const callapi= async(formdata)=>{
      axios.post('http://127.0.0.1:3000/sign-up',formdata)
      .then((response) => {
        console.log('Response:', response.data,response.data.status);
          if(response.data.status===200){
            alert('sign up successfull !!!');
            navigage('/signin')
 
          }
          else if(response.status!==200){
            alert('Sign Up failed Retry!!!');
          }
          else{
            alert('Sign Up failed Retry!!!');
          }
      })
      .catch((error) => {
        alert('Error: '+error);
      });
  };

    const navigage=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        console.log(JSON.stringify(userobj));

       callapi(userobj);
    }
    const handleChange=(e)=>{  
      setUserobj({
            ...userobj,
            [e.target.name]:e.target.value
        });
 
    }
    return(
     <>
       <Header heading={'SignUp'}/>
        <form onSubmit={handleSubmit} className={styles.formcontainer}>
        <div className={styles.signupstyle}>
        <div className={styles.eachelem}>
      
        <input className={styles.inputtext} required name="email" type="email" value={userobj.email} onChange={handleChange} placeholder="Email"/>
      </div>
      <div className={styles.eachelem}>
      
        <input className={styles.inputtext} required name="password" type="password" value={userobj.password} onChange={handleChange} placeholder="Password"/>
      </div>  
      <div className={styles.eachelem}>
      
        <button className="input-submit">Submit</button>
      </div>
        <Link to='/signin' className={styles.eachelem}>
      Already have account?
      </Link>
        </div>
        
        </form>
    </>
    );
}
export default SignUp;