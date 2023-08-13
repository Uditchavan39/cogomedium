import { Link, Route } from 'react-router-dom';
import styles from '../../styles/Navbar.module.css'
import Search from '../Search';
import {AiOutlineEdit} from 'react-icons/ai';
import NavbarUserCard from '../user_card/NavbarUserCard';

const ProfileNavbar=()=>(
    <header className={styles.navbar}>
    <Link className={styles.navbartitle} to='/'>Medium</Link>
    <Link className={styles.navbaritem} to="/postsforme">Posts For Me</Link>
    <Link className={styles.navbaritem} to="/savedforme">Saved Posts</Link> 
    <Link className={styles.navbaritem} to="/mylists">My List</Link> 
    <Link className={styles.navbaritem} to="/newpost"><AiOutlineEdit/>Write</Link>
    <Link className={styles.navbaritem} to='/profile'><NavbarUserCard/></Link>
</header>
);
export default ProfileNavbar;