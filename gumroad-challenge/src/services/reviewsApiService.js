exports.fetchReviews = async function (productId) {
  let res = await fetch (`/api/products/${productId}/reviews`)
  return await res.json()
}

exports.addReview = async function (review) {
  let res = await fetch(`/api/reviews`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })
  await res.json()
}