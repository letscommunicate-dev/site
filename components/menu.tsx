import Link from 'next/link';
import { Router } from 'next/router';

import styles from '../styles/components/menu.module.css';

interface Props {
    router: Router,
}

const Menu = ({ router }: Props) => {
    const pathname = router.pathname;
    const pages = [
        'about',
        'brand',
        'jobs',
        'services',
        'contact',
    ];

    return (
        <ul className={styles.list}>
             {pages.map((page, i) => 
                <li key={`page-${i}`}>
                    <Link href={`/${page}`}>
                        <a className={[pathname === `/${page}` ? 'selected' : '', styles.listItem].join(' ')}>
                            {page}
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default Menu;
