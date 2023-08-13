import {FcLike} from 'react-icons/fc';
import {GrFavorite} from 'react-icons/gr';
import styles from '../../styles/viewpostpage.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostLikes=({post_id,LikesCount})=>{
    const [numlike,Setnumlike]=useState(LikesCount);
    const [LikeState,setLikeState]=useState(false);
   var token=localStorage.getItem('token');
   const likepost= async(formdata)=>{
        axios.post('http://127.0.0.1:3000/like-post',formdata)
        .then((response) => {
          console.log('Response:', response.data,response.status);
            if(response.data.status===200){
               
                Setnumlike(numlike+1);
                alert(response.data.msg);
                console.log(numlike);
            setLikeState(true);
            }
            else if(response.status===400){
                setLikeState(false);
            }
            else{
            }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };
      
      
    const unlikepost= async(formdata)=>{
        axios.post('http://127.0.0.1:3000/unlike-post',formdata)
        .then((response) => {
          console.log('Response:', response.data,response.status);
            if(response.data.status===200){
               if(numlike>0)
                Setnumlike(numlike=>numlike-1);
                setLikeState(false);
                alert(response.data.msg);
              
            }
            else if(response.status===400){
                setLikeState(false);
            }
            else{
                alert(response.data.msg);
            }
        })
        .catch((error) => {
          alert('Error:', error);
        });
      };
      
      const likeit=()=>{
       if(LikeState){
        unlikepost({
          token:token,
          post_id:post_id,
        });
      }
        else{
          likepost({
            token:token,
            post_id:post_id,
          });
        
        setLikeState(!LikeState);
      }
    }
      useEffect(()=>{
        likeit();
      },[]);
      
      return(
        <>
            <div className={styles.likeclass} >
        <h3>{LikeState ?
               <button className={styles.likebtn} onClick={likeit}><FcLike size={30}/></button>
               :<button className={styles.likebtn} onClick={likeit}><GrFavorite size={30}/></button>
        }
        <div className={styles.likebtn}>{numlike}</div></h3>
        </div>
        
        </>
      );
}
export default PostLikes;