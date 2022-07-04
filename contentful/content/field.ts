import ContentFragment from "@framework/contentful/content-fragment";

const fieldFragment = new ContentFragment(
    'Field',
    `
        __typename
        label
        name
        type
        as
        placeholder
    `
);

export default fieldFragment;