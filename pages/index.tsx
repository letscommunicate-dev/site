import type { NextPage, NextPageContext } from 'next';
import Intro from '../components/intro';

import { getPage } from '../contentful/page';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';

interface Props {
    locale: Locale,
    page: Page;
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale as Locale;
    const page = await getPage('home', locale);

    console.log('index', { context })

    return {
        props: { page, locale },
        revalidate: 10
    };
}

const Home: NextPage<Props> = ({ locale }) =>
    <div>
        <Intro locale={locale} />
    </div>

export default Home;
