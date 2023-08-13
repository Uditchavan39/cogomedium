import { FaTrash } from 'react-icons/fa';
import styles from '../../styles/Listsitem.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const Listsitem=({key,item})=>{
    const delitem=()=>{
            callapi();
    };
    const [aura,setaura]=useState([]);
    const token= localStorage.getItem('token');
    var result=[];
    const callapi= async(formdata)=>{
                axios.get('http://localhost:3000/get-list?token='+token+'&list_id='+item.id)
                .then((response) => {
                  console.log('Response:', response.data,response.status);
                    if(response.data.status===200){
                        result=response.data.list.posts.map(({postDetails})=>({postDetails}));
                    }
                    else if(response.status!==200){
                        alert('Failed To Fetch Data!!!\n response: '+response.status);
                    }
                    else{
                    }
                })
                .catch((error) => {
                  alert('Error: '+error);
                });
            };
   
    const navigate=useNavigate();
    const handlechange=()=>{
        navigate('/listpostshow',
        {state:{
            list_id: item.id, 
            list_name:item.name,
        }});
    }

    return(
        <>
            <li className={styles.item} onClick={handlechange}>
    <div className={styles.content}>
    <div>{item.name}</div>
    <button onClick={()=> delitem(key)}><FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }}/></button>
    </div>
    </li>
        </>
    );

}
export default Listsitem;