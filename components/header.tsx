import Link from 'next/link';
import { Router } from 'next/router';
import { Locale } from '../defs/i18n';
import LocaleSwitch from './locale-switch';

interface Props {
    router: Router,
}

const Header = ({ router }: Props) =>
    <>
        <LocaleSwitch router={router} />

        <ul>
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/services"><a>SERVICES</a></Link></li>
        </ul>

        <hr />
    </>

export default Header;
