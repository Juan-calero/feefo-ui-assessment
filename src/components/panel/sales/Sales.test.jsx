import { cleanup, render, screen } from "@testing-library/react"
import Sales from "./Sales"

const sales = <Sales uploadsAdded={30} linesAdded={4} />

test("Renders Sales", () => {
  expect(render(sales)).toMatchSnapshot()
})

describe("Tests Sales component's elements", () => {
  beforeEach(() => render(sales))
  afterEach(() => cleanup)

  test("Displays 3 uploads in Sales component", () => {
    const uploads = screen.getByText(/30/)
    expect(uploads).toBeInTheDocument()
  })

  test("Displays 4 lines added in Sales component", () => {
    const lines = screen.getByText(/4/)
    expect(lines).toBeInTheDocument()
  })
})
