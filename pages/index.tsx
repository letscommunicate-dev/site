import type { NextPage, NextPageContext } from 'next';
import LocaleSwitch from '../components/locale-switch';

import service from '../contentful/service';
import { Locale } from '../defs/i18n';

interface Props {
    locale: Locale,
    services: [
        {
            name: 'string',
            description: 'string',
            slug: 'string',
        }
    ];
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale as Locale;
    const services = await service.getAll(locale);

    return {
        props: { services, locale },
        revalidate: 10
    };
}

const Home: NextPage<Props> = ({ services, locale }) =>
    <>
        <header>
            <div>
                <LocaleSwitch locale={locale} />
            </div>
        </header>

        <main>
            <h1>Welcome to Let&apos;s Communicate</h1>
            <h4>Services</h4>

            {services.map((service, i) => (
                <div key={i}>
                    <p className="">{service.name}</p>
                    <p>{service.description}</p>
                </div>
            ))}
        </main>

        <footer>footer</footer>
    </>

export default Home;
