import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish=({post_id})=>{
    var token=localStorage.getItem('token');
    const publishpost=()=>{
    const postobjpublish=
            {
            topics : ['postobj.topic'],
            token:token,
            post_id:post_id,
            publish_status:true,
        };
        callapi(postobjpublish);
          localStorage.setItem('postsaved',JSON.stringify(postobjpublish))
        console.log(JSON.stringify(postobjpublish));
       
    }
    const navigate=useNavigate();

    const callapi= async(poobj)=>{
        
        axios.put('http://127.0.0.1:3000/update-post', poobj)
        .then((response) => {
          console.log('Response:', response.data,response.status);
            if(response.data.status===200){
                alert('Post Published SuccessFully!!!');
                navigate('/');
            }
            else if(response.status!==200){
                alert("Failed To Publish Post.");
              
            }
            else{
                alert("Failed To Publish Post.");
            
            }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert("Error: "+error);
        });
    };
    
    return(<>
        <button onClick={publishpost}>Publish</button>
    </>)
}
export default Publish;