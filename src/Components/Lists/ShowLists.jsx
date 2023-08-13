import axios from "axios";
import { useEffect, useState } from "react";
import Listsitem from "./Listsitem";

const ShowLists=()=>{
    const [lists,setLists]=useState([]);
  useEffect(()=>{
callapi();
  },[]);

const token= localStorage.getItem('token');
    const callapi= async(formdata)=>{
        axios.get('http://localhost:3000/view-all-lists?token='+token)
        .then((response) => {
          console.log('Response lists:', response.data,response.data.status);
            if(response.data.status===200){
            setLists(response.data.lists);     
            }
            else{
                alert(response.data.msg);
            }
        })
        .catch((error) => {
         alert('Error:', error);
        });
    };
        return (
            <ul>
                {lists.map((todo)=>(<>
                    <Listsitem key={todo.id} item={todo} />
                    </>
                ))}
            </ul>
                );
}
export default ShowLists;