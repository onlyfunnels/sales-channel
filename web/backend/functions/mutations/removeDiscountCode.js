import { postToShopify } from "../utils/postToShopify.js"

const removeDiscountCodeHandler = async (query) => {
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
    })

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