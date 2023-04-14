import { postToShopify } from "../utils/postToShopify.js"

const removeLineItemsHandler = async (query, storefront_endpoint, storefront_api_key) => {
  console.log(query)
  try {
    const shopifyResponse = await postToShopify({
      query: `
        mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
          checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
            checkout {
              id
              webUrl
              ready
              currencyCode
              subtotalPrice {
                amount
                currencyCode
              }
              taxesIncluded
              totalTax {
                amount
                currencyCode
              }
              totalPrice {
                amount
                currencyCode
              }
              lineItems(first: 250) {
                edges {
                  node {
                    id
                    title
                    quantity
                    variant {
                      id
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
            checkoutUserErrors {
              code
              field
              message
            }
          }
        }
      `,
      variables: {
        checkoutId: query.checkoutId,
        lineItemIds: query.lineItemIds
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

export default removeLineItemsHandler;