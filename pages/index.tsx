import type { NextPage, NextPageContext } from 'next';

import { getPage } from '../contentful/page';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';

// import styles from '../styles/page.module.css';

interface Props {
    locale: Locale,
    page: Page;
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale as Locale;
    const page = await getPage('home', locale);

    return {
        props: { page, locale },
        revalidate: 10
    };
}

const Home: NextPage<Props> = () =>
    <>
        <h1>Welcome to Let&apos;s Communicate</h1>
    </>

export default Home;
