import React, { useContext } from "react"
import AccountContext from "../../../AccContext"
import SupportDetails from "./details/SupportDetails"
import SupportPhoto from "./photo/SupportPhoto"
import styled from "styled-components"

export const StSupport = styled.section`
  flex: 4;
  & h2 {
    font-size: 0.85rem;
    margin-bottom: 0.65rem;
    color: #706b6b;
  }
  .card {
    display: flex;
  }
  @media (max-width: 599px) {
    margin: 0;
  }
  @media (min-width: 600px) {
    margin: auto;
  }
`

function Support() {
  const { supportContact } = useContext(AccountContext)
  return (
    <StSupport>
      <h2>YOUR FEEFO SUPPORT CONTACT</h2>
      <div className='card'>
        <SupportPhoto name={supportContact.name} />
        <SupportDetails
          aria-label='feefo support contact information'
          {...supportContact}
        />
      </div>
    </StSupport>
  )
}

export default Support
