import type { NextPage, NextPageContext } from 'next';
import Link from 'next/link'

import { Locale } from '../defs/i18n';
import dictionary from '../contentful/dictionary';

interface Props {
    locale: Locale,
}

const LocaleSwitch = ({ locale }: Props) =>
    <>
        <h4>{dictionary(locale, 'locale')} - {locale}</h4>
        <Link href="/" locale={Locale.EN_NZ}><a className={locale === Locale.EN_NZ ? 'font-bold' : ''}>en</a></Link>
        |
        <Link href="/" locale={Locale.PT_BR}><a className={locale === Locale.PT_BR ? 'font-bold' : ''}>pt</a></Link>
    </>

export default LocaleSwitch;
