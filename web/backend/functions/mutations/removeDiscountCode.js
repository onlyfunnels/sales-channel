import { postToShopify } from "../utils/postToShopify.js"

const removeDiscountCodeHandler = async (query, storefront_endpoint, storefront_api_key) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        mutation checkoutDiscountCodeRemove($checkoutId: ID!) {
          checkoutDiscountCodeRemove(checkoutId: $checkoutId) {
            checkout {
              id
              webUrl
              lineItems(first: 5) {
                edges {
                  node {
                    title
                    quantity
                  }
                }
              }
            }
            checkoutUserErrors {
              message
              code
              field
            }
          }
        }
      `,
      variables: {
        checkoutId: query.checkoutId
      }
    }, storefront_endpoint, storefront_api_key)

    console.log("Mutation Response", shopifyResponse)

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}

export default removeDiscountCodeHandler;