class ProductReviewsApp {
  constructor() {
    this.reviews = []
    this.reviewBeingAdded = {}

    let starSvg = document.createElement("div")
    starSvg.classList.add("star")
    starSvg.innerHTML = `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xml:space="preserve"
        xmlns:serif="http://www.serif.com/"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M24.522,1.546c0.065,-0.21 0.259,-0.352 0.478,-0.352c0.219,-0 0.413,0.142 0.478,0.352c1.267,4.102 4.663,15.092 5.315,17.2c0.065,0.209 0.258,0.352 0.478,0.352c2.16,0 13.214,0 17.251,0c0.214,0 0.405,0.137 0.473,0.34c0.069,0.203 0.001,0.427 -0.17,0.558c-3.261,2.491 -12.3,9.396 -13.999,10.694c-0.166,0.127 -0.236,0.345 -0.174,0.545c0.639,2.068 4.078,13.197 5.337,17.27c0.064,0.208 -0.013,0.434 -0.192,0.558c-0.178,0.125 -0.416,0.119 -0.589,-0.013c-3.301,-2.521 -12.153,-9.284 -13.904,-10.622c-0.18,-0.136 -0.428,-0.136 -0.608,0c-1.751,1.338 -10.603,8.101 -13.904,10.622c-0.173,0.132 -0.411,0.138 -0.589,0.013c-0.179,-0.124 -0.256,-0.35 -0.192,-0.558c1.259,-4.073 4.698,-15.202 5.337,-17.27c0.062,-0.2 -0.008,-0.418 -0.174,-0.545c-1.699,-1.298 -10.738,-8.203 -13.999,-10.694c-0.171,-0.131 -0.239,-0.355 -0.17,-0.558c0.068,-0.203 0.259,-0.34 0.473,-0.34c4.037,0 15.091,0 17.251,0c0.22,0 0.413,-0.143 0.478,-0.352c0.652,-2.108 4.048,-13.098 5.315,-17.2Z"/>
      </svg>
    `;
    this.starSvg = starSvg
  }

  async init() {
    this.addReviewModal = document.getElementById("addReviewModal")
    this.reviewsListEl = document.getElementById("reviewsList")
    this.renderReviews()
    this.renderHeaderMeta()
    this.initAddReviewStars()
  }

  initAddReviewStars() {
    let addReviewModalStarsEl = document.getElementById("addReviewModalStars")
    for(let i = 0; i < 5; i++) {
      let starSvgEl = this.starSvg.cloneNode(true)
      starSvgEl.classList.add("add-review-star")
      starSvgEl.dataset.rating = `${i}`
      starSvgEl.addEventListener("click", () => this.setReviewRating(i + 1))
      starSvgEl.addEventListener("mouseover", () => this.highlightStars(i))
      starSvgEl.addEventListener("mouseout", () => this.resetHighlightStars())
      addReviewModalStarsEl.appendChild(starSvgEl)
    }
  }

  setReviewRating(rating) {
    this.reviewBeingAdded.rating = rating
  }

  highlightStars(count) {
    this.resetHighlightStars()
    let addReviewStars = document.getElementsByClassName("add-review-star")
    let addReviewStarsArr = Array.from(addReviewStars)
    addReviewStarsArr.forEach(el => {
      if(el.dataset.rating && el.dataset.rating <= count) {
        el.classList.add("filled")
      } else {
        el.classList.remove("filled")
      }
    })
  }

  resetHighlightStars() {
    let addReviewStars = document.getElementsByClassName("add-review-star")
    let addReviewStarsArr = Array.from(addReviewStars)
    addReviewStarsArr.forEach(el => {
      if(el.dataset.rating && el.dataset.rating <= this.reviewBeingAdded.rating - 1) {
        el.classList.add("filled")
      } else {
        el.classList.remove("filled")
      }
    })
  }

  showAddReviewModal() {
    this.addReviewModal.style.visibility = "visible"
    this.addReviewModal.style.display = "flex"
  }

  hideAddReviewModal(e) {
    if(e && e.target && e.target.id !== "addReviewModal") {
      // Prevent children click events from triggering hide
      return
    }
    this.resetAddRatingModal()
    this.addReviewModal.style.visibility = "hidden"
    this.addReviewModal.style.display = "none"
  }

  submitReview() {
    // TODO: Implement this
    let ratingInputEl = document.getElementById("ratingInput")
    this.reviewBeingAdded.reviewContent = ratingInputEl.value
    this.reviews.push(this.reviewBeingAdded)
    this.renderHeaderMeta()
    this.renderReviews()
    this.hideAddReviewModal()
  }

  resetAddRatingModal() {
    let ratingInputEl = document.getElementById("ratingInput")
    this.reviewBeingAdded = {}
    this.resetHighlightStars()
    ratingInputEl.value = ""
  }

  renderHeaderMeta() {
    let ratingSummaryNumEl = document.getElementById("ratingSummaryNum")
    let ratingAvg = 0
    if(this.reviews.length > 0) {
      let ratingSum = this.reviews
        .map(el => el.rating)
        .reduce((acc, cur) => acc + cur)
      ratingAvg = ratingSum / this.reviews.length
      ratingAvg = ratingAvg.toFixed(1)
    }
    ratingSummaryNumEl.innerText = ratingAvg

    let ratingSummaryStarsEl = document.getElementById("ratingSummaryStars")
    ratingSummaryStarsEl.innerHTML = ""
    let rounded = ratingAvg.toFixed(0)
    for(let i = 0; i < 5; i++) {
      let starSvgEl = this.starSvg.cloneNode(true)
      if(i < rounded) {
        starSvgEl.classList.add("filled")
      }
      ratingSummaryStarsEl.appendChild(starSvgEl)
    }
  }

  renderReviews() {
    // Clear existing reviews
    this.reviewsListEl.innerHTML = ""
    this.reviews.forEach(el => {
      let ratingEl = document.createElement("div")
      ratingEl.classList.add("rating")
      let starsEl = document.createElement("div")
      starsEl.classList.add("stars")
      for(let i = 0; i < 5; i++) {
        let starSvgEl = this.starSvg.cloneNode(true)
        if(i < el.rating) {
          starSvgEl.classList.add("filled")
        }
        starsEl.appendChild(starSvgEl)
      }
      ratingEl.appendChild(starsEl)

      let reviewContentEl = document.createElement("div")
      reviewContentEl.classList.add("review-content")
      let reviewRatingNumEl = document.createElement("span")
      reviewRatingNumEl.classList.add("review-rating-num")
      reviewRatingNumEl.innerText = el.rating
      reviewContentEl.appendChild(reviewRatingNumEl)
      let reviewContentTextNode = document.createTextNode(el.reviewContent)
      reviewContentEl.appendChild(reviewContentTextNode)
      ratingEl.appendChild(reviewContentEl)

      this.reviewsListEl.appendChild(ratingEl)
    })
  }
}
