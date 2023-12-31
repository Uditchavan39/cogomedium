import { useEffect, useState } from "react";
import Navbar from "../Components/Navbars/Navbar";
import PostList from "../Components/PostList";
import styles from '../styles/profile.module.css';
import axios from "axios";
import ProfilePost from "../Components/post_request/ProfilePost";
import { useNavigate } from "react-router-dom";
import ProfileNavbar from "../Components/Navbars/ProfileNavbar";
import Header from "../Components/Header";
const Profile=()=>{
    const [profileobj,setProfileobj]=useState({
        user_id:localStorage.getItem('user_id'),
        aboutme:'Dummy',
        email:'dummy',
        username:'dummy',
        profile_pic_url:'dummy',
    });
    const token= localStorage.getItem('token');
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
    const profilefetch= async()=>{
        axios.get('http://localhost:3000/get-profile?token='+token+"&user_id="+profileobj.user_id)
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
        profilefetch();
    },[]);
   
    return(
        <>
        <ProfileNavbar />
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
        <Header heading={'My Post'}/>
       </div>
        <div className={styles.mypostlist}>
            <ProfilePost/>
        </div>
        </>
    );
}
export default Profile;