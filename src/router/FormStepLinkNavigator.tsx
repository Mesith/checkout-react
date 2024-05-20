import { Navigate, useLocation } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectCurrentFormStep } from "../features/checkout/CheckoutSlice"

const FormStepLinkNavigator = ({ children }: any) => {
  const location = useLocation()
  const currentStep = useAppSelector(selectCurrentFormStep)

  if (currentStep && currentStep !== location.pathname.slice(1)) {
    return <Navigate to={currentStep} replace state={{ from: location }} />
  }

  return children
}

export default FormStepLinkNavigator