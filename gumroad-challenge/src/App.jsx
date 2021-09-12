import styled from 'styled-components'
import ReviewsList from './components/ReviewsList'
import Stars from './components/Stars'
import Button from './components/Button'
import { useEffect, useState } from 'react'
import reviewsApiService from './services/reviewsApiService'
import { calculateRatingsAverage } from './utils/ratingsUtils'

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
`

const Header = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #eee;

  .app-meta {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .rating-summary-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      margin:20px 0px;
    }
  }
`

function App() {
  const [selectedProductId] = useState("309530617782993475")
  const [reviews, setReviews] = useState([])
  const [ratingsAvg, setRatingsAvg] = useState(0)

  useEffect(() => {
    async function init() {
      let reviews = await reviewsApiService.fetchReviews(selectedProductId)
      setReviews(reviews)

      // Calculate ratings average
      let avg = calculateRatingsAverage(reviews)
      setRatingsAvg(avg)
    }
    init()
  }, [])

  function showAddReviewModal() {
    console.log("showAddReviewModal clicked")
  }

  return (
    <AppWrapper>
      <Header>
        <h1 className="app-title">The Minimalist Entrepreneur</h1>
        <div className="app-meta">
          <div className="rating-summary-wrapper">
            <Stars count={ratingsAvg} />
          </div>
          <Button onClick={() => showAddReviewModal()}>Add Review</Button>
        </div>
      </Header>
      <ReviewsList reviews={reviews} />
    </AppWrapper>
  );
}

export default App;
