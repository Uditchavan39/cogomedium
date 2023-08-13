import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from '../styles/viewpostpage.module.css'
import Navbar from "./Navbars/Navbar";
import UserCard from "./user_card/UserCard";
import Commentbox from "./CommentBox";
import { useEffect, useState } from "react";
import Home from "../Route/Home";
import axios from "axios";

import Publish from "./Publish";
import PostUserCard from "./user_card/PostUserCard";
import PostLikes from "./Likes/PostLikes";
import AddToList from "./Lists/AddToList";
const ViewPostPage=()=>{
  const location=useLocation();
  
  const [postobj,setPostobj]=useState({
    title:location.state.Title,
    topic:location.state.Topic,
    content:location.state.Content,
    FeaturedImage:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    PublishedDate:location.state.PublishedDate,
    CommentsCount:location.state.CommentsCount,
    LikesCount:location.state.LikesCount,
    ViewCount:location.state.ViewCount+1,
    username:location.state.username,
    Comments: location.state.Comments,
    post_id:location.state.post_id,
    user_id:location.state.user_id,
  });
  const [editing,setEditing] = useState(false);
  const updatebackend=(postobj)=>{
    console.log('postobj.Comments');
  };
  let viewMode ={};
  let editMode ={};
  if(editing){
    viewMode.display='none';
  }else{
    editMode.display='none';
  }
  const handleEditing = () =>{
    setEditing(true);
  }
  const nav=useNavigate();
  
  const handleDeleting = () =>{
    console.log('delete post');
    updatebackend(postobj);
    deletepost();
    nav('/');
  }
  const deletepost= async(formdata)=>{
    console.log(formdata);
    axios.delete('http://localhost:3000/delete-post?token='+token+"&post_id="+parseInt(postobj.post_id))
    .then((response) => {
      console.log('Response:', response.data,response.status);
        if(response.data.status===200){
          alert('post deleted Successfully');
          }
        else{
          alert(response.data.msg);
        }
    })
    .catch((error) => {
      alert('Error:', error);
    });
  };
  const saveforlaterapi= async(formdata)=>{
    axios.post('http://localhost:3000/add-to-save-laters',formdata)
    .then((response) => {
      console.log('Response:', response.data,response.status);
        if(response.data.status===200){
          alert('post saved for later... ');
          }
        else{
          alert(response.data.msg);
        }
    })
    .catch((error) => {
      alert('Error:', error);
    });
  };
  const saveforlater=()=>{
    const obj={
      token:token,
      post_id:postobj.post_id,
    }
      saveforlaterapi(obj);
  };
  const handleUpdatedDone= (event)=>{
    if(event.key==='Enter'){
    setEditing(false);
    updatebackend(postobj);
}
};
const handlechange=(e)=>{
      setPostobj({
        ...postobj,
        [e.target.name]:e.target.value
      })
};

var token=localStorage.getItem('token');
const [reading_time,setreadingtime]=useState(0);
useEffect(() => {
  const interval = setInterval(() => setreadingtime(reading_time=>reading_time+1), 1000);
  return () => {
    clearInterval(interval);
  };
}, []);
return(
        <>
        <Navbar />
      <div className={styles.maincont}>
       <div className={styles.formcontainer}>
        <div className={styles.Titleclass} style={viewMode}>
        <h1>{postobj.title}</h1>
        </div>
        <input type='text'
        style={editMode}
        value={postobj.title}
        className={styles.textInput}
        onKeyDown={handleUpdatedDone}
        name="title"
        onChange={handlechange}
        placeholder="Enter Title Here"
        />
        <div className={styles.userclass} >
        <PostUserCard username={postobj.username} user_id={postobj.user_id}/>
        </div>
        <div className={styles.topicdate}>
        <div className={styles.topicclass} style={viewMode}>
          <h3> {postobj.topic}</h3>
        </div>
        <input type='text'
        style={editMode}
        value={postobj.topic}
        name="topic"
        className={styles.textInput}
        onKeyDown={handleUpdatedDone}
        onChange={handlechange}
        placeholder="Enter Topic Here"
        />
        <div className="dateclass">
        <h3>
      {postobj.PublishedDate}</h3>
        </div>

        </div>
        <div className={styles.likecommentview}>
        <PostLikes post_id={postobj.post_id} LikesCount={postobj.LikesCount}/>
        <div className={styles.viewclass}>
       <h3>View :{postobj.ViewCount}</h3>
        <h3>Reading Time: {reading_time}</h3>
        </div>
        </div>
        <div className={styles.imageclass}>
        <img src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" alt="Avatar"/>
        </div>
        <div className={styles.contentclass} style={viewMode}>
        <h4>{postobj.content}</h4>
        </div>
        <input type='text'
        style={editMode}
        value={postobj.content}
        name="content"
        className={styles.textInput}
        onKeyDown={handleUpdatedDone}
        onChange={handlechange}
        placeholder="Enter Content Here"
        />
        <div className={styles.editpost}>
          <button onClick={saveforlater}>Save For Later</button>
          <AddToList post_id={postobj.post_id}/>
          </div>
          
        { localStorage.getItem('username')===postobj.username
  ?<>
        <div className={styles.editdeletepost}>
        <div className={styles.editpost}>
          <button onClick={handleEditing}>Edit Post</button>
          </div>
          <div className={styles.deletepost}>
          <button onClick={handleDeleting}>Delete  Post</button>
          </div>
          </div>
          <Publish post_id={location.state.post_id}/>
          </>
          :<></>
        }
       </div>
       <div className={styles.formcontainercomment}>
       <Commentbox colist={postobj.Comments} post_id={postobj.post_id}/>    
       </div>
      </div>
        </>
    );
}
export default ViewPostPage;