import { FieldProps } from "formik";

export enum FieldType {
    TEXT = 'text',
    EMAIL = 'email',
    NUMBER = 'number',
}

export enum FieldAs {
    INPUT = 'text',
    SELECT = 'select',
    TEXTAREA = 'textarea',
}

export default interface Field {
    name: string,
    placeholder: string | null,
    label: string | null,
    type: FieldType,
    as: FieldAs,
    required: boolean,
}