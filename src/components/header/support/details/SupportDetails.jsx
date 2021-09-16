import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const StSupportDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 16.1rem;
  margin-left: 0.7rem;
  & h3 {
    font-size: 0.8rem;
    color: #3f3c3d;
  }
  .icon,
  a {
    color: #555;
  }
  .contacts {
    display: flex;
    flex-wrap: wrap;
    & a {
      margin: 0 0.6rem 0 0.3rem;
      font-size: 0.8rem;
      &:hover,
      &:focus {
        color: #00a152;
      }
    }
    & a:last-child {
      margin-left: auto;
    }
  }
  @media (max-width: 360px) {
    .contacts {
      & a:last-child {
        margin: 0;
        display: block;
      }
    }
  }
`

function SupportDetails({ email, name, number }) {
  return (
    <StSupportDetails>
      <h3>{name}</h3>
      <div className='contacts'>
        <FontAwesomeIcon className='icon' icon={faEnvelope} />
        <a rel='noopener noreferrer' href={`mailto:${email}`}>
          {email}
        </a>
        <a rel='noopener noreferrer' href={`tel:${number.split(" ").join("")}`}>
          {number}
        </a>
      </div>
    </StSupportDetails>
  )
}

SupportDetails.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}

SupportDetails.defaultProps = {
  name: "Support",
  email: "",
  number: "",
}

export default SupportDetails
