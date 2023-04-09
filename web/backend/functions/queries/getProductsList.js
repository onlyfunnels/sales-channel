import { postToShopify } from "../utils/postToShopify.js"
// import { GraphqlQueryError } from "@shopify/shopify-api";
// import shopify from "../../../shopify.js";

const productHandler = async (query, storefront_endpoint, storefront_api_key ) => {
  const first = parseInt(query.first);
  const cursor = query.cursor;
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getProductList($numProducts: Int!, $cursor: String) {
          products(first: $numProducts, after: $cursor) {
            nodes {
              id
              handle
              description
              title
              productType
              totalInventory
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
    }, storefront_endpoint, storefront_api_key)

    console.log("response", shopifyResponse)

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}


export default productHandler;