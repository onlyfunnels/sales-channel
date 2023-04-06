import fetch from "node-fetch"

export const postToShopify = async ({ query, variables }) => {
  try {
    console.log("********", process.env.SHOPIFY_API_ENDPOINT)
    const result = await fetch(process.env.SHOPIFY_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token':
          process.env.SHOPIFY_STOREFRONT_API_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }).then((res) => res.json())

    console.log("result", result)
    // Check to make sure we actually have data
    // Otherwise return the correct response so
    // it can be handled properly on the receiving end
    if (result.errors) {
      console.log({ errors: result.errors })
    } else if (!result || !result.data) {
      console.log({ result })
      return 'No results found.'
    }

    return result.data
  } catch (error) {
    console.log(error)
  }
}
