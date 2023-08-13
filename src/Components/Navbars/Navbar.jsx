import { Link, Route } from 'react-router-dom';
import styles from '../../styles/Navbar.module.css'
import Search from '../Search';
import {AiOutlineEdit} from 'react-icons/ai';
import NavbarUserCard from '../user_card/NavbarUserCard';
const Navbar = ({search,setSearch}) => (
    <header className={styles.navbar}>
        <Link className={styles.navbartitle} to='/'>Medium</Link>
        <div className={styles.navbartitle}><Search search={search} setSearch={setSearch}/></div>
        <Link className={styles.navbaritem} to="/newpost"><AiOutlineEdit/>Write</Link>
        <Link className={styles.navbaritem} to='/profile'><NavbarUserCard/></Link>
    </header>
);
export default Navbar;