import { cleanup, render, screen } from "@testing-library/react"
import SupportDetails from "./SupportDetails"

const detailsComponent = (
  <SupportDetails
    name='John Smith'
    email='john.smith@feefo.com'
    number='020 3362 4208'
  />
)

test("Renders SupportDetails", () => {
  expect(render(detailsComponent)).toMatchSnapshot()
})

describe("Test SupportDetails' elements", () => {
  beforeEach(() => render(detailsComponent))
  afterEach(cleanup)

  test("Displays email", () => {
    const email = screen.getByText(/john.smith@feefo.com/i)
    expect(email).toBeInTheDocument()
  })
  test("Displays phone", () => {
    const phone = screen.getByText(/020 3362 4208/i)
    expect(phone).toBeInTheDocument()
  })
  test("Displays name", () => {
    const name = screen.getByText(/John Smith/i)
    expect(name).toBeInTheDocument()
  })
})
