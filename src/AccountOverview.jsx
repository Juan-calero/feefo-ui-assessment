import React from "react"
import styled from "styled-components"
import Header from "./components/header/Header"
import Panel from "./components/panel/Panel"

const StAccOverview = styled.section`
  max-width: min(100%, 41.2rem);
  background-color: #f2f2f2;
  @media (max-width: 599px) {
    padding: 1.4rem 3% 2.4rem;
    margin: 0 auto;
  }
  @media (min-width: 600px) {
    padding: 1.4rem 2.2rem 2.4rem 2.65rem;
    margin: 2rem auto;
  }
`

const AccountOverview = () => {
  return (
    <StAccOverview>
      <Header />
      <Panel aria-label='Account Panel' />
    </StAccOverview>
  )
}

export default AccountOverview
