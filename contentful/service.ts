import { gql } from 'graphql-request';
import { Locale } from '../defs/i18n';
import Service from '../defs/service';
import { graphQLClient } from './api';

export const getService = async (slug: string, locale: Locale = Locale.EN_NZ): Promise<Service> => {
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
    } catch (error: any) {
        throw new Error(error);
    }
}

export const getAllServices = async (locale: Locale = Locale.EN_NZ): Promise<Service[]> => {
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
    } catch (error: any) {
        throw new Error(error);
    }
}
