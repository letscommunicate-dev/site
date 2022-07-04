import Service from "../../../defs/service";

import styles from './services.module.css';

interface Props {
    items: [Service],
}

const ServicesContent = ({ items }: Props) =>
    <div className={styles.services}>
        {items.map((item, i) => (
            <div className={styles.service} key={item.name + i}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
        ))}
    </div>

export default ServicesContent;
