import type { NextPage, NextPageContext } from 'next';
import Link from 'next/link'

import { Locale } from '../defs/i18n';
import { Router, useRouter } from 'next/router';

import styles from '../styles/components/locale.module.css';

const LocaleSwitch = () => {
    const router = useRouter();
    const locales = router.locales || [];

    return (<ul className={styles.list}>
        {locales.map((locale, i) => 
            <Link
                key={locale + i}
                href={router.asPath}
                locale={locale}
            >
                <li className={styles.listItem}>
                    <a className={locale === router.locale ? 'selected' : ''}>{locale.substring(0,2)}</a>
                </li>
            </Link>
        )}
    </ul>);
}

export default LocaleSwitch;
