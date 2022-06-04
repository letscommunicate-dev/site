import { gql } from 'graphql-request';
import { Locale } from '../defs/i18n';
import Page from '../defs/page';
import { graphQLClient } from './api';

export const getPage = async (slug: string, locale: Locale = Locale.EN_NZ): Promise<Page> => {
    const query = gql`
        {
            pageCollection(where: { slug: "${slug}" }, locale: "${locale}") {
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
