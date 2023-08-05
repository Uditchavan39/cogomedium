import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import PostList from "../Components/PostList";
import styles from '../styles/profile.module.css';
import axios from "axios";
const Profile=()=>{
    const profileobj={
        username:localStorage.getItem('useremail'),
        aboutme: 'About Me',
    };
    const token= localStorage.getItem('token');
    const callapi= async(formdata)=>{
        axios.get('http://127.0.0.1:3000/view-my-posts?token='+token)
        .then((response) => {
          console.log('Response:', response.data,response.data.status);
            if(response.data.status===200){
                localStorage.setItem('isLoggedIn',true);
            }
            else if(response.status!==200){
            
            }
            else{
            }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    useEffect(()=>{
        callapi();
    },[]);

    return(
        <>
        <Navbar />
        <div className={styles.heading}>
        <h1>
           {profileobj.username}
        </h1>
        <h5>{profileobj.aboutme}</h5>
        </div>
        <div className={styles.mypost}>
            <h2>
               My Posts
            </h2>
        </div>
        <div className={styles.mypostlist}>
            <PostList username={profileobj.username}/>
        </div>
        </>
    );
}
export default Profile;