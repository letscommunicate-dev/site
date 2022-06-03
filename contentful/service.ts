import { gql } from 'graphql-request';
import { Locale } from '../defs/i18n';
import { graphQLClient } from './api';

const get = async (slug: string, locale: Locale = Locale.EN_NZ) => {
    const query = gql`
        {
            serviceCollection(where: { slug: "${slug}" }, locale: "${locale}") {
                items {
                    name
                    description
                    slug
                }
            }
        }
    `;

    try {
        const result = await graphQLClient.request(query);
        return result.serviceCollection.items[0];
    } catch (error) {
        return error;
    }
}

const getAll = async (locale: Locale = Locale.EN_NZ) => {
    const query = gql`
        {
            serviceCollection(locale: "${locale}") {
                items {
                    name
                    description
                    slug
                }
            }
        }
    `;

    try {
        const result = await graphQLClient.request(query);
        return result.serviceCollection.items;
    } catch (error) {
        return error;
    }
}

export default {
    get,
    getAll
}