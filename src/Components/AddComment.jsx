import { useState } from "react";
import UserCard from "./user_card/UserCard";
import styles from '../styles/Commentbox.module.css'
import CommentUserCard from "./user_card/CommentUserCard";
import NavbarUserCard from "./user_card/NavbarUserCard";
import axios from "axios";
const AddComment=({post_id})=>{
    const [comment, setComment]=useState('');
    const username=localStorage.getItem('username')!==null;
    const token=localStorage.getItem('token');
    const callapi= async(formdata)=>{
        axios.post('http://127.0.0.1:3000/add-comment',formdata)
        .then((response) => {
          console.log('Response:', response.data,response.status);
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
      
    const handlechange=(e)=>{
        setComment(e.target.value);
    };
    const handlesubmit=(e)=>{
        console.log(JSON.stringify(comment));
        callapi({
            token:token,
            post_id:post_id,
            comment_description:comment
        });
        setComment('');
    }
        return(
           username ? <>
            <div className={styles.commentmainbox}>
                <div className={styles.usercard}>
                <NavbarUserCard/></div>
                <textarea rows={5} value={comment} name="comment" onChange={handlechange} placeholder="What are your Thoughts..."/>
            </div>
            <div className={styles.postbtn}>
            <button onClick={handlesubmit}>Post</button> 
            </div>
            </>
            :<></>
        );
}
export default AddComment;