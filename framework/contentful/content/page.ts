import { graphQLClient } from '@framework/contentful/api';
import { gql } from 'graphql-request';

import { Locale } from '../../../defs/i18n';
import fieldFragment from '../../../contentful/content/field';
import formFragment from '../../../contentful/content/form';
import richtextFragment from '../../../contentful/content/richtext';
import servicesFragment from '../../../contentful/content/services';
import ContentFragment from '../content-fragment';

export const getPage = async (slug: string, locale: Locale): Promise<Page> => {
    const query = gql`
        query {
            pageCollection(where: { slug: "${slug}" }, locale: "${locale}", limit: 1) {
                items {
                    ...${pageFragment.id}
                    contentsCollection(locale: "${locale}", limit: 5) {
                        items {
                            ...${servicesFragment.id}
                            ...${richtextFragment.id}
                            ...${formFragment.id}
                        }
                    }
                }
            }
        }

        ${pageFragment.content}
        ${servicesFragment.content}
        ${richtextFragment.content}
        ${formFragment.content}
        ${fieldFragment.content}
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
        query {
            pageCollection {
                items {
                    slug
                    title
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
export const getPagesForMenu = async (displayAtMenu: boolean, locale: Locale = Locale.EN_NZ): Promise<Page[]> => {
    const query = gql`
        query {
            pageCollection(where: { displatAtMenu: ${displayAtMenu} }, order: order_ASC, locale: "${locale}") {
                items {
                    slug
                    title
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

export interface Page {
    title: string,
    slug: string,
    description: string,
    keywords: string,
    image: {
        title: string,
        description: string,
        contentType: string,
        fileName: string,
        size: number,
        url: string,
        width: number,
        height: number
    },
    contentsCollection: {
        items: [{
            id: string,
            __typename: string,
            items: [],
            json: Object
        }]
    }
}

export const pageFragment = new ContentFragment(
    'Page',
    `
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
    `
);
