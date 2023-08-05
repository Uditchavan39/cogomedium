import { useEffect, useState } from "react";
import SinglePostCard from "./SinglePostCard";
import axios from "axios";
import { redirect } from "react-router-dom";

const PostList=({username})=>{
    const postlist=[
        {
        Title:'New First Post',
        post_id: 1,
        Topic : 'Reacting',
        FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        PublishedDate:'28/05/2023',
        CommentsCount:24,
        LikesCount:36,
        ViewCount:985,
        username:'Skippy',
        Comments:[{comment:'How you Doin?',username:'Joey Tribbiani'},{comment:'joey',username:'skippy'},{comment:'good!!!',username:'AJ Warrior'},],
        isLoggedIn:true,
    },{
        Title:'Look at my new Game',
        post_id: 2,
        Topic : 'Gaming',
        FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        PublishedDate:'22/04/2023',
        CommentsCount:25,
        LikesCount:32,
        ViewCount:9856,
        Comments:[{comment:'dammn!!!',username:'udit chavan'},{comment:'bad',username:'AJ Warrior'},{comment:'how are you?',username:'skippy'}],
        username:'AJ Warrior',
        isLoggedIn:true,
    },{
        Title:'hello there',
        post_id: 3,
        Topic : 'technology',
        FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        PublishedDate:'28/05/2023',
        CommentsCount:22,
        Comments:[{comment:'nice one',username:'udit chavan'},{comment:'good!!!',username:'AJ Warrior'},{comment:'how are you',username:'skippy'}],
        LikesCount:31,
        ViewCount:56,
        username:'Udit Chavan',
        isLoggedIn:true,
    }
];
const [aura,setaura]=useState([]);
  
const updateobj=(obj)=>{
    obj.map(elem=>{
        setaura(
           aura=>
           [ ...aura,{
            Title:elem.title,
            post_id: elem.id,
            Topic : 'Topic',
            FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            PublishedDate:elem.created_at,
            CommentsCount:elem.comments_count,
            Comments:[{comment:'nice one',username:'udit chavan'},{comment:'good!!!',username:'AJ Warrior'},{comment:'how are you',username:'skippy'}],
            LikesCount:elem.likes_count,
            ViewCount:elem.views_count,
            username:elem.user_Detils.email,
            isLoggedIn:true,
        }]
        );       
    });
    console.log('obj:'+JSON.stringify(aura));
};
const token= localStorage.getItem('token');
var result=[];
const callapi= async()=>{
            axios.get('http://127.0.0.1:3000/view-posts?token='+token)
            .then((response) => {
              console.log('Response:', response.data,response.status);
                if(response.data.status===200){
                    result=response.data.posts.map(({id,title,created_at,topics,comments_count,views_count,likes_count,user_Detils})=>({id,title,created_at,topics,comments_count,views_count,likes_count,user_Detils}));
                    console.log(result);
                    localStorage.setItem('isLoggedIn',true);
                    updateobj(result);
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
    localStorage.setItem('postlist',JSON.stringify(postlist));
    callapi();
},[]);
 return (
    <ul>
    {aura.map((post)=>(<li key={post.post_id}>
       {username===undefined ?
        <SinglePostCard post={post} key={post.post_id} />
       : username===post.username ?    <SinglePostCard post={post} key={post.post_id} />
     :<></>
       }
        </li>
    ))}
</ul>

        );
};
export default PostList;