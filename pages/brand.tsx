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
    const page = await getPage('brand', locale);

    return {
        props: { page },
        revalidate: 10
    };
}

const Brand: NextPage<Props> = ({ page }) => {
    return (<>
        <h1 className={styles.title}>{page.title}</h1>
    </>);
}

export default Brand;
