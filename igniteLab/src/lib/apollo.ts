import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rbwsjb0tcd01yxebxmdq6j/master',
    cache: new InMemoryCache()
})