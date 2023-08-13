import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbars/Navbar";
import styles from '../styles/profile.module.css';
import Header from "../Components/Header";
const OtherProfile=()=>{
    const location=useLocation();
    const user_id=location.state.user_id;
    const [profileobj,setProfileobj]=useState({
        user_id:user_id,
        aboutme:'Dummy',
        email:'dummy',
        username:'dummy',
        profile_pic_url:'dummy',
    });
    var token=localStorage.getItem('token');
    const updateobj=(obj)=>{
            setProfileobj(
               {
                user_id:obj.id,
                aboutme:obj.about,
                email:obj.email,
                username:obj.username,
                profile_pic_url:obj.profile_pic_url,
            });  
    };
    const callapi= async()=>{
        axios.get('http://localhost:3000/get-profile?token='+token+"&user_id="+user_id)
        .then((response) => {
          console.log('Response:', response.data,response.data.status);
          if(response.data.status===200){
            updateobj(response.data.profile);      
            }
            else{
            }
        })
        .catch((error) => {
         alert('Error:', error);
        });
    };
   
    useEffect(()=>{
        callapi();
    },[]);
   
    return(
        <>
        <Navbar/>
        <div className={styles.imgsize}>
        <img className={styles.img} alt="Avatar" src={profileobj.profile_pic_url}/>
        </div>
        <div className={styles.postsformetotal}>
        <div className={styles.heading}>
        <h1>
           {profileobj.username}
        </h1>
        <h5>{profileobj.aboutme}</h5>
        </div>
        </div>
        <div className={styles.mypost}>
        <Header heading={'Contact Me'}/>
        <Header heading={profileobj.email}/>
       </div>
        <div className={styles.mypostlist}>
        </div>
        </>
    );
}
export default OtherProfile;