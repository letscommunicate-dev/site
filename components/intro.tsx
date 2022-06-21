import { Locale } from "../defs/i18n";
import dictionary from "../contentful/dictionary";

import styles from '../styles/components/intro.module.css';

interface Props {
    locale: Locale,
}

const Intro = ({ locale }: Props) =>
    <div className={styles.intro}>
        <span className={styles.image} style={{ backgroundImage: `url('/image/intro.jpg')` }}></span>
        <p className={styles.text}>{dictionary(locale, 'communication')}</p>
        <p className={styles.text}>{dictionary(locale, 'iseverything')}</p>
        <span className={styles.line}></span>
    </div>

export default Intro;
