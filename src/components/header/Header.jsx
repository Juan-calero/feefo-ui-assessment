import React from "react"
import styled from "styled-components"
import Support from "./support/Support"

const StyledHeader = styled.div`
  display: flex;
  & h1 {
    flex: 3;
    font-weight: normal;
    color: #3f3c3d;
  }
  @media (max-width: 599px) {
    flex-direction: column;
    margin: 0rem 1rem 2rem;
    & h1 {
      margin-bottom: 1.7rem;
    }
  }
  @media (min-width: 600px) {
    align-items: center;
    margin-bottom: 2.35rem;
  }
`

function Header() {
  return (
    <StyledHeader>
      <h1>Account Overview</h1>
      <Support />
    </StyledHeader>
  )
}
export default Header
