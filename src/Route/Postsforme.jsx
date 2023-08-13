import { useState } from "react";
import TopPost from "../Components/Postsforme/TopPost";
import Recommended from "../Components/Postsforme/Recommended";
import axios from "axios";
import ProfileNavbar from "../Components/Navbars/ProfileNavbar";
import styles from "../styles/postsforme.module.css"
const Postsforme=()=>{
    const[view,setView]=useState(true);
    const toppost=()=>{
        setView(true);
        toppostapi();
};

const recommendedpost=()=>{
    setView(false);
    Recommendedpostapi();
};

const[aura,setaura]=useState([]);
const updateobj=(obj)=>{
    setaura([]);
    obj.map(elem=>{
        setaura(
           aura=>
           [ ...aura,{
            Title:elem.title,
            post_id: elem.id,
            Topic : elem.topics[0].name,
            FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            PublishedDate:elem.created_at,
            CommentsCount:elem.comments_count,
            Comments:[],
            LikesCount:elem.likes_count,
            ViewCount:elem.views_count,
            username:'dummy',
            user_id:'dummy',                
        }]
        );       
    });
};
const token= localStorage.getItem('token');
var result=[];
const toppostapi= async()=>{
            axios.get('http://localhost:3000/get-top-posts?token='+token)
            .then((response) => {
              console.log('Response:', response.data,response.status);
                if(response.data.status===200){
                    result=response.data.posts.map(({id,title,created_at,topics,comments_count,views_count,likes_count,user_Detils,content})=>({id,title,created_at,topics,comments_count,views_count,likes_count,user_Detils,content}));
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

        const Recommendedpostapi= async()=>{
            axios.get('http://localhost:3000/get-recommendations?token='+token)
            .then((response) => {
              console.log('Response:', response.data,response.status);
                if(response.data.status===200){
                    result=response.data.recommendations.map(({id,title,created_at,topics,comments_count,views_count,likes_count,user_Detils,content})=>({id,title,created_at,topics,comments_count,views_count,likes_count,user_Detils,content}));
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
              alert('Error: in postforme: '+error);
            });
        };


    return(
    <>
    <ProfileNavbar/>
    <div className={styles.maincont}>
    <button onClick={toppost} className={styles.btn}>
        Top Posts
    </button>
    <button onClick={recommendedpost} className={styles.btn}>
        Recommended Post
    </button>
    </div>
    {
        view ?
        <TopPost aura={aura}/>
        :
        <Recommended aura={aura}/>
    }
    </>
);
}
export default Postsforme;