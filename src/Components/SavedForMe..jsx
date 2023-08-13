import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import Navbar from "./Navbars/Navbar";
import ProfileNavbar from "./Navbars/ProfileNavbar";
import Header from "./Header";

const SavedForMe=()=>{
    const [aura,setaura]=useState([]);
    var token=localStorage.getItem('token');
    const updateobj=(obj)=>{
        setaura([]);
        obj.map(elem=>{
            setaura(
               aura=>
               [ ...aura,{
                Title:elem.post_details.title,
                post_id: elem.post_details.id,
                Topic : elem.post_details.topics[0].name,
                FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
                Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                PublishedDate:elem.post_details.created_at,
                CommentsCount:elem.post_details.comments_count,
                Comments:[],
                LikesCount:elem.post_details.likes_count,
                ViewCount:elem.post_details.views_count,
                username:'dummy',
                user_id:'dummy',                
            }]
            );       
        });
    };
    var result=[];
    const callapi= async()=>{
                axios.get('http://localhost:3000/get-save-laters?token='+token)
                .then((response) => {
                  console.log('Response:', response.data,response.status);
                    if(response.data.status===200){
                        result=response.data.savelaters.map(({post_details})=>({post_details}));
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
                callapi();
            },[]);
    return(
        <>
            <ProfileNavbar/>
            <Header heading={'Saved For Later'}/>
           <PostList aura={aura}/>
        </>
    );
}
export default SavedForMe;