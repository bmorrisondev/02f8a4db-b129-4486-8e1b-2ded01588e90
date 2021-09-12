import styled from 'styled-components'
import ReviewsList from './components/ReviewsList'
import Stars from './components/Stars'
import Button from './components/Button'

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

  function showAddReviewModal() {
    console.log("showAddReviewModal clicked")
  }

  return (
    <AppWrapper>
      <Header>
        <h1 class="app-title">The Minimalist Entrepreneur</h1>
        <div class="app-meta">
          <div class="rating-summary-wrapper">
            <Stars count="4" />
          </div>
          <Button onClick={() => showAddReviewModal()}>Add Review</Button>
        </div>
      </Header>
      <ReviewsList />
    </AppWrapper>
  );
}

export default App;
