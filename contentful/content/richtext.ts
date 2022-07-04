import ContentFragment from "@framework/contentful/content-fragment";

const richtextFragment = new ContentFragment(
    'Richtext',
    `
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
    `
);

export default richtextFragment;
