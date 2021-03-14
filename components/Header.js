import Link from 'next/link';
import styles from './header.module.css'
const linkStyle ={
    marginRight:"3%",
    marginLeft:"3%"
};


const Header = () => (
    <div className={styles.topbar}>
        <div className={styles.header_left}>
        <Link href="/">
            <a style={linkStyle}>Logo</a>
        </Link>
        <Link href="/search">
            <a style={linkStyle}>탐색</a>
        </Link>
        <div className={styles.header_divider}>
            <text></text>
        </div>
        <Link href="/esports">
            <a style={linkStyle}>e스포츠</a>
        </Link>
        <Link href="/music">
            <a style={linkStyle}>음악</a>
        </Link>
        </div>


        <div className={styles.header_middle}>
            <input className={styles.header_searchbox} placeholder="검색">

            </input>
            <input className={styles.header_searchbutton}></input>
        </div>

        <div className={styles.header_right}>

        </div>
    </div>
);

export default Header;