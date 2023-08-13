import { useEffect } from "react";
import PostList from "../PostList";
import Header from "../Header";

const Recommended=({aura})=>{
useEffect(()=>{
  console.log(aura);      
 
});
  return(
            <>
             <Header heading={'Recommended Post'}/>
             <PostList aura={aura}/>
            </>
        );
}
export default Recommended;