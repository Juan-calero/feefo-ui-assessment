import { render, screen } from "@testing-library/react"
import AccContext from "../../AccContext"
import Header from "./Header"

const accountData = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
    number: "020 3362 4208",
  },
}

const header = (
  <AccContext.Provider value={accountData}>
    <Header />
  </AccContext.Provider>
)

test("Renders Header", () => {
  expect(render(header)).toMatchSnapshot()
})
test("Displays Header title: `Account Overview`", () => {
  render(header)
  const element = screen.getByText(/Account Overview/i)
  expect(element).toBeInTheDocument()
})
