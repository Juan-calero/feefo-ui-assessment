import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StPhoto = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 0.9rem;
  height: 2.5rem;
  min-width: 2.5rem;
  border-radius: 0.5rem;
  background-color: #ffc732;
`

function SupportPhoto({ name }) {
  const nameArr = name.split(" ")
  const initials =
    nameArr[0][0] + (nameArr.length > 1 ? nameArr[nameArr.length - 1][0] : "")

  return <StPhoto>{name && initials}</StPhoto>
}

SupportPhoto.propTypes = {
  name: PropTypes.string.isRequired,
}

SupportPhoto.defaultProps = {
  name: "Support",
}

export default SupportPhoto
