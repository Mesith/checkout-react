import { Outlet } from "react-router-dom"
import HeaderNavBar from "../../componants/HeaderNavBar"
import FormStepLinkNavigator from "../../router/FormStepLinkNavigator"
import { setCurrenFormStep } from "../checkout/CheckoutSlice"
import { useAppDispatch } from "../../app/hooks"
import { useLocationEffect } from "../../hooks/useLocation"

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
        <Outlet />
      </FormStepLinkNavigator>
    </div>
  )
}

export default Home
