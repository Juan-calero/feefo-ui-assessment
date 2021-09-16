import React, { useContext } from "react"
import styled from "styled-components"
import AccountContext from "../../AccContext"
import AccMetric from "./metrics/AccMetric"
import Sales from "./sales/Sales"

const StPanel = styled.div`
  box-shadow: 3px 3px 12px #eee;
  border-radius: 7px;
  background-color: white;
`
const StMetricPanels = styled.div`
  @media (max-width: 599px) {
    flex-direction: column;
    & div:last-child {
      border-radius: 0 0 7px 7px;
    }
  }
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    & div:first-child {
      border-right: 1px solid #e7e7e7;
      border-radius: 0 0 0 7px;
    }
    & div:last-child {
      border-radius: 0 0 7px 0;
    }
  }
`

function Panel() {
  const {
    salesOverview: { uploads, successfulUploads, linesAttempted, linesSaved },
  } = useContext(AccountContext)

  const getRate = (attempts, successes) =>
    Math.floor((successes * 100) / attempts)

  return (
    <StPanel>
      <Sales
        uploadsAdded={successfulUploads}
        linesAdded={linesSaved}
        aria-label='Sales Panel containing sales overview'
      />
      <StMetricPanels>
        <AccMetric
          percent={getRate(uploads, successfulUploads)}
          text='upload success'
          aria-label='Percentage Panel containing successful uploads'
        />
        <AccMetric
          percent={getRate(linesAttempted, linesSaved)}
          text='lines saved'
          aria-label='Percentage Panel containing saved lines'
        />
      </StMetricPanels>
    </StPanel>
  )
}

export default Panel
