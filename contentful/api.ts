import { GraphQLClient } from 'graphql-request';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const token = process.env.VERCEL_ENV !== 'production'
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;


export const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${token}`,
    },
});
