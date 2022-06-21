import type { NextPage, NextPageContext } from 'next';

import { getPage } from '../contentful/page';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';

import styles from '../styles/page.module.css';
interface Props {
    locale: Locale,
    page: Page;
    form: any;
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale as Locale;
    const page = await getPage('contact', locale);
    return {
        props: { page, locale },
        revalidate: 10
    };
}

const Contact: NextPage<Props> = ({ page, form, locale }) => {
    return (<>
        <h1 className={styles.title}>{page.title}</h1>
    </>);
}

export default Contact;
