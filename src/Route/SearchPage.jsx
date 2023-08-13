import Navbar from "../Components/Navbars/Navbar";
import SearchPostShow from "../Components/post_request/SearchPostShow";

const SearchPage=()=>{
    return(
        <>
        <Navbar/>
        <SearchPostShow searchit={'by'}/>
        </>
    );
}
export default SearchPage;