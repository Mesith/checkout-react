import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./app/store"
import { router } from "./router/router"
import { useEffect } from "react"
import { growthbook } from "./growthbook/growthbook"
import { GrowthBookProvider } from "@growthbook/growthbook-react"
import ErrorBoundary from "./componants/errors/ErrorBoundary"
import { ErrorView } from "./componants/errors/ErrorView"

const App = () => {
  useEffect(() => {
    growthbook.init({ streaming: true })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GrowthBookProvider growthbook={growthbook}>
          <RouterProvider router={router} />
        </GrowthBookProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
