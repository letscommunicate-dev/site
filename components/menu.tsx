import Link from 'next/link';

const Menu = () =>
    <ul>
        <li><Link href="/"><a>HOME</a></Link></li>
        <li><Link href="/about"><a>ABOUT</a></Link></li>
        <li><Link href="/brand"><a>BRAND</a></Link></li>
        <li><Link href="/jobs"><a>JOBS</a></Link></li>
        <li><Link href="/services"><a>SERVICES</a></Link></li>
        <li><Link href="/contact"><a>CONTACT</a></Link></li>
    </ul>

export default Menu;
