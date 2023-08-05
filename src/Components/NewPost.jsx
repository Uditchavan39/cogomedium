import { useState } from "react";
import Navbar from "./Navbar";

import styles from '../styles/Newpost.module.css'
import Imageinput from "./Imageinput";
import Header from "./Header";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SignIn from "../Route/SignIn";
import axios from "axios";
 const NewPost=()=>{
    const obj={
        isLoggedIn:localStorage.getItem('token')
       }
      
   const navigate=useNavigate();

    const sendtobackend=()=>{
    const postobjectsubmitted=[
        {
        Title:postobj.title,
        Topic : postobj.topic,
        FeaturedImage:imageUrl,
        Content:postobj.content,
        PublishedDate:new Date(),
        CommentsCount:0,          
        Comments:[{comment:'nice one',username:'udit chavan'},{comment:'good!!!',username:'AJ Warrior'},{comment:'how are you',username:'skippy'}],
        LikesCount:1,
        ViewCount:2,
        username:'Udit Chavan',
        isLoggedIn:true,
        
    }];
    callapi();
      localStorage.setItem('postsaved',JSON.stringify(postobjectsubmitted))
    console.log(JSON.stringify(postobjectsubmitted));
}
const callapi= async()=>{
    const poobj={
        token: localStorage.getItem('token'),
        title: postobj.title,
        featured_image: imageUrl,
        content: postobj.content,
        topics: [postobj.topic],
    }
    axios.post('http://127.0.0.1:3000/create-post', poobj)
    .then((response) => {
      console.log('Response:', response.data,response.status);
        if(response.data.status===200){
            localStorage.setItem('isLoggedIn',true);
            alert(response.data.msg);
            navigate('/profile');
 
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

    const handlesubmit=()=>{
        if(postobj.title.trim() && postobj.topic.trim() && postobj.content.trim() && imageUrl.toString().trim()){
            console.log('all input collected');
            sendtobackend();
            setMessage('');
            
        }else{
            setMessage(
              'Every Field is Required...');
            console.log('error set');
        }
        console.log("submit");
    }
    const [imageUrl,setImageUrl]=useState([]);
    const [message,setMessage]=useState('');
    const [postobj,setPostobj] =useState({
        title:'',
        topic:'',
        content:'',
    });
    const handleChange=(e)=>{
        setPostobj({...postobj,
            [e.target.name]:e.target.value});
        setMessage('');
        }
    return(
        obj.isLoggedIn ?
        <>
        <Header heading={'New Post'} para={'Express Your Thoughts'} />
    <div className={styles.formcontainer}>
        <input className={styles.inputtext} type="text" value={postobj.title} name="title" onChange={handleChange} placeholder="Title..."/>
        <input className={styles.inputtext} type="text" value={postobj.topic} name="topic" onChange={handleChange} placeholder="Topic..."/>
   
        <textarea rows={30} value={postobj.content} name="content" onChange={handleChange} placeholder="Tell your Story..."/>

         <Imageinput imageUrl={imageUrl} setImageUrl={setImageUrl}/>
         <span className={styles.submitwarning}>{message}</span>
        
       <div className={styles.submitbtncont}>
        <button className={styles.submitbtn} onClick={handlesubmit}>Submit</button>
        </div>
    </div>
   
        </>
        :
        <SignIn/>
    );

}
export default NewPost;