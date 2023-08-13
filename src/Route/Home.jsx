import { useState } from "react";
import FilterBox from "../Components/FilterBox";
import Navbar from "../Components/Navbars/Navbar";
import PostList from "../Components/PostList";
import HomePost from "../Components/post_request/HomePost";
import CurrentPlan from "../Components/PaymentRelated/CurrentPlan";

const Home=()=>{
    const [search,setSearch]=useState('');
    const[aura,setaura]=useState([]);
    return(
        <>
        <Navbar search={search} setSearch={setSearch}/>
        <FilterBox aura={aura} setaura={setaura}/>
        <CurrentPlan/>
        <HomePost search={search} aura={aura} setaura={setaura}/>
  </>
    );
}
export default Home;