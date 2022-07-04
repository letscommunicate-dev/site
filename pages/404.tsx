import type { NextPage } from 'next';
import Container from '../components/container/container';

import styles from '../styles/page.module.css';

const NotFound: NextPage = () => {
    return (
        <Container>
            <h1 className={styles.title}>404</h1>
            <p className="text-4">Page not found</p>
        </Container>
    );
}

export default NotFound;
