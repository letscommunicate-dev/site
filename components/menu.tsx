import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import Page from '../defs/page';

import styles from '../styles/components/menu.module.css';
import { useAppContext } from './AppProvider';

const Menu = () => {
    const router = useRouter();
    const { pages } = useAppContext();
    const pathname = router.pathname;
    const pagesFiltered = pages?.filter(a => a.slug !== 'home');

    return (
        <ul className={styles.list}>
            {pagesFiltered?.map((page, i) => 
                <li key={`page-${i}`}>
                    <Link href={`/${page.slug}`}>
                        <a className={[pathname === `/${page.slug}` ? 'selected' : '', styles.listItem].join(' ')}>
                            {page.title}
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default Menu;
