import { Formik, Field as FormikField, Form as FormikForm, FormikHelpers } from "formik";
import FieldType from "../../../defs/field";
import dictionary from "../../../contentful/dictionary";
import { Locale } from "../../../defs/i18n";

import styles from './form.module.css';

interface Props {
    fields: Array<FieldType>,
    locale: Locale,
    action: string,
    method: 'post'|'get',
    id: string,
    successMessage: string,
    errorMessage: string,
}

function Form({ action, method, fields, locale, successMessage, errorMessage }: Props) {
    const initialState: any = {};
    fields.forEach(field => initialState[field.name] = '');

    async function onSubmit(values: any, { resetForm }: FormikHelpers<any>) {
        const body = JSON.stringify(values);
        
        const response = await fetch(
            action,
            {
                method,
                body,
                headers: {
                    'Content-Type':'application/json'
                }
            }
        );
        const data = await response.json();
        
        if (data.success) {
            resetForm();
            window.alert(successMessage);
        } else {
            window.alert(errorMessage);
        }
    }

    return (
        <Formik
            method="post"
            initialValues={initialState}
            onSubmit={onSubmit}
        >
            <FormikForm className={styles.form}>
                {fields.map((field, i: number) =>
                    <fieldset className={styles.fieldset} key={field.name + i}>
                        {field.label && <label htmlFor={field.name}>{field.label}</label>}

                        <FormikField
                            name={field.name}
                            placeholder={field.placeholder}
                            as={field.as}
                            type={field.type}
                            required={field.required}
                        />
                    </fieldset>
                )}

                <button type="submit">{dictionary(locale, 'send')}</button>
            </FormikForm>
        </Formik>
    );
}

export default Form;