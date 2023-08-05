import React, { useState } from "react";
import styles from '../styles/Commentbox.module.css'
import ReactModal from "react-modal";
import {AiOutlineClose} from 'react-icons/ai'
const FilterBox =()=> {
  const [filterobj,setfilterobj]=useState({
    Author:'',
    Date:'',
    Comments:'',
    Likes:'',
  });
  const handlechange=(e)=>{
    setfilterobj({...filterobj,
    [e.target.name]:e.target.value
    });
  }
 const handlesubmit=(e)=>{
    e.preventDefault();
    console.log('filter applied'+JSON.stringify(filterobj));
  };
          return ( 
                        <form className={styles.filtermodal} onSubmit={handlesubmit}>
                        <div className={styles.filterbyauther}>
                     <h4>Author:  <input type="text" value={filterobj.Author} name="Author" onChange={handlechange}/>  </h4>
                    </div>
                    <div className={styles.filterbyauther}>
                     <h4>Date:  <input type="date" name="Date" value={filterobj.Date} onChange={handlechange}/></h4>
                    </div>                        <div className={styles.filterbyauther}>
                     <h4>Comments:  <input type="number" name="Comments" value={filterobj.Comments} onChange={handlechange} min="0"/>  </h4>
                    </div>
                 <div className={styles.filterbyauther}>
                     <h4>Likes:  <input type="number" min="0" name="Likes" value={filterobj.Likes} onChange={handlechange}/>  </h4>
                    </div>
                    <div className={styles.filterbyauther}>
                  <button className={styles.filterbutton}>Filter</button>  
                </div>
                  </form>       
          );
};
export default FilterBox;