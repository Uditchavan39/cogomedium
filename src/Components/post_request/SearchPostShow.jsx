import axios from "axios";
import PostList from "../PostList";
import { useEffect, useState } from "react";

const SearchPostShow=({searchit})=>{
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
                username:'elem.user_id',
            }]
            );       
        });
    };
    const token= localStorage.getItem('token');
    var result=[];
    const callapi= async()=>{
                axios.get('http://localhost:3000/search-posts?token='+token+'&keyword='+searchit)
                .then((response) => {
                  console.log('Response: detected', response.data,response.status);
                    if(response.data.status===200){
                        result=response.data.postsList.map(({id,title,created_at,comments_count,views_count,likes_count,user_id})=>({id,title,created_at,comments_count,views_count,likes_count,user_id}));
                        console.log(result);
                        updateobj(result);
                    }
                    else if(response.status!==200){
                        alert('Failed To Fetch Data!!!\n response: '+response.status);
                    }
                    else{
                    }
                })
                .catch((error) => {
                  alert('Error: '+error);
                });
            };
    
        
    useEffect(()=>{
        if(searchit.trim())
        callapi();
    },[searchit]);
        return(
            <>
               <PostList aura={aura}/> 
            </>
        );
}
export default SearchPostShow;