import { Outlet } from "react-router-dom"
import HeaderNavBar from "../../componants/HeaderNavBar"
import FormStepLinkNavigator from "../../router/FormStepLinkNavigator"
import { setCurrenFormStep } from "../checkout/CheckoutSlice"
import { useAppDispatch } from "../../app/hooks"
import { useLocationEffect } from "../../hooks/useLocation"
import ErrorBoundary from "../../componants/errors/ErrorBoundary"
import { ErrorView } from "../../componants/errors/ErrorView"

const Home = () => {
  const dispatch = useAppDispatch()

  // updating state of current step. later can resume if user leave
  useLocationEffect((location: any) => {
    dispatch(setCurrenFormStep(location.pathname))
  })

  return (
    <div>
      <HeaderNavBar />
      <FormStepLinkNavigator>
        <ErrorBoundary fallback={<ErrorView />}>
          <Outlet />
        </ErrorBoundary>
      </FormStepLinkNavigator>
    </div>
  )
}

export default Home
