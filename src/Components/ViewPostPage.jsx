import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from '../styles/viewpostpage.module.css'
import Navbar from "./Navbar";
import UserCard from "./user_card/UserCard";
import Commentbox from "./CommentBox";
import { useEffect, useState } from "react";
import Home from "../Route/Home";
import axios from "axios";
import {FcLike} from 'react-icons/fc';
import {GrFavorite} from 'react-icons/gr';
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
    const del={
      token:token,
      post_id:postobj.post_id
    };
    deletepost(del);
    nav('/');
  }
  const deletepost= async(formdata)=>{
    axios.post('http://127.0.0.1:3000/delete-post',formdata)
    .then((response) => {
      console.log('Response:', response.data,response.status);
        if(response.data.status===200){
            localStorage.setItem('isLoggedIn',true);
          alert('post deleted Successfully');
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
const token=localStorage.getItem('token');

const callapi= async(formdata)=>{
  axios.post('http://127.0.0.1:3000/like-post',formdata)
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

const unlikepost= async(formdata)=>{
  axios.post('http://127.0.0.1:3000/unlike-post',formdata)
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

const [LikeState,setLikeState]=useState(false);
const likeit=(e)=>{
 if(LikeState){
  setPostobj({
    ...postobj,
    LikesCount:postobj.LikesCount-1,
  })
  unlikepost({
    token:token,
    post_id:postobj.post_id,
  });
}
  else{
    setPostobj({
      ...postobj,
      LikesCount:postobj.LikesCount+1,
    })
    callapi({
      token:token,
      post_id:postobj.post_id,
    });
  }
  setLikeState(!LikeState);
 
}

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
        <div className={styles.userclass}>
        <UserCard username={postobj.username}/>
        <button>Follow</button>
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
        <div className={styles.likeclass} >
        <h3>{LikeState ?
               <button className={styles.likebtn} onClick={likeit}><FcLike size={30}/></button>
               :<button className={styles.likebtn} onClick={likeit}><GrFavorite size={30}/></button>
        }
        <div className={styles.likebtn}>{postobj.LikesCount}</div></h3>
        </div>
        <div className={styles.commentclass}>
        </div>
        <div className={styles.viewclass}>
       <h3>View :{postobj.ViewCount}</h3>
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
        { localStorage.getItem('isLoggedIn')
  ?
        <div className={styles.editdeletepost}>
        <div className={styles.editpost}>
          <button onClick={handleEditing}>Edit Post</button>
          </div>
          <div className={styles.deletepost}>
          <button onClick={handleDeleting}>Delete  Post</button>
          </div>
          </div>
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