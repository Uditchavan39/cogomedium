import React from "react";
import { ReactDOM } from "react";
import ReactModal from "react-modal";
import styles from '../styles/Commentbox.module.css'
import AddComment from "./AddComment";
import CommentList from "./CommentList";
const Commentbox=({colist,post_id})=>{
    colist=JSON.parse(colist);
   
    return (
      <>
            <AddComment post_id={post_id}/>
            <CommentList colist={colist} post_id={post_id}/>
      </>
  );
};
  
  export default Commentbox;