import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpload, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const StSales = styled.div`
  padding: 0.8rem 1.15rem 1.3rem;
  .salesText {
    font-size: 0.85rem;
    color: #555;
  }
`
const StTopRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.35rem;
  & h2 {
    font-size: 1rem;
    margin-left: 0.5rem;
    color: #2d2d2d;
  }
  .upload {
    color: #00a9e4;
  }
  .info {
    margin-left: auto;
    color: #b7b2b3;
    &:hover,
    &:focus {
      cursor: pointer;
      color: #959091;
    }
  }
`

function Sales({ uploadsAdded, linesAdded }) {
  return (
    <StSales>
      <StTopRow>
        <FontAwesomeIcon className='upload' icon={faUpload} />
        <h2>Sales</h2>
        <FontAwesomeIcon
          aria-hidden='false'
          aria-label='information circle icon'
          tabIndex='0'
          className='info'
          icon={faInfoCircle}
        />
      </StTopRow>
      <p className='salesText'>
        You had <strong>{uploadsAdded} uploads</strong> and{" "}
        <strong>{linesAdded}</strong> lines added.
      </p>
    </StSales>
  )
}

Sales.propTypes = {
  uploadsAdded: PropTypes.number.isRequired,
  linesAdded: PropTypes.number.isRequired,
}

Sales.defaultProps = {
  uploadsAdded: 0,
  linesAdded: 0,
}

export default Sales
