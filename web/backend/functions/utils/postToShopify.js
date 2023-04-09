import fetch from "node-fetch"

export const postToShopify = async ({ query, variables }, storefront_endpoint, storefront_api_key) => {
  try {
    const result = await fetch(storefront_endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token':
        storefront_api_key,
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
