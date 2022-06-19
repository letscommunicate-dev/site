import type { NextPage, NextPageContext } from 'next';
import Form from '../components/content/form';
import { getForm } from '../contentful/form';

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
    const form = await getForm('contact', locale);
    return {
        props: { page, form, locale },
        revalidate: 10
    };
}

const Contact: NextPage<Props> = ({ page, form, locale }) => {
    return (<>
        <h1 className={styles.title}>{page.title}</h1>
        <Form
            id={form.id}
            action="/api/contact"
            locale={locale}
            fields={form.fields}
            successMessage={form.successMessage}
            errorMessage={form.errorMessage}
        />
    </>);
}

export default Contact;
