import axios from "axios";

const Testing=()=>{
    const obj={
            token: localStorage.getItem('token'),
            title: "My second post",
            featured_image: "link2",
            content: "This is my second post!",
            topics: ["science"]
        }
       const handleclick=()=>{
        callapi();
    }
    const token= localStorage.getItem('token');
        const callapi= async(formdata)=>{
            axios.get('http://127.0.0.1:3000/view-my-posts?token='+token)
            .then((response) => {
              console.log('Response:', response.data,response.data.status);
                if(response.data.status===200){
                    localStorage.setItem('isLoggedIn',true);
                }
                else if(response.status!==200){
                
                }
                else{
                }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        };

    
    return(
        <>
            Testing page:
        <button onClick={handleclick}>Button</button>
        </>
    );
}
export default Testing;