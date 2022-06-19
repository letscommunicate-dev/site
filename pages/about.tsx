import type { NextPage, NextPageContext } from 'next';

import { getPage } from '../contentful/page';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';

import styles from '../styles/page.module.css';

interface Props {
    locale: Locale,
    page: Page;
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale as Locale;
    const page = await getPage('about', locale);

    return {
        props: { page, locale },
        revalidate: 10
    };
}

const About: NextPage<Props> = () =>
    <>
        <h1 className={styles.title}>About</h1>
    </>

export default About;
