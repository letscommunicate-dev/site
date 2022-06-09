import Link from 'next/link';

import styles from '../styles/components/menu.module.css';

const Menu = () =>
    <ul className={styles.list}>
        <li className={styles.listItem}><Link href="/about"><a>ABOUT</a></Link></li>
        <li className={styles.listItem}><Link href="/brand"><a>BRAND</a></Link></li>
        <li className={styles.listItem}><Link href="/jobs"><a>JOBS</a></Link></li>
        <li className={styles.listItem}><Link href="/services"><a>SERVICES</a></Link></li>
        <li className={styles.listItem}><Link href="/contact"><a>CONTACT</a></Link></li>
    </ul>

export default Menu;
