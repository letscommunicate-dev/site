import { gql } from 'graphql-request';
import { graphQLClient } from './api';

const get = async (slug: string, locale = 'en-US') => {
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

const getAll = async (locale = 'en-US') => {
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