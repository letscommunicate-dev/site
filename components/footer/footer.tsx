import Link from "next/link";
import Image from "next/image";

import Container from "../container/container";

import styles from './footer.module.css';

const Footer = () =>
    <Container>
        <footer className={styles.footer}>
            <Link href="/">
                <a><Image src="/image/logo.svg" alt="logo" width={98} height={70} /></a>
            </Link>

            <div className={styles.social}>
                <a className="flex" href="https://www.instagram.com/letscommunicate.nz" target="_blank" rel="noopener noreferrer">
                    <Image src="/image/icon-instagram.svg" alt="instagram" width={24} height={24} />
                </a>

                <a className="flex" href="https://t.me/lets_communicate_nz" target="_blank" rel="noopener noreferrer">
                    <Image src="/image/icon-telegram.svg" alt="telegram" width={24} height={24} />
                </a>

                <a className="flex" href="https://api.whatsapp.com/send/?phone=64273563474&text=Hi%20there!&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <Image src="/image/icon-whatsapp.svg" alt="whatsapp" width={24} height={24} />
                </a>
            </div>

            <div className="contact">
                <p>P. <a href="tel:+64273563474">+64 27 356 3474</a></p>
                <p>M. <a href="mailto:leticia@letscommunicate.nz">leticia@letscommunicate.nz</a></p>
            </div>

            <p className="copyright">© Let’s Communicate. All rights reserved 2022</p>
        </footer>
    </Container>

export default Footer;
