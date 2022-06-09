import Link from 'next/link';

import styles from '../styles/components/container.module.css';

interface Props {
    children: any,
}

const Container = ({ children }: Props) =>
    <div className={styles.base}>
        {children}
    </div>

export default Container;
