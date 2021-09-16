import "./app.css"
import AccountOverview from "./AccountOverview"
import AccContext from "./AccContext"

function App() {
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

  return (
    <AccContext.Provider value={accountData}>
      <AccountOverview />
    </AccContext.Provider>
  )
}

export default App
