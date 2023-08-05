import UserCard from "./user_card/UserCard";
import style from '../styles/Commentbox.module.css'
import CommentUserCard from "./user_card/CommentUserCard";
const CommentCarditem=({username,comment})=>{
    return(
        <li className={style.CommentCarditem}>
    <div className={style.usercardstylecom}>
        <CommentUserCard username={username}/>
        </div>
        <div className={style.commentboxtext}>
        {comment}
</div> 
       </li>
    );

}
export default CommentCarditem;