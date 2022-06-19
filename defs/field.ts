export enum FieldType {
    TEXT = 'text',
    TEXT_AREA = 'textarea',
    EMAIL = 'email',
    NUMBER = 'number',
}

export default interface Field {
    name: string,
    placeholder: string | null,
    label: string | null,
    type: FieldType,
    required: boolean,
}