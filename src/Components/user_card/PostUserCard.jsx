import { useEffect, useState } from 'react';
import styles from '../../styles/usercard.module.css'
import axios from 'axios';
import OtherProfile from '../../Route/OtherProfile';
import { useNavigate } from 'react-router-dom';
const PostUserCard=({username,user_id})=>{
   console.log(user_id);
    const [followstatus,setFollowstatus]=useState(false);
    const followuser= async(formdata)=>{
        axios.post('http://127.0.0.1:3000/follow-user', formdata)
        .then((response) => {
          console.log('Response:', response.data,response.status);
            if(response.data.status===200){
                setFollowstatus(true);
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
    const unfollowuser= async(formdata)=>{
        axios.post('http://127.0.0.1:3000/unfollow-user', formdata)
        .then((response) => {
          console.log('Response:', response.data,response.status);
            if(response.data.status===200){
                setFollowstatus(false);
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
    var token=localStorage.getItem('token');
    const callapi=()=>{
        const obj={
            token:token,
            author_id:user_id,
        }
        if(followstatus)
        unfollowuser(obj);
        else
        followuser(obj);

    };
    const navigate=useNavigate();
const OtherProfile=()=>{
    navigate('/otherprofile',{state:{
        user_id:user_id,
    }});
};
const [profileobj,setProfileobj]=useState({
    user_id:user_id,
    aboutme:'Dummy',
    email:'dummy',
    username:'dummy',
    profile_pic_url:'dummy',
});
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
        <div className={styles.usernameandimg}>
        <div className={styles.userdiv} onClick={OtherProfile}>
        <img src={profileobj.profile_pic_url} alt="Avatar"/>
    </div>
    <div className={styles.username} onClick={OtherProfile}>
  <h3> {profileobj.username}</h3> 
    </div>
       {followstatus ?
        <button className={styles.follow} onClick={callapi}>
            UnFollow
        </button>
        :
        <button className={styles.follow} onClick={callapi}>
            Follow
        </button>
        }
        </div>
    
    </>
 );
}
export default PostUserCard;