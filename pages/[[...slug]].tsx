import { GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next';

import { getAllPages, getPage } from '../contentful/page';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';
import Contents from '../components/contents';
import Intro from '../components/intro';

import styles from '../styles/page.module.css';
import Container from '../components/container';
import { useRouter } from 'next/router';


interface Props {
    page: Page;
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

    return {
        props: { page },
        revalidate: 10
    };
}

const BasicPage: NextPage<Props> = ({ page }) => {
    const contents = page?.contentsCollection?.items || [];
    const router = useRouter();
    const locale = router.locale as Locale;

    return (
        <Container>
            <main className={styles.body}>
                {page.slug === 'home' && <Intro locale={locale} />}
                {page.slug !== 'home' && <h1 className={styles.title}>{page.title}</h1>}

                <Contents contents={contents} />
            </main>
        </Container>
    );
}

export default BasicPage;