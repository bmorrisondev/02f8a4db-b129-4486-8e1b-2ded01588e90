exports.fetchReviews = async function (productId) {
  let res = await fetch (`/api/products/${productId}/reviews`)
  return await res.json()
}