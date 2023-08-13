import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PostList from "../PostList";
import ProfileNavbar from "../Navbars/ProfileNavbar";
import Header from "../Header";
import styles from '../../styles/Lists.module.css'
const ListPostshow=()=>{
    const location=useLocation();
    const id=location.state.list_id;
    const listname=location.state.list_name;
    const [aura,setaura]=useState([]);
    const [userid,setuserid]=useState(0);
    const updateobj=(obj)=>{
        setaura([]);
        obj.map(elem=>{
            setaura(
               aura=>
               [ ...aura,{
                Title:elem.postDetails.title,
                post_id: elem.id,
                Topic : elem.postDetails.topics[0].name,
                FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
                Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                PublishedDate:elem.postDetails.created_at,
                CommentsCount:elem.postDetails.comments_count,
                Comments:[],
                LikesCount:elem.postDetails.likes_count,
                ViewCount:elem.postDetails.views_count,
                username:'dummy',
                user_id:'dummy',                
            }]
            );       
        });
    };
    const token= localStorage.getItem('token');
    var result=[];
    const callapi= async(formdata)=>{
        console.log(formdata);
                axios.get('http://localhost:3000/get-list?token='+token+'&list_id='+id)
                .then((response) => {
                  console.log('Response:', response.data,response.status);
                    if(response.data.status===200){
                        result=response.data.list.posts.map(({postDetails})=>({postDetails}));
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
            const sharelist= async(formdata)=>{
                console.log(formdata);
                        axios.post('http://localhost:3000/share-list',formdata)
                        .then((response) => {
                          console.log('Response:', response.data,response.status);
                            if(response.data.status===200){
                                alert(response.data.msg);
                            }
                            else{
                                alert(response.data.msg);
                            }
                        })
                        .catch((error) => {
                          alert('Error: '+error);
                        });
                    };
        const handlechange=(e)=>{
            e.preventDefault();
            console.log(userid);
           const formdata={
            token:token,
            list_id:id,
            shared_user_id:parseInt(userid),
           }
            sharelist(formdata);
        };
    useEffect(()=>{
        callapi();
        },[]);
    return(
        <>
        <ProfileNavbar/>
        <Header heading={listname} />
        <form onSubmit={handlechange} className={styles.formcontainer}>
        <input className={styles.inputtext} type="number" required  onChange={(e)=>{setuserid(e.target.value)}} placeholder='user id for sharing'/>
        <button className={styles.inputsubmit}>Share</button>
    </form>
    
        <PostList aura={aura}/>
        </>
    );
}
export default ListPostshow;