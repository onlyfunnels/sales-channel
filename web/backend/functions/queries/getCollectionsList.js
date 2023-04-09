import { postToShopify } from "../utils/postToShopify.js"
// import { GraphqlQueryError } from "@shopify/shopify-api";
// import shopify from "../../../shopify.js";

const collectionHandler = async (query) => {
  const first = parseInt(query.first);
  const cursor = query.cursor;
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getCollectionList($numProducts: Int!, $cursor: String) {
          collections(first: $numProducts, after: $cursor) {
            nodes {
              id
              handle
              description
              title
            }
            pageInfo {
              startCursor
              hasNextPage
              endCursor
              hasPreviousPage
            }
          }
        }
      `,
      variables: {
        numProducts: first,
        cursor: cursor
      }
    })

    console.log("response", shopifyResponse)

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}


export default collectionHandler;