import { postToShopify } from "../utils/postToShopify.js"

const createCheckout = async (query, storefront_endpoint, storefront_api_key) => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
          mutation createCheckout($input: CheckoutCreateInput!) {
            checkoutCreate(input: $input) {
              checkout {
                id
                webUrl
                lineItemsSubtotalPrice {
                  amount
                  currencyCode
                }
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
                lineItems(first: 20) {
                  edges {
                    node {
                      id
                      title
                      quantity

                      variant {
                        id
                        title

                        product {
                          id
                        }
                        image {
                          altText
                          url
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
            }
          }
      `,
      variables: {
        input: query.input
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

export default createCheckout;
