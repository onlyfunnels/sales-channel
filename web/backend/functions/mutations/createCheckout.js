import { postToShopify } from "../utils/postToShopify.js"

const createCheckout = async () => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
          mutation {
            checkoutCreate(input: {
              lineItems: [{ variantId: "gid://shopify/ProductVariant/44604959392021", quantity: 1 }]
            }) {
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
            }
          }
      `
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

export default createCheckout;