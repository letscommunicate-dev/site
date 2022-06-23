import { createRef, RefObject, useEffect } from "react";
import p5 from 'p5';

import sketch from "./sketch";
import styles from '../../styles/components/background.module.css';

const Backgorund = () => {
    const myRef: RefObject<HTMLDivElement> = createRef();

    useEffect(() => {
        const parent = myRef.current as HTMLElement;
        const p = new p5(sketch, parent);

        return () => p.remove();
    });

    return (
        <div className={styles.background} ref={myRef}></div>
    );
}

export default Backgorund;