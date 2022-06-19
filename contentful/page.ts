import { gql } from 'graphql-request';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';
import { graphQLClient } from './api';

export const getPage = async (slug: string, locale: Locale): Promise<Page> => {
    const query = gql`
        {
            pageCollection(where: { slug: "${slug}" }, locale: "${locale}", limit: 1) {
                items {
                    title
                    slug
                    description
                    keywords
                    image {
                        url
                        width
                        height
                    }
                    contentsCollection(locale: "${locale}", limit: 5) {
                        items {
                            ... on Services {
                                __typename
                                serviceCollection {
                                    items {
                                        name
                                        description
                                    }
                                }
                            }

                            ...on Richtext {
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
                        }
                    }
                }
            }
        }
    `;

    try {
        const result = await graphQLClient.request(query);
        return result.pageCollection.items[0];
    } catch (error: any) {
        throw new Error(`Page::getPage ${error}`);
    }
}

export const getAllPages = async (locale: Locale = Locale.EN_NZ): Promise<Page[]> => {
    const query = gql`
        {
            pageCollection(locale: "${locale}") {
                items {
                    title
                    slug
                    description
                    keywords
                    image {
                        url
                        width
                        height
                    }
                }
            }
        }
    `;

    try {
        const result = await graphQLClient.request(query);
        return result.pageCollection.items;
    } catch (error: any) {
        throw new Error(`Page::getAllPages ${error}`);
    }
}
