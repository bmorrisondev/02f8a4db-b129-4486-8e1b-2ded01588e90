class ProductReviewsApp {
  async init() {
    this.addReviewModal = document.getElementById("addReviewModal")
  }

  showAddReviewModal() {
    this.addReviewModal.style.visibility = "visible"
    this.addReviewModal.style.display = "flex"
  }

  hideAddReviewModal() {
    this.addReviewModal.style.visibility = "hidden"
    this.addReviewModal.style.display = "none"
  }

  submitReview() {
    // TODO: Implement this
    this.hideAddReviewModal()
  }
}
