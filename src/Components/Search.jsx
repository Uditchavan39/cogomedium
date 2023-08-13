import { useState } from 'react';
import styles from '../styles/Search.module.css';
import SearchPostShow from './post_request/SearchPostShow';
const Search=({search,setSearch})=>{
    const handlechange=(e)=>{
        setSearch(e.target.value);
        console.log(search);
    }
return(
    <>
    <div>
     </div>
    <div className={styles.searchbox}>
    <input className={styles.inputtext} type="text" value={search} onChange={handlechange} placeholder="Search..."/>
    </div>
    </>
);
}
export default Search;