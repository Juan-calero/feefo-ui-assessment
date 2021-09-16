import { render, screen, cleanup } from "@testing-library/react"
import AccMetric from "./AccMetric"

const accMetric = <AccMetric percent={37} text='upload success' />

test("Renders AccMetrics", () => {
  expect(render(accMetric)).toMatchSnapshot()
})

describe("Test AccMetric's element display", () => {
  beforeEach(() => render(accMetric))
  afterEach(cleanup)

  test("Displays AccMetrics with 37%", () => {
    const checkPercentage = screen.getByText(/37%/i)
    expect(checkPercentage).toBeInTheDocument()
  })
  test("Displays AccMetrics with 'upload success'", () => {
    const checkText = screen.getByText(/upload success/i)
    expect(checkText).toBeInTheDocument()
  })
})
