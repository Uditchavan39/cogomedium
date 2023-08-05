import styles from '../styles/Header.module.css'
const Header =({heading,para})=>{
   const headerStyle={
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center', 
   };
   return(<>
        <header style={headerStyle} className={styles.header}>
            <h1>
        {heading}
            </h1>
        <p>{para}</p>
        </header>
    </>);
};
export default Header;