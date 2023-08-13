import { useEffect, useState } from "react";
import styles from '../../styles/CurrentPlan.module.css'
const CurrentPlan=()=>{
    const [currentplan,setCurrentplan]=useState(1);
    const [postview,setPostview]=useState(0);

    const fun=()=>{
        if(localStorage.getItem('current_plan')===null)
       { localStorage.setItem('current_plan',1); 
    }else
    setCurrentplan(localStorage.getItem('current_plan'));
     if(localStorage.getItem('post_view')===null)
        localStorage.setItem('post_view',0);
      else
      setPostview(localStorage.getItem('post_view'));
}   
  
useEffect(()=>{
    fun();
  },[]);
    return(
        <>
        <div className={styles.maincont}>
            <h3 className={styles.cont}>Current Plan : {currentplan} post per day</h3>
            <h3 className={styles.cont2}>Post Viewed: {postview}</h3>
            </div>
        </>
    )
}
export default CurrentPlan;