import { render, screen } from "@testing-library/react"
import AccContext from "../../../AccContext"
import Support from "./Support"

const accountData = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
    number: "020 3362 4208",
  },
}

const support = (
  <AccContext.Provider value={accountData}>
    <Support />
  </AccContext.Provider>
)

test("Renders Support", () => {
  expect(render(support)).toMatchSnapshot()
})

test("Displays Support with title: `YOUR FEEFO SUPPORT CONTACT`", () => {
  render(support)
  const title = screen.getByText(/your feefo support contact/i)
  expect(title).toBeInTheDocument()
})
