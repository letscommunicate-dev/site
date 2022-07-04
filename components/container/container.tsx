import Link from 'next/link';

import styles from './container.module.css';

interface Props {
    children: any,
    className?: string,
}

const Container = ({ children, className = '' }: Props) =>
    <div className={[styles.base, className].join(' ')}>
        {children}
    </div>

export default Container;
