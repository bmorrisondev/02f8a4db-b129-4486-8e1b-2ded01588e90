const fetchReviews = async function (productId) {
  let res = await fetch (`/api/products/${productId}/reviews`)
  return await res.json()
}

const addReview = async function (review) {
  let res = await fetch(`/api/reviews`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(review)
  })
  await res.json()
}

const ReviewsApiService = {
  fetchReviews,
  addReview
}

export default ReviewsApiService