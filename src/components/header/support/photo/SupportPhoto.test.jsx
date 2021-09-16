import { render, screen } from "@testing-library/react"
import SupportPhoto from "./SupportPhoto"

const photoComponent = <SupportPhoto name='John Smith' />

test("Renders SupportPhoto", () => {
  expect(render(photoComponent)).toMatchSnapshot()
})
test("Displays initials", () => {
  render(photoComponent)
  const initials = screen.getByText(/JS/i)
  expect(initials).toBeInTheDocument()
})
test("Displays default initial when no `name` prop", () => {
  render(<SupportPhoto />)
  const initials = screen.getByText(/S/i)
  expect(initials).toBeInTheDocument()
})
