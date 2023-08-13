import { useEffect, useState } from "react";
import PostList from "../PostList";
import axios from "axios";
import ProfileNavbar from "../Navbars/ProfileNavbar";
import Header from "../Header";

const TopPost=({aura})=>{
  
    return(<>
    <Header heading={'Top Post'}/>
    <PostList aura={aura}/>
    </>);
}
export default TopPost;