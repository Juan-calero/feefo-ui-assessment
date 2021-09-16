import { render } from "@testing-library/react"
import AccContext from "./AccContext"
import AccountOverview from "./AccountOverview"

const accountData = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
    number: "020 3362 4208",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
}

const overview = render(
  <AccContext.Provider value={accountData}>
    <AccountOverview />
  </AccContext.Provider>
)

test("renders learn react link", () => {
  expect(overview).toMatchSnapshot()
})
