import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Router } from 'next/router';
import Link from 'next/link';

import LocaleSwitch from './locale-switch';
import Container from './container';
import Menu from './menu';
import Page from '../defs/page';

import styles from '../styles/components/header.module.css';
interface Props {
    router: Router,
    pages: Page[],
}

const Header = ({ router, pages }: Props) => {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!open);
    }

    const handleRouteChange = () => setOpen(false);

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => router.events.off('routeChangeComplete', handleRouteChange);
    }, [router.events]);

    return (
         <Container>
            <header className={`${styles.header} ${open ? styles.open : ''}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a><Image src="/image/logo.svg" alt="logo" layout='fill' /></a>
                    </Link>
                </div>

                <div className={styles.toggle} onClick={onClick}>
                    <Image className={styles.menuIcon} src={`/image/${open ? 'close' : 'menu'}.svg`} alt="menu" width={24} height={24} />
                </div>

                <nav className={styles.menu}>
                    <LocaleSwitch router={router} />
                    <Menu router={router} pages={pages} />
                </nav>
            </header>
        </Container>
    );
}

export default Header;
