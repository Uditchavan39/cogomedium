import { useState } from "react";
import Imageinput from "../Components/Imageinput";
import styles from '../styles/signup.module.css';
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
const SignUp=()=>{
    const [imageUrl,setImageUrl]=useState([]);
    const [userobj,setUserobj]=useState({
        username:'',
        email:'',
        password:'',
        profilepic:'',
        about:'',
    });
    
    const navigage=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(JSON.stringify(userobj));
        navigage('/signin')
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
        <input className={styles.inputtext} name="username" type="text" value={userobj.username} onChange={handleChange} placeholder="User Name"/>
        </div>
        <div className={styles.eachelem}>
      
        <input className={styles.inputtext} name="email" type="email" value={userobj.email} onChange={handleChange} placeholder="Email"/>
      </div>
      <div className={styles.eachelem}>
      
        <input className={styles.inputtext} name="password" type="password" value={userobj.password} onChange={handleChange} placeholder="Password"/>
      </div>
      <div className={styles.eachelem}>
        <input className={styles.inputtext} name="about" type="text" value={userobj.about} onChange={handleChange} placeholder="About"/>
      </div>
      
      <div className={styles.signupimg}>
      
        <Imageinput imageUrl={imageUrl} setImageUrl={setImageUrl}/>
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