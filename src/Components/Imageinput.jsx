import { useEffect, useState } from "react";
import styles from '../styles/Imageinput.module.css';
const Imageinput=({imageUrl,setImageUrl})=>{
    const [images,setImages]=useState([]);
    useEffect(()=>{
        if(images.length<0) return;
        const newImageUrl=[];
       images.forEach(image=>newImageUrl.push(URL.createObjectURL(image)));
       setImageUrl(newImageUrl);
    },[images]);
    function onImageChange(e){
        setImages([...e.target.files]);
    }
    return(
        <>
           <input className={styles.imageinput} type="file" accept="image/*" onChange={onImageChange} />
            {imageUrl.map(imageSrc=><img src={imageSrc}/>)}
        </>
    );
}
export default Imageinput;