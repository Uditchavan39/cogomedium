import { useState } from 'react';
import styles from '../styles/Search.module.css';
const Search=()=>{
    const [search,setSearch]=useState('');
    const handlechange=(e)=>{
        setSearch(e.target.value);
        console.log(search);
        
    }
return(
    <>
    <div className={styles.searchbox}>
    <input className={styles.inputtext} type="text" value={search} onChange={handlechange} placeholder="Search..."/>
    </div>
    </>
);
}
export default Search;