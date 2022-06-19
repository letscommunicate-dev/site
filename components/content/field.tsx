import Field from "../../defs/field";

import styles from '../../styles/components/field.module.css';
const Field = ({ name, label, placeholder, type, required }: Field) => {
    const req = required ? { required: true } : {};
    return (
        <fieldset className={styles.base}>
            {label && <label>{label}</label>}
            <input
                name={name}
                placeholder={placeholder || ''}
                type={type}
            />
        </fieldset>
    );
}

export default Field;