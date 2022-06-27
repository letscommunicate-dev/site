import { GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next';
import dynamic from 'next/dynamic';

import { getAllPages, getPage, getPagesForMenu } from '../contentful/page';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';
import { useAppContext } from '../components/AppProvider';
import Container from '../components/container';
import Contents from '../components/contents';
import Footer from '../components/footer';
import Header from '../components/header';
import Intro from '../components/intro';

import styles from '../styles/page.module.css';

const Backgorund = dynamic(() => import('../components/background/background'), { ssr: false });

interface Props {
    locale: Locale,
    page: Page;
    pages: Page[];
}

export const getStaticPaths = async (params: GetStaticPathsContext) => {
    const pages = await getAllPages();
    const paths: any[] | undefined = params.locales?.map((locale) => pages.map((page) => ({ params: { slug: [page.slug !== 'home' ? page.slug : ''] }, locale }))).flat();

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params, locale }: GetStaticPropsContext) => {
    const slug = params?.slug as string || 'home';
    const page = await getPage(slug, locale as Locale);
    const pages = await getPagesForMenu(true, locale as Locale);

    return {
        props: { pages, page },
        revalidate: 10
    };
}

const BasicPage: NextPage<Props> = ({ pages, page }) => {
    const contents = page?.contentsCollection?.items || [];
    const { router, locale } = useAppContext();

    return (
        <div className={styles.page}>
            <Backgorund />

            <Header router={router} pages={pages} />

            <Container>
                <main className={styles.body}>
                    {page.slug === 'home' && <Intro locale={locale} />}
                    {page.slug !== 'home' && <h1 className={styles.title}>{page.title}</h1>}

                    <Contents contents={contents} locale={locale} />
                </main>
            </Container>

            <Footer />
        </div>
    );
}

export default BasicPage;