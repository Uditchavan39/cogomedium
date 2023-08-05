import FilterBox from "../Components/FilterBox";
import Navbar from "../Components/Navbar";
import PostList from "../Components/PostList";

const Home=()=>{

    return(
        <>
        <Navbar/>
        <FilterBox/>
        <PostList/>
  </>
    );
}
export default Home;