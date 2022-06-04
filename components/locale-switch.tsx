import type { NextPage, NextPageContext } from 'next';
import Link from 'next/link'

import { Locale } from '../defs/i18n';
import { Router } from 'next/router';

interface Props {
    router: Router,
}

const LocaleSwitch = ({ router }: Props) => {
    const locales = router.locales || [];
    return (<ul>
        {locales.map((locale, i) => 
            <Link
                key={i}
                href={router.route}
                locale={locale}
            >
                <li><a className={locale === router.locale ? 'font-bold' : ''}>{locale.substring(0,2)}</a></li>
            </Link>
        )}
    </ul>);
}

export default LocaleSwitch;
