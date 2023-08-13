import { useEffect, useState } from "react";
import SinglePostCard from "./SinglePostCard";
import axios from "axios";
import { redirect } from "react-router-dom";

const PostList=({aura})=>{
    
 return(
    <ul>
    { aura ?
        aura.map((post)=>(
            <li key={post.post_id}>
       {
        <SinglePostCard post={post} key={post.post_id} />
     }
        </li>
    ))
    :<></>
    }
</ul>

        );
};
export default PostList;