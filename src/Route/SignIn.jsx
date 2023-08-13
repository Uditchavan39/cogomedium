import { useEffect, useState } from 'react';
import styles from '../styles/signup.module.css';
import Header from '../Components/Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn=()=>{
  useEffect(()=>{
    localStorage.removeItem('token');
  });
    const [userobj,setUserobj]=useState({
        email:'',
        password:'',
     });
    const handleChange=(e)=>{
        setUserobj({
            ...userobj,
            [e.target.name]:e.target.value
        });
    };
    const navigage=useNavigate();
const callapi= async(formdata)=>{
    axios.post('http://127.0.0.1:3000/login', formdata)
    .then((response) => {
      console.log('Response:', response.data,response.status);
        if(response.data.status===200){
            localStorage.setItem('token',response.data.userDetails.token);
            localStorage.setItem('username',response.data.userDetails.email);
            localStorage.setItem('user_id',response.data.userDetails.id);
            
            console.log(localStorage.getItem('token'));
            navigage('/');
        }
        else if(response.data.status===404){
          setError(response.data.msg);
        }
        else if(response.status!==200){
            setError('User does not exist\n');
            navigage('/signup');
        }else{
            }
    })
    .catch((error) => {
      console.error('Error:', error);
      setError(error.msg);
    });
};
    const [error,setError]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await callapi(userobj);
      if(localStorage.getItem('token')!==null){
        navigage('/');
      }
        console.log(JSON.stringify(userobj));
    };
    return(
        <>
        <Header heading={'LogIn'}/>
          <form onSubmit={handleSubmit} className={styles.formcontainer}>
        <div className={styles.signupstyle}>
      <div className={styles.eachelem}>
        <input className={styles.inputtext} name='email' required type="email" value={userobj.email} onChange={handleChange} placeholder="Email"/>
        </div>
        <div className={styles.eachelem}>
      
        <input className={styles.inputtext} name='password' required type="password" value={userobj.password} onChange={handleChange} placeholder="Password"/>
      </div>
      
      <div className={styles.eachelem}>
      
        <button>SignIn</button>
      </div>
      <div className={styles.warning}>
        <p className={styles.errormsg} name='error' type="text" value={error} onChange={handleChange}>{error} <Link to={'/signup'}>SignUp Here</Link></p>
      
      </div>
      
        </div>
      
        </form>
        </>
    );
}
export default SignIn;