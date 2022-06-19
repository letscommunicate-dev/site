import Image from 'next/image';
import { Router } from 'next/router';
import Link from 'next/link';

import LocaleSwitch from './locale-switch';
import Container from './container';
import Menu from './menu';

import styles from '../styles/components/header.module.css';
interface Props {
    router: Router,
}

const Header = ({ router }: Props) =>
    <Container>
        <header className={styles.base}>
            <Link href="/">
                <a><Image src="/image/logo.svg" alt="logo" width={140} height={100} /></a>
            </Link>

            <div className={styles.menu}>
                <LocaleSwitch router={router} />
                <Menu router={router} />
            </div>
        </header>
    </Container>

export default Header;
