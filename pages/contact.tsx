import type { NextPage, NextPageContext } from 'next';

import { getPage } from '../contentful/page';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';
interface Props {
    locale: Locale,
    page: Page;
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale as Locale;
    const page = await getPage('contact', locale);

    return {
        props: { page },
        revalidate: 10
    };
}

const Contact: NextPage<Props> = ({ page }) => {
    return (<>
        <h1>{page.title}</h1>
    </>);
}

export default Contact;
