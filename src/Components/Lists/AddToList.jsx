import axios from "axios";
import { useEffect, useState } from "react";

const AddToList=({post_id})=>{
      const [list,setlist]=useState([]);
      const [selected,setselected]=useState(0); 
      const handlechange=(e)=>{
        setselected(e);
    };
    const updateobj=(obj)=>{
        setlist([]);
        obj.map(elem=>{
            setlist(
               list=>
               [ ...list,{
                name:elem.name,
                id: elem.id,
                 }]
            );       
        });
       };
    const token= localStorage.getItem('token');
    var result=[];
    const callapi= async()=>{
                axios.get('http://localhost:3000/view-all-lists?token='+token)
                .then((response) => {
                  console.log('Response:', response.data,response.status);
                    if(response.data.status===200){
                        result=response.data.lists.map(({id,name,})=>({id,name}));
                        console.log(result);
                        updateobj(result);
                    }
                    else{

                    }
                })
                .catch((error) => {
                  alert('Error where: '+error);
                });
            };
   
    useEffect(()=>{
    callapi();
},[]);

const addinlist= async(formdata)=>{
    console.log(formdata);
    axios.post('http://localhost:3000/add-to-list',formdata)
    .then((response) => {
      console.log('Response:', response.data,response.status);
        if(response.data.status===200){
           alert(response.data.msg);
        }
        else{
            alert(response.data.msg);
        }
    })
    .catch((error) => {
      alert('Error where: '+error);
    });
};

const handlesubmit=()=>{
  const formdata={
    token:token,
    post_id:parseInt(post_id),
    list_id:selected,
  };
    addinlist(formdata);
};
  
    return(
        <div className="form-container">
            { list ?
            <select className="dropdown-content" onChange={(event)=>handlechange(event.target.value)}>
            
            {        list.map((x)=>{
                    return <option key={x.id} value={x.id}>{x.name}</option>;
                })
                }
                
            </select>
            :<></>
            }
            <button onClick={handlesubmit}>Add To List</button>
        </div>
    );
}
export default AddToList;