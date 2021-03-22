import Link from 'next/link';
import styles from './header.module.css'


const Header = () => (
    <div className={styles.topbar}>
        <div className={styles.header_left}>
            
            <div className={styles.top_button}>
            <Link className={styles.link_text} href="/">
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16">
                        <path d="M3.857 0L1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429l-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z"/>
                        <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z"/>
                    </svg>
                </a>
            </Link>

            </div>
            <div className={styles.header_divider}>
            <Link href="/search">
                <a className={styles.link_text}>탐색</a>
            </Link>
            </div>

            <div className={styles.top_button}>
            <Link href="/esports">
                <a className={styles.link_text}>e스포츠</a>
            </Link>
            </div>

            <div className={styles.top_button}>
            <Link href="/music">
                <a className={styles.link_text}>음악</a>
            </Link>
            </div>
        </div>


        <div className={styles.header_middle}>
            <datalist className={styles.datalist} id="streamers">
            <option value="소니쇼"/>
            <option value="서새봄"/>
            <option value="풍월량"/>
            <option value="김도"/>
            </datalist>
            <input className={styles.header_searchbox} placeholder="검색" list="streamers">

            </input>
            <button className={styles.header_searchbutton}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
        </div>




        <div className={styles.header_right}>

            <div>
                <button className={styles.header_profile_button}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg></button>
            </div>

            <div>
                <button className={styles.header_signup_button}><text className={styles.header_signup_text}>회원가입</text></button>
            </div>

            <div>
                <button className={styles.header_login_button}><text>로그인</text></button>
            </div>

            <div>
            <button className={styles.header_prime_button}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
</svg></button>
            </div>
        </div>
    </div>
);

export default Header;