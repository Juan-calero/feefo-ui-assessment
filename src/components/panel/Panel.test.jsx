import { render } from "@testing-library/react"
import AccContext from "../../AccContext"
import Panel from "./Panel"

const accountData = {
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
}

const panel = render(
  <AccContext.Provider value={accountData}>
    <Panel />
  </AccContext.Provider>
)

test("Renders Panel", () => expect(panel).toMatchSnapshot())
