import { Link } from 'react-router-dom';
import styles from '../../styles/usercard.module.css'
const NavbarUserCard=()=>{
   const obj={
    isLoggedIn:localStorage.getItem('isLoggedIn')
}
const userlogged=localStorage.getItem('useremail');
return(
userlogged ?
<>
        <div className={styles.usernameandimg}>
        <div className={styles.userdiv}>
        <img src="https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" alt="Avatar"/>
    </div>
    <div className={styles.username}>{userlogged}</div>
        </div>
    
    </>:
    <>
        <Link to='/signin' style={{color:'white' ,textDecoration:'none'}}>LogIn</Link>
    </>
 );

}
export default NavbarUserCard;