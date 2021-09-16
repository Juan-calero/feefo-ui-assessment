import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SInfoPanels = styled.div`
  flex: 1;
  padding: 1rem 1.15rem 1.2rem;
  background-color: #fdfdfd;
  border-top: 1px solid #e7e7e7;
  .percent {
    font-weight: bolder;
    font-size: 2rem;
    color: #00a152;
  }
  .label {
    font-weight: bolder;
    font-size: 0.845rem;
    line-height: 0.45rem;
    color: #757070;
  }
`

function AccMetric({ percent, text }) {
  return (
    <SInfoPanels>
      <p className='percent'>{percent}%</p>
      <p className='label'>{text.toUpperCase()}</p>
    </SInfoPanels>
  )
}

AccMetric.propTypes = {
  percent: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

AccMetric.defaultProps = {
  percent: 0,
  text: "",
}

export default AccMetric
