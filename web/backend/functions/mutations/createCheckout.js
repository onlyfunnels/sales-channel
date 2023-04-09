import { postToShopify } from "../utils/postToShopify.js"

const createCheckout = async (query) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
          mutation createCheckout($input: CheckoutCreateInput!) {
            checkoutCreate(input: $input) {
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
      `,
      variables: {
        input: query.input
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

export default createCheckout;
