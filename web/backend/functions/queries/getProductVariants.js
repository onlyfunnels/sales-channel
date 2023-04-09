import { postToShopify } from "../utils/postToShopify.js"

const productVariantHandler = async (storefront_endpoint, storefront_api_key) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query {
          products(first:2) {
            edges {
              node {
                variants(first: 2) {
                  edges {
                    node {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `
    }, storefront_endpoint, storefront_api_key)

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}

export default productVariantHandler;