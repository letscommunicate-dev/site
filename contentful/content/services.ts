import ContentFragment from "@framework/contentful/content-fragment";

const servicesFragment = new ContentFragment(
    'Services',
    `
        __typename
        serviceCollection {
            items {
                name
                description
            }
        }
    `
);

export default servicesFragment;
