import type { NextPage } from 'next';
import Head from 'next/head'
import '../styles/globals.css'

interface Props {
    Component: any;
    pageProps: any;
}

const MyApp: NextPage<Props> = ({ Component, pageProps }) =>
    <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Communication is a key that can solve any problem. From Marketing planning to execution, we offer solutions for any stage" />
            <meta name="keywords" content="leticia melo, brazil, marketing digital, developing, new zealand, auckland" />
            <meta property="og:locale" content="en_NZ" />
            <meta property="og:site_name" content="Let's Communicate" />
            <meta property="og:type" content="Website" />
            <meta property="og:url" content="https://www.letscommunicate.nz" />
            <meta property="og:title" content="Let's Communicate" />
            <meta property="og:description" content="Communication is a key that can solve any problem. From Marketing planning to execution, we offer solutions for any stage" />
            <meta property="og:image" content="https://www.letscommunicate.nz/assets/image/share.jpg" />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />

            <title>Let&apos;s Communicate | +64 27 356 3474</title>

            <link rel="icon" type="image/png" href="image/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="image/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="image/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="image/favicon-128x128.png" sizes="128x128" />
            <link rel="icon" type="image/png" href="image/favicon-196x196.png" sizes="196x196" />

            {/*
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-223896208-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'UA-223896208-1');
            </script>
            */}
        </Head>

        <Component {...pageProps} />
    </>
    
export default MyApp;
    