import {  useNavigate } from 'react-router-dom';
import styles from '../styles/singlepost.module.css'
import UserCard from './user_card/UserCard';
import SignIn from '../Route/SignIn';
import { useState } from 'react';
const SinglePostCard=({post})=>{
    const navigage=useNavigate();
    const handleonclick=()=>{ 
    const comtostr=JSON.stringify(post.Comments)  
     navigage('/viewpostpage',{state:{Title:post.Title,
     post_id: post.post_id,
     Topic : post.Topic,
     FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
     Content:post.Content,
     PublishedDate: post.PublishedDate,
     CommentsCount:post.CommentsCount,
     LikesCount:post.LikesCount,
     ViewCount:post.ViewCount,
     username:post.username,
     Comments:comtostr,
     user_id:post.user_id,
    }});
   const localuser=parseInt(localStorage.getItem('user_id'));
   console.log('clicked',post.user_id,localuser);  
   const currentplan=parseInt(localStorage.getItem('current_plan'));
   const post_view=parseInt(localStorage.getItem('post_view'));
  
   if(post.user_id!==localuser && currentplan>post_view){
        localStorage.setItem('post_view',parseInt(localStorage.getItem('post_view'))+1);
     }
if(currentplan<=post_view && post.user_id!==localuser){
        navigage('/payment',{replace:true});
    }
}

    return(
        <>
        <div className={styles.singlepostsupermain} onClick={handleonclick}>
        <div className={styles.singlepostmain}>
        <div className={styles.textcontent}>
        <div className={styles.singlepostheadingmain}>
        <div className={styles.singlepostuserdate}>
        <UserCard username={post.username}/>
        <h5>{post.PublishedDate}</h5>
        </div>
        <div className={styles.headingsinglepost}>
        <h2>{post.Title}</h2>
        </div>
        </div>
        <div className={styles.contentsingle}>
            <p>
                {post.Content}
            </p>
        </div>
        </div>
        <div className={styles.featuredimage}>
            <img src={post.FeaturedImage} alt=''/>
        </div>
        </div>
        <div className={styles.categorysinglerow}>
          <h5>  {post.Topic}</h5>
          <div className={styles.likecommview}>
          <h5>Like: {post.LikesCount}</h5>
          <h5>Comments: {post.CommentsCount}</h5>
          <h5>Views: {post.ViewCount}</h5>
          </div>
        </div>

        </div>
        </>
    );
};
export default SinglePostCard;