import { useState } from "react";
import Navbar from "../Components/Navbars/Navbar";
import {FaPlusCircle} from 'react-icons/fa';
import styles from '../styles/Lists.module.css';
import ShowLists from "../Components/Lists/ShowLists";
import axios from "axios";
import ProfileNavbar from "../Components/Navbars/ProfileNavbar";
const Lists=()=>{
    const [title,setTitle] =useState('');
    const [message,setMessage]=useState('');

    const handleChange=(e)=>{
        setTitle(e.target.value);
    }
    const token= localStorage.getItem('token');
    const callapi= async(formdata)=>{
        axios.post('http://localhost:3000/create-list',formdata)
        .then((response) => {
          console.log('Response lists:', response.data,response.data.status);
            if(response.data.status===200){
                alert(response.data.msg);
            }
            else{
                alert(response.data.msg);
            }
        })
        .catch((error) => {
         alert('Error:', error);
        });
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(title.trim()){
           const obj= {
                token:token,
                list_name:title,
            }
            callapi(obj);
            setTitle('');
    setMessage('');
    }
        else
        setMessage('Enter List Name First');
    }
    return(
    <> 
        <ProfileNavbar/>
    <form onSubmit={handleSubmit} className={styles.formcontainer}>
        <input className={styles.inputtext} type="text" value={title} onChange={handleChange} placeholder="Enter List Name.."/>
        <button className={styles.inputsubmit}><FaPlusCircle/></button>
    </form>
    <span className={styles.submitwarning}>{message}</span>
        <ShowLists/>
    </>
    );
}
export default Lists;