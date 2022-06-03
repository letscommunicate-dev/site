import { gql, GraphQLClient } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const token = process.env.VERCEL_ENV !== 'production'
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

console.log({ env: process.env.VERCEL_ENV });
console.log({ token });

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${token}`,
    },
})

export const getProfile = async (slug: string) => {
    const query = gql`
        {
            profileCollection(where: { slug: "${slug}" }) {
                items {
                    name
                    slug
                }
            }
        }
    `;

    try {
        const result = await graphQLClient.request(query);
        return result.profileCollection.items[0];
    } catch (error) {
        return error;
    }
}