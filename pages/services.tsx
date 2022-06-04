import type { NextPage, NextPageContext } from 'next';

import { getPage } from '../contentful/page';
import { getAllServices } from '../contentful/service';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';
import Service from '../defs/service';

interface Props {
    locale: Locale,
    services: [Service];
    page: Page;
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale as Locale;
    const page = await getPage('services');
    const services = await getAllServices(locale);

    return {
        props: { page, services },
        revalidate: 10
    };
}

const Services: NextPage<Props> = ({ page, services }) =>
    <>
        <h4>Services</h4>

        {services.map((service, i) => (
            <div key={i}>
                <p className="">{service.name}</p>
                <p>{service.description}</p>
            </div>
        ))}
    </>

export default Services;
