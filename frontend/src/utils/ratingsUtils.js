exports.calculateRatingsAverage = function(ratings) {
  let ratingAvg = 0
  if(ratings.length > 0) {
    let ratingSum = ratings
      .map(el => el.rating)
      .reduce((acc, cur) => acc + cur)
    ratingAvg = ratingSum / ratings.length
    ratingAvg = ratingAvg.toFixed(1)
  }
  return ratingAvg
}