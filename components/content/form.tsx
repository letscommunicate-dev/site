import FieldType from "../../defs/field";
import Field from "./field";
import dictionary from "../../contentful/dictionary";
import { Locale } from "../../defs/i18n";

import styles from '../../styles/components/form.module.css';

interface Props {
    fields: Array<FieldType>,
    locale: Locale,
    action: string,
    id: string,
    successMessage: string,
    errorMessage: string,
}

function Form({ action, fields, locale, successMessage, errorMessage }: Props) {
    async function onSubmit(event: Event): Promise<void> {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const body = JSON.stringify(Object.fromEntries(formData));
        
        const response = await window.fetch(
            form.action,
            {
                method: form.method,
                body,
                headers: {
                    'Content-Type':'application/json'
                }
            }
        );
        const data = await response.json();
        console.log('response', data);
        
        if (data.success) {
            form.reset();
            window.alert(successMessage);
        } else {
            window.alert(errorMessage);
        }
    }

    return (
        <form
            className={styles.base}
            action={action}
            method="post"
            onSubmit={onSubmit as any}
        >
            {fields.map((field, i: number) =>
                <Field
                    key={i}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    type={field.type}
                    required={field.required}
                />
            )}

            <button type="submit">{dictionary(locale, 'send')}</button>
        </form>
    );
}

export default Form;