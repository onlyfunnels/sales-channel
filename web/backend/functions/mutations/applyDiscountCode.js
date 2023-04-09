import { postToShopify } from "../utils/postToShopify.js"

const applyDiscountCodeHandler = async (query) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        mutation applyDiscountCodeToCheckout($checkoutId: ID!, $discountCode: String!) {
          checkoutDiscountCodeApplyV2(checkoutId: $checkoutId, discountCode: $discountCode) {
            checkout {
              discountApplications(first: 10) {
                edges {
                  node {
                    allocationMethod
                    targetSelection
                    targetType
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
        checkoutId: query.checkoutId,
        discountCode: query.discountCode
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

export default applyDiscountCodeHandler;