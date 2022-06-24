import { gql } from 'graphql-request';

import { Locale } from '../defs/i18n';
import Page from '../defs/page';
import { graphQLClient } from './api';
import {
    fieldFragment,
    formFragment,
    pageFragment,
    richtextFragment,
    servicesFragment
} from './fragments';

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

        ${pageFragment.fragment}
        ${servicesFragment.fragment}
        ${richtextFragment.fragment}
        ${formFragment.fragment}
        ${fieldFragment.fragment}
    `;

    try {
        const result = await graphQLClient.request(query);
        return result.pageCollection.items[0];
    } catch (error: any) {
        throw new Error(`Page::getPage ${error}`);
    }
}

export const getAllPages = async (displayAtMenu: boolean, locale: Locale = Locale.EN_NZ): Promise<Page[]> => {
    const query = gql`
        query {
            pageCollection(where: { displatAtMenu: ${displayAtMenu} }, order: order_ASC, locale: "${locale}") {
                items {
                    ...${pageFragment.id}
                }
            }
        }

        ${pageFragment.fragment}
    `;

    try {
        const result = await graphQLClient.request(query);
        return result.pageCollection.items;
    } catch (error: any) {
        throw new Error(`Page::getAllPages ${error}`);
    }
}
