export const pageFragment = {
    id: 'Page',
    fragment: `
        fragment Page on Page {
            title
            slug
            order
            description
            keywords
            image {
                url
                width
                height
            }
        }
    `
};

export const servicesFragment = {
    id: 'Services',
    fragment: `
        fragment Services on Services {
            __typename
            serviceCollection {
                items {
                    name
                    description
                }
            }
        }
    `
};

export const richtextFragment = {
    id: 'Richtext',
    fragment: `
        fragment Richtext on Richtext {
            __typename
            id
            content {
                json
                links {
                    assets {
                        block {
                            sys {
                                id
                            }
                            url
                            width
                            height
                            description
                        }
                    }
                }
            }
        }
    `
};

export const fieldFragment = {
    id: 'Field',
    fragment: `
        fragment Field on Field {
            __typename
            label
            name
            type
            placeholder
        }
    `
};

export const formFragment = {
    id: 'Form',
    fragment: `
        fragment Form on Form {
            __typename
            id
            action
            successMessage
            errorMessage
            fieldCollection {
                items {
                    __typename
                    ...${fieldFragment.id}
                }
            }
        }
    `
};