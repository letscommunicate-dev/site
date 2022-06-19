import { gql } from 'graphql-request';
import { Locale } from '../defs/i18n';
import { graphQLClient } from './api';

export const getForm = async (id: string, locale: Locale): Promise<any> => {
    const query = gql`
        {
            formCollection(where: { id: "${id}" }, locale: "${locale}") {
                items {
                    id
                    successMessage
                    errorMessage
                    fieldCollection {
                        items {
                        ... on Field {
                                name
                                placeholder
                                label
                                type
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const result = await graphQLClient.request(query);
        const form = result.formCollection?.items[0];
        const fields = form.fieldCollection?.items;

        return {
            id: form.id,
            successMessage: form.successMessage,
            errorMessage: form.errorMessage,
            fields
        };
    } catch (error: any) {
        throw new Error(error);
    }
}
