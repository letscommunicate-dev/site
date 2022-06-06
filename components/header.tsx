import Image from 'next/image';
import { Router } from 'next/router';

import LocaleSwitch from './locale-switch';
import Menu from './menu';

interface Props {
    router: Router,
}

const Header = ({ router }: Props) =>
    <header className="grid">
        {/* <Image src="/image/logo.svg" alt="logo" layout="fill" /> */}

        <LocaleSwitch router={router} />

        <Menu />

        <hr />
    </header>

export default Header;
