import Link from 'next/link';
import { Router } from 'next/router';
import Page from '../defs/page';

import styles from '../styles/components/menu.module.css';

interface Props {
    router: Router,
    pages: Page[],
}

const Menu = ({ router, pages }: Props) => {
    const pathname = router.pathname;
    const pagesFiltered = pages.filter(a => a.slug !== 'home');

    return (
        <ul className={styles.list}>
            {pagesFiltered.map((page, i) => 
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
