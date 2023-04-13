import { postToShopify } from "../utils/postToShopify.js"

const addLineItemsHandler = async (query, storefront_endpoint, storefront_api_key) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
          checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
            checkout {
              id
              ready
              currencyCode
              webUrl
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
                      title
                      
                      image {
                        altText
                        url
                      }

                      price {
                        amount
                        currencyCode
                      }

                      compareAtPrice {
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
        lineItems: query.lineItems
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

export default addLineItemsHandler;