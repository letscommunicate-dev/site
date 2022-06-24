import Field, { FieldType } from "../../defs/field";

import styles from '../../styles/components/field.module.css';
const Field = ({ name, label, placeholder, type, required }: Field) => {
    const Component = type === FieldType.TEXT_AREA ? 'textarea' : 'input';

    return (
        <fieldset className={styles.base}>
            {label && <label>{label}</label>}
            <Component
                name={name}
                placeholder={placeholder || ''}
                type={type}
                {...{ required }}
            />
        </fieldset>
    );
}

export default Field;