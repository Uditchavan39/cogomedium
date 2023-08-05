import CommentCarditem from "./CommentCarditem";
import SingleCommentCard from "./CommentCarditem";
import UserCard from "./user_card/UserCard";
import styles from '../styles/Commentbox.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
const CommentList=({colist,post_id})=>{
        useEffect(()=>{
         //  callapi();
        },[]);
        // const [comment,setComment]=useState([]);
        // const token= localStorage.getItem('token');
        // const callapi= async()=>{
        //     axios.get('http://127.0.0.1:3000/get-post?token='+token+'&post_id='+post_id)
        //     .then((response) => {
        //       console.log('Response:', response.data,response.data.post.comments);
        //         if(response.data.status===200){
        //             localStorage.setItem('isLoggedIn',true);
        //             comments.map((com)=>{setComment(oldcom=>[...oldcom,response.data.post.comments])});
        //         }
        //         else if(response.status!==200){
                
        //         }
        //         else{
        //         }
        //     })
        //     .catch((error) => {
        //       console.error('Error:', error);
        //     });
        // };

    return (
        <ul className={styles.ulcom}>
            {colist.map((comm,index)=>(<>
                <CommentCarditem key={index} comment={comm.comment} username={comm.username}/>
                </>
            )) }
        </ul>
            );
}
export default CommentList;