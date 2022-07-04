import ContentFragment from "@framework/contentful/content-fragment";
import fieldFragment from "./field";

const formFragment = new ContentFragment(
    'Form',
    `
        __typename
        id
        action
        method
        successMessage
        errorMessage
        fieldCollection {
            items {
                __typename
                ...${fieldFragment.id}
            }
        }
    `
);

export default formFragment;
